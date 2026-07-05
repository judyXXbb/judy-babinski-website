import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

// --- Simple in-memory, per-IP rate limiting ---
// Best-effort within a single warm Lambda instance. Enough to stop a scripted
// flood of the contact form at this site's scale; no external store needed.
const RATE_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const RATE_MAX = 5                    // max sends per IP per window
const RATE_MIN_GAP_MS = 30 * 1000     // minimum gap between sends per IP
const recentSends = new Map<string, number[]>()

// Field length caps — reject oversized payloads before doing any work.
const MAX_NAME = 100
const MAX_EMAIL = 200
const MAX_MESSAGE = 5000

function getIp(req: NextApiRequest): string {
  const fwd = req.headers['x-forwarded-for']
  const first = Array.isArray(fwd) ? fwd[0] : fwd?.split(',')[0]
  return (first || req.socket?.remoteAddress || 'unknown').trim()
}

// Returns true if this IP is over its rate limit. Records the send time otherwise.
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const times = (recentSends.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS)

  if (times.length >= RATE_MAX) { recentSends.set(ip, times); return true }
  if (times.length && now - times[times.length - 1] < RATE_MIN_GAP_MS) {
    recentSends.set(ip, times); return true
  }

  times.push(now)
  recentSends.set(ip, times)

  // Opportunistic cleanup so the map can't grow without bound.
  if (recentSends.size > 5000) {
    recentSends.forEach((stamps, key) => {
      const fresh = stamps.filter(t => now - t < RATE_WINDOW_MS)
      if (fresh.length) recentSends.set(key, fresh)
      else recentSends.delete(key)
    })
  }
  return false
}

// Strip quotes and control characters so a name can't garble the email
// From display-name or Subject header.
function sanitizeName(value: string): string {
  return value.replace(/["\r\n]/g, '').replace(/[\x00-\x1F\x7F]/g, '').trim()
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).end()
    return
  }

  const { name, email, message, website } = req.body

  // Honeypot: real visitors never see or fill the "website" field.
  // If it's filled, it's a bot — silently accept so it doesn't retry.
  if (website) { res.status(200).json({ success: true }); return }

  // Require all fields, enforce length caps, and check email format.
  const trimmedName = typeof name === 'string' ? name.trim() : ''
  const trimmedEmail = typeof email === 'string' ? email.trim() : ''
  const trimmedMessage = typeof message === 'string' ? message.trim() : ''
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)

  if (
    !trimmedName || !emailValid || !trimmedMessage ||
    trimmedName.length > MAX_NAME ||
    trimmedEmail.length > MAX_EMAIL ||
    trimmedMessage.length > MAX_MESSAGE
  ) {
    res.status(400).json({ error: 'Invalid submission' })
    return
  }

  // Rate limit by IP — only genuine, valid submissions count toward the limit.
  const ip = getIp(req)
  if (isRateLimited(ip)) {
    res.setHeader('Retry-After', '60')
    res.status(429).json({ error: 'Too many requests. Please try again in a little while.' })
    return
  }

  const safeName = sanitizeName(trimmedName)

  const port = Number(process.env.CONTACT_SMTP_PORT) || 587
  const transporter = nodemailer.createTransport({
    host: process.env.CONTACT_SMTP_HOST,
    port,
    secure: port === 465,      // 465 = implicit TLS, 587 = STARTTLS
    requireTLS: port !== 465,
    auth: {
      user: process.env.CONTACT_EMAIL_USER,
      pass: process.env.CONTACT_EMAIL_PASS,
    },
    // Fail fast if the mail server is slow/unreachable so the visitor
    // sees an error promptly instead of a long hang on "Sending...".
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  })

  try {
    await transporter.sendMail({
      from: `"${safeName}" <${process.env.CONTACT_EMAIL_USER}>`,
      to: 'judy@judybabinskiphotos.com',
      replyTo: trimmedEmail,
      subject: `New contact form message from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
    })
    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to send email' })
  }
}
