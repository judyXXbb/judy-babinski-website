import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') { res.status(405).end(); return }

  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    host: process.env.CONTACT_SMTP_HOST,
    port: Number(process.env.CONTACT_SMTP_PORT) || 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.CONTACT_EMAIL_USER,
      pass: process.env.CONTACT_EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.CONTACT_EMAIL_USER}>`,
      to: 'judy@judybabinskiphotos.com',
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })
    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to send email' })
  }
}
