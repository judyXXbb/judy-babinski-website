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

export default function HappyClientsSection() {
  return (
    <section className="bg-white">

      {/* Title */}
      <div className="text-center pt-[26px] pb-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
        <h2 className={`text-[50px] font-normal ${playfair.className}`} style={{ color: '#666666' }}>
          Happy Clients
        </h2>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      <div style={{ width: '83.333%', maxWidth: '1024px', margin: '0 auto', paddingBottom: '48px' }}>

        {/* Row 1: Dewayne — image left, text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-6" style={{ backgroundColor: '#f5f5f5' }}>
          <div className="relative aspect-square">
            <Image
              src="/images/Dewayne.jpg"
              alt="Dewayne Williams headshot by Judy Babinski Photography"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-12 py-16">
            <p className={`leading-relaxed mb-6 ${montserrat.className}`} style={{ fontSize: '18px', lineHeight: '1.9em', color: '#666666' }}>
              &ldquo;I can't stand taking pictures. Still, I had a great session with an amazing photographer Judy Babinski from Portraits For Patriots. Thank you for the free professional headshot and for supporting veterans.&rdquo;
            </p>
            <p className={`text-2xl font-normal ${playfair.className}`} style={{ color: '#666666' }}>
              Dewayne Williams
            </p>
          </div>
        </div>

        {/* Row 2: Krystal — text left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ backgroundColor: '#ffffff', border: '1px solid #f0f0f0' }}>
          <div className="flex flex-col justify-center px-12 py-16">
            <p className={`leading-relaxed mb-6 ${montserrat.className}`} style={{ fontSize: '18px', lineHeight: '1.9em', color: '#666666' }}>
              &ldquo;Judy is amazing already for her work with our fosters at Paws in The City, but she was such a pleasure and absolute joy to work with for my first ever professional photo shoot. She did a great job putting me at ease and making me laugh at myself. I was able to learn from her, but she also respected the vision I had. I absolutely recommend Judy!!&rdquo;
            </p>
            <p className={`text-2xl font-normal ${playfair.className}`} style={{ color: '#666666' }}>
              Krystal Martinez
            </p>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/Krystal.jpg"
              alt="Krystal Martinez headshot by Judy Babinski Photography"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>

    </section>
  )
}
