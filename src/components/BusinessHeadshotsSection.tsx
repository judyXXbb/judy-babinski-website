import Image from 'next/image'
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

export default function BusinessHeadshotsSection() {
  return (
    <section>
      {/* Title */}
      <div className="text-center pt-[26px] pb-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
        <h2 className={`text-[50px] font-normal ${playfair.className}`} style={{ color: '#666666' }}>
          Business Headshots
        </h2>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      {/* 4-Image Grid */}
      <div className="pb-12" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="aspect-square relative overflow-hidden rounded">
          <Image src="/images/Cary.jpg" alt="Author headshot photography sample for book jackets and websites" fill className="object-cover" />
        </div>
        <div className="aspect-square relative overflow-hidden rounded">
          <Image src="/images/Ben.jpg" alt="Professional headshot of Ben, art critic for Dallas Morning News" fill className="object-cover" />
        </div>
        <div className="aspect-square relative overflow-hidden rounded">
          <Image src="/images/Natalie.jpg" alt="Headshot of entrepreneur coffee shop owner" fill className="object-cover" />
        </div>
        <div className="aspect-square relative overflow-hidden rounded">
          <Image src="/images/Bill.jpg" alt="Corporate headshots by Judy Babinski, Detroit, MI" fill className="object-cover" />
        </div>
      </div>

      {/* Text Below Grid */}
      <div className={`max-w-3xl mx-auto text-center space-y-4 ${montserrat.className}`} style={{ color: '#666666' }}>
        <p className="text-lg">
          <strong style={{ color: '#666666' }}>Question: Business Professionals.</strong> What will get you that great promotion,
          that exciting new job, that really, really big new client?
        </p>
        <p className="text-lg">
          <strong style={{ color: '#666666' }}>Answer:</strong> A direct, warm and authentic headshot that makes your boss/client immediately trust you.
        </p>
      </div>
      </div>
    </section>
  )
}
