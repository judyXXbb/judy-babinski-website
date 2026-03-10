import Image from 'next/image'
import { Playfair_Display, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export default function ProfessionalHeadshotsSection() {
  return (
    <section>
      {/* Title */}
      <div className="text-center pt-[26px] pb-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
        <h2 className={`text-[50px] font-normal ${playfair.className}`} style={{ color: '#666666' }}>
          Professional Headshots
        </h2>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      {/* 4-Image Grid */}
      <div className="pb-12" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="aspect-square relative overflow-hidden">
            <Image src="/images/Natalie.jpg" alt="Professional headshot by Judy Babinski Photography" fill className="object-cover" />
          </div>
          <div className="aspect-square relative overflow-hidden">
            <Image src="/images/Randy.jpg" alt="Professional headshot by Judy Babinski Photography" fill className="object-cover" />
          </div>
          <div className="aspect-square relative overflow-hidden">
            <Image src="/images/Marcel.jpg" alt="Professional headshot by Judy Babinski Photography" fill className="object-cover" />
          </div>
          <div className="aspect-square relative overflow-hidden">
            <Image src="/images/Bill.jpg" alt="Professional headshot by Judy Babinski Photography" fill className="object-cover" />
          </div>
        </div>

        {/* Text Below Grid */}
        <div className={`max-w-3xl mx-auto text-center space-y-4 px-4 ${montserrat.className}`} style={{ color: '#666666' }}>
          <p className="text-lg">
            <strong style={{ color: '#666666' }}>Question: You are a professional. Shouldn&apos;t your headshot be professional too.</strong>
          </p>
          <p className="text-lg">
            <strong style={{ color: '#666666' }}>Answer:</strong> Yes! You act and dress like a professional. You deal with people in a professional manner daily. Your headshot should be professional too! You want to show yourself as the competent and professional business person you are! Do it with a professional headshot!
          </p>
        </div>
      </div>
    </section>
  )
}
