import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') { res.status(405).end(); return }

  const { name, email, message, captcha, website } = req.body

  // Honeypot: real visitors never see or fill the "website" field.
  // If it's filled, it's a bot — silently accept so it doesn't retry.
  if (website) { res.status(200).json({ success: true }); return }

  // Server-side captcha check ("3 + 4 ="). Bots POSTing directly
  // to the API can't bypass this the way they bypass browser JS.
  if (parseInt(captcha) !== 7) {
    res.status(400).json({ error: 'Captcha failed' })
    return
  }

  // Require all fields, with a basic email format check.
  const trimmedName = typeof name === 'string' ? name.trim() : ''
  const trimmedEmail = typeof email === 'string' ? email.trim() : ''
  const trimmedMessage = typeof message === 'string' ? message.trim() : ''
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)

  if (!trimmedName || !emailValid || !trimmedMessage) {
    res.status(400).json({ error: 'Invalid submission' })
    return
  }

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
  })

  try {
    await transporter.sendMail({
      from: `"${trimmedName}" <${process.env.CONTACT_EMAIL_USER}>`,
      to: 'judy@judybabinskiphotos.com',
      replyTo: trimmedEmail,
      subject: `New contact form message from ${trimmedName}`,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
    })
    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to send email' })
  }
}
