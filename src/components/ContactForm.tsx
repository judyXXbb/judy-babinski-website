'use client'
import { useState } from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'captchaFail'>('idle')
  const [errorDetail, setErrorDetail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (parseInt(captchaAnswer) !== 7) {
      setStatus('captchaFail')
      return
    }

    setStatus('sending')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })

    if (res.ok) {
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
      setCaptchaAnswer('')
    } else {
      const data = await res.json()
      setErrorDetail(data.error || 'Unknown error')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>

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
          className={`placeholder:italic placeholder:text-[12px] ${montserrat.className}`}
          style={{ width: '100%', backgroundColor: '#f5f5f5', border: 'none', padding: '10px', color: '#666666', fontSize: '14px', resize: 'vertical' }}
        />
      </div>

      {/* Row 3: Captcha + Submit */}
      <div className="flex items-center gap-4" style={{ justifyContent: 'flex-end' }}>
        <span className={montserrat.className} style={{ fontSize: '14px', color: '#666666' }}>3 + 4 =</span>
        <input
          type="number"
          value={captchaAnswer}
          onChange={e => setCaptchaAnswer(e.target.value)}
          required
          className={montserrat.className}
          style={{ width: '60px', backgroundColor: '#999999', border: 'none', padding: '10px', color: '#ffffff', fontSize: '14px', textAlign: 'center' }}
        />
        <button
          type="submit"
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
      {status === 'captchaFail' && (
        <p className={montserrat.className} style={{ color: '#cc0000', fontSize: '13px', marginTop: '10px' }}>
          Incorrect answer — please try again.
        </p>
      )}
      {status === 'success' && (
        <p className={montserrat.className} style={{ color: '#666666', fontSize: '13px', marginTop: '10px' }}>
          Your message has been sent. Thank you!
        </p>
      )}
      {status === 'error' && (
        <p className={montserrat.className} style={{ color: '#cc0000', fontSize: '13px', marginTop: '10px' }}>
          {errorDetail}
        </p>
      )}

    </form>
  )
}
