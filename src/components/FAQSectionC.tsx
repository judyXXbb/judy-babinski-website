import { Playfair_Display, Montserrat, Open_Sans } from 'next/font/google'
import { faqSubsections, renderBody } from '@/data/faqData'

const playfair = Playfair_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'optional',
})

const montserrat = Montserrat({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'optional',
})

const openSans = Open_Sans({
  weight: ['400'],
  subsets: ['latin'],
  display: 'optional',
})

export default function FAQSectionC() {
  return (
    <section style={{ backgroundColor: '#f5f5f5' }} aria-labelledby="faqs-heading-c">

      {/* The FAQs heading */}
      <div className="text-center" style={{ paddingTop: '56px', paddingBottom: '36px' }}>
        <div style={{ width: '64px', height: '1px', backgroundColor: '#999999', margin: '0 auto 16px' }} />
        <h2
          id="faqs-heading-c"
          className={`font-normal ${playfair.className}`}
          style={{ fontSize: 'clamp(36px, 5vw, 50px)', color: '#666666', lineHeight: 1.15, margin: 0 }}
        >
          The FAQs
        </h2>
        <div style={{ width: '64px', height: '1px', backgroundColor: '#999999', margin: '16px auto 0' }} />
      </div>

      {/* Inner container */}
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 32px 64px' }}>

        {faqSubsections.map((subsection) => (
          <section key={subsection.id} aria-labelledby={subsection.headingId} style={{ paddingTop: '8px', paddingBottom: '48px' }}>

            {/* Subsection heading with flanking hairlines */}
            <div className="text-center" style={{ paddingBottom: '20px' }}>
              <div style={{ width: '60px', height: '1px', backgroundColor: '#999999', margin: '0 auto 14px' }} />
              <h3
                id={subsection.headingId}
                className={`font-normal ${playfair.className}`}
                style={{ fontSize: 'clamp(26px, 3.5vw, 32px)', color: '#666666', lineHeight: 1.2, margin: 0 }}
              >
                {subsection.heading}
              </h3>
              <div style={{ width: '60px', height: '1px', backgroundColor: '#999999', margin: '14px auto 0' }} />
            </div>

            {/* Lead paragraph */}
            <p
              className={`text-center ${openSans.className}`}
              style={{ fontSize: '15px', lineHeight: 1.9, color: '#666666', maxWidth: '760px', margin: '0 auto 28px' }}
            >
              {subsection.lead}
            </p>

            {/* Quick-index */}
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{
                gap: '0 48px',
                maxWidth: '800px',
                margin: '0 auto 32px',
                padding: '20px 32px',
                backgroundColor: 'rgba(158,239,217,0.21)',
              }}
            >
              {subsection.tips.map((tip) => (
                <div
                  key={tip.num}
                  className="flex items-baseline"
                  style={{ gap: '12px', padding: '6px 0' }}
                >
                  <span
                    className={playfair.className}
                    style={{ fontStyle: 'italic', fontSize: '16px', color: '#999999', minWidth: '22px', letterSpacing: 0 }}
                  >
                    {tip.num}
                  </span>
                  <span
                    className={montserrat.className}
                    style={{ fontWeight: 500, fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#666666' }}
                  >
                    {tip.indexLabel}
                  </span>
                  <span style={{ flex: 1, borderBottom: '1px dotted #999999', marginBottom: '4px' }} />
                </div>
              ))}
            </div>

            {/* Card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '18px' }}>
              {subsection.tips.map((tip) => {
                const isWide = tip.wide
                const twoCol = isWide && tip.body.type === 'list'
                return (
                  <article
                    key={tip.num}
                    style={{
                      backgroundColor: '#ffffff',
                      padding: '26px 28px 30px',
                      position: 'relative',
                      ...(isWide ? { gridColumn: '1 / -1' } : {}),
                    }}
                  >
                    {/* Mint top-bar accent */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '60px', height: '3px', backgroundColor: 'rgba(158,239,217,0.70)' }} />

                    <div
                      className={playfair.className}
                      style={{ fontStyle: 'italic', fontSize: '16px', color: '#999999', marginBottom: '6px' }}
                    >
                      {tip.num}
                    </div>
                    <div
                      className={montserrat.className}
                      style={{ fontWeight: 500, fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666666', marginBottom: '12px' }}
                    >
                      {tip.label}
                    </div>
                    <h4
                      className={playfair.className}
                      style={{ fontWeight: 400, fontSize: '19px', lineHeight: 1.3, color: '#666666', margin: '0 0 12px' }}
                    >
                      {tip.headline}
                    </h4>
                    {renderBody(tip.body, openSans.className, twoCol)}
                  </article>
                )
              })}
            </div>

          </section>
        ))}
      </div>
    </section>
  )
}
