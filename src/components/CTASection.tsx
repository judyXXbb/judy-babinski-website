import { Playfair_Display, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'optional',
})

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  display: 'optional',
})

export default function CTASection() {
  return (
    <section className="text-center py-16 px-6" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="w-16 h-px bg-gray-400 mx-auto mb-10"></div>

      <div className="max-w-2xl mx-auto">
        <h2 className={`text-[36px] md:text-[44px] font-normal leading-snug mb-6 ${playfair.className}`} style={{ color: '#666666' }}>
          Ready for a headshot that actually feels like you?
        </h2>

        <p className={`text-lg leading-relaxed mb-10 ${montserrat.className}`} style={{ color: '#666666' }}>
          Most of my clients are surprised to see how good they look in their photos. With the right guidance, it&apos;s easier than you expect!
        </p>

        <a
          href="/pricing"
          className="inline-block px-8 py-4 rounded-full font-medium tracking-wider uppercase transition-colors"
          style={{ fontSize: '14px', color: '#666666', backgroundColor: 'rgba(158,239,217,0.41)', fontFamily: 'inherit' }}
        >
          See Pricing &amp; Book
        </a>

        <p className={`text-sm mt-5 ${montserrat.className}`} style={{ color: '#888888' }}>
          Not sure yet? <a href="/contact" style={{ color: '#888888', textDecoration: 'underline' }}>Let&apos;s chat first.</a>
        </p>
      </div>

      <div className="w-16 h-px bg-gray-400 mx-auto mt-10"></div>
    </section>
  )
}
