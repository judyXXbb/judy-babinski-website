import { useState } from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  display: 'optional',
})

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('') // honeypot — real users leave this blank
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, website }),
      })

      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      // Network failure (offline, timeout) — don't leave the form hanging on "Sending..."
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      {/* Honeypot — hidden from humans, bots fill it and get rejected server-side */}
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
      </div>

      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '20px', marginBottom: '20px' }}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            maxLength={100}
            className={`placeholder:italic placeholder:text-[12px] ${montserrat.className}`}
            style={{ width: '100%', backgroundColor: '#f5f5f5', border: 'none', padding: '10px', color: '#666666', fontSize: '14px' }}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            maxLength={200}
            className={`placeholder:italic placeholder:text-[12px] ${montserrat.className}`}
            style={{ width: '100%', backgroundColor: '#f5f5f5', border: 'none', padding: '10px', color: '#666666', fontSize: '14px' }}
          />
        </div>
      </div>

      {/* Row 2: Message */}
      <div style={{ marginBottom: '20px' }}>
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          maxLength={5000}
          className={`placeholder:italic placeholder:text-[12px] ${montserrat.className}`}
          style={{ width: '100%', backgroundColor: '#f5f5f5', border: 'none', padding: '10px', color: '#666666', fontSize: '14px', resize: 'vertical' }}
        />
      </div>

      {/* Row 3: Submit */}
      <div className="flex items-center" style={{ justifyContent: 'flex-end' }}>
        <button
          type="submit"
          disabled={status === 'sending'}
          className={`rounded-full tracking-wider uppercase transition-colors ${montserrat.className}`}
          style={{ fontSize: '12px', color: '#666666', padding: '7px 17px', fontWeight: '400', backgroundColor: 'rgba(158,239,217,0.21)' }}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Thank You Text */}
      <p className={`text-center ${montserrat.className}`} style={{ fontSize: '34px', fontWeight: '400', color: '#666666', marginTop: '-15px', paddingBottom: '25px' }}>
        Thank you!!
      </p>

      {/* Status Messages */}
      {status === 'success' && (
        <p className={montserrat.className} style={{ color: '#666666', fontSize: '13px', marginTop: '10px' }}>
          Your message has been sent. Thank you!
        </p>
      )}
      {status === 'error' && (
        <p className={montserrat.className} style={{ color: '#cc0000', fontSize: '13px', marginTop: '10px' }}>
          Something went wrong. Please try again or email directly.
        </p>
      )}

    </form>
  )
}
