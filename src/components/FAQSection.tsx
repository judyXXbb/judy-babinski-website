'use client'
import { useState } from 'react'
import { Playfair_Display, Montserrat, Open_Sans } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
})

const openSans = Open_Sans({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

interface FAQItem {
  question: string
  answer: React.ReactNode
}

function FAQDropdown({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left py-4 flex justify-between items-center uppercase ${montserrat.className}`}
        style={{ color: '#666666', fontSize: '14px', fontWeight: '300' }}
      >
        <span>{question}</span>
        <span className="ml-4 text-xl">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className={`pb-4 ${openSans.className}`} style={{ color: '#666666', fontSize: '14px', fontWeight: '400', lineHeight: '1.9em' }}>
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const whatToWearFAQs: FAQItem[] = [
    {
      question: 'How many outfits to bring',
      answer: (
        <p>
          Women should bring 6+ outfits, three casual and three business. Having a number of outfits gives you the choice
          of seeing how they photograph. An outfit that looks really great on you may not photograph that well, whereas
          another outfit may really photograph well. Remember it&apos;s a headshot so focus on tops and jackets. Men
          should bring at least two jackets and 3 or 4 shirts. The shirts should be well pressed especially if they are
          worn without a jacket. Bring at least 5 ties so we can pick one that really looks great photographed.
        </p>
      ),
    },
    {
      question: 'Patterns or solid colors?',
      answer: (
        <p>
          Generally we recommend solid colors although small prints can work well also. The focus is on your face and
          expression. Large prints can grab the eye and take away the focus from the face.
        </p>
      ),
    },
    {
      question: 'What colors photograph well?',
      answer: (
        <p>
          Bring both bold and muted colors, but especially bring some of your favorite colors. You usually know what
          colors best flatter your skin tones. But again, it is great to have a choice. We can try some different colors
          and see what photographs best for you.
        </p>
      ),
    },
    {
      question: 'Great post by Suzanne McKenzie in Elite Daily on clothes that photograph best',
      answer: (
        <p>
          This is a great post on what clothes photograph best. Suzanne has it nailed down!{' '}
          <a
            href="https://www.elitedaily.com/life/culture/types-clothes-photograph-best/1807331"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70"
            style={{ color: '#666666' }}
          >
            Read the article
          </a>
        </p>
      ),
    },
  ]

  const hairMakeupFAQs: FAQItem[] = [
    {
      question: 'Makeup tips for women',
      answer: (
        <ul className="list-disc list-inside space-y-1">
          <li>Liquid foundation looks better than powder.</li>
          <li>Keep the lip color close to your natural lip color or 1 shade darker and glossy. No matte lipstick.</li>
          <li>No visible hard-edge lip liner.</li>
          <li>Go easy on the blush/bronzer.</li>
          <li>Keep eyes looking defined but natural. Soft blended eyeliner. No hard-edge liquid eyeliner.</li>
          <li>Neutral color eyeshadow is usually best. No lines of demarcation or heavy smoked-out eyeshadow.</li>
          <li>Wear mascara and curl your lashes. They show up great in photographs.</li>
          <li>Be sure and drink lots of water to keep your skin well hydrated.</li>
          <li>And don&apos;t forget to get a good night&apos;s sleep the night before to make sure that your skin is &quot;camera ready.&quot;</li>
        </ul>
      ),
    },
    {
      question: 'Hair tips for women',
      answer: (
        <ul className="list-disc list-inside space-y-1">
          <li>Style your hair in the manner you normally would.</li>
          <li>If you want to have your hair cut for the session, please do it at least several days before your session.</li>
          <li>If you color your hair, make sure roots are touched up before your session.</li>
        </ul>
      ),
    },
    {
      question: 'Hair tips for men',
      answer: (
        <ul className="list-disc list-inside space-y-1">
          <li>Style your hair in the manner you normally would.</li>
          <li>If you want to have your hair cut for the session, please do it at least several days before your session.</li>
          <li>Bring your hair products with you to the session. This will allow you to change up your look during the session.</li>
        </ul>
      ),
    },
    {
      question: 'Makeup & Hair Artist Recommendations',
      answer: (
        <p>
          Professional make up and hair can have a big impact on your headshot. Cost usually runs around $150. I can
          provide you with names of several professional make up and hair artists if you wish to have your make up and
          hair done for your headshot session.
        </p>
      ),
    },
  ]

  return (
    <section className="bg-white">
      {/* Title */}
      <div className="text-center pt-[26px] pb-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
        <h2 className={`text-[50px] font-normal ${playfair.className}`} style={{ color: '#666666' }}>
          The FAQs
        </h2>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      {/* Two Column Layout */}
      <div style={{ backgroundColor: '#f5f5f5', width: '80%', maxWidth: '1920px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left: What To Wear */}
          <div style={{ backgroundColor: '#ffffff', marginTop: '40px', marginBottom: '40px', marginRight: '20px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px' }}>
            <h3 className={`uppercase ${montserrat.className}`} style={{ color: '#666666', fontSize: '14px', fontWeight: '300', marginBottom: '12px' }}>
              What To Wear
            </h3>
            <p className={`mb-6 ${openSans.className}`} style={{ color: '#666666', fontSize: '14px', fontWeight: '400', lineHeight: '1.9em' }}>
              Clothing should compliment the most important feature of your headshot, your face and expression. It is best
              to have fitted clothes, but not too tight. You want to feel comfortable and on top of your game. Choose
              clothing appropriate for the purpose of your headshot. See additional tips below.
            </p>
            {whatToWearFAQs.map((faq, index) => (
              <FAQDropdown key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Right: Hair & Makeup */}
          <div style={{ backgroundColor: '#ffffff', marginTop: '40px', marginBottom: '40px', marginLeft: '20px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px' }}>
            <h3 className={`uppercase ${montserrat.className}`} style={{ color: '#666666', fontSize: '14px', fontWeight: '300', marginBottom: '12px' }}>
              Hair &amp; Makeup
            </h3>
            <p className={`mb-6 ${openSans.className}`} style={{ color: '#666666', fontSize: '14px', fontWeight: '400', lineHeight: '1.9em' }}>
              The focus is on your face and expression. Makeup and hair should complement your warm and authentic
              expression. Apply your makeup as you normally do with perhaps a bit more attention to detail. Authentic to
              who you are is the key. And the same goes for your hair. See some additional tips below.
            </p>
            {hairMakeupFAQs.map((faq, index) => (
              <FAQDropdown key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
