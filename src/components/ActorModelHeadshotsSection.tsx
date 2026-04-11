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

export default function ActorModelHeadshotsSection() {
  return (
    <section>
      {/* Title */}
      <div className="text-center pt-[26px] pb-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
        <h2 className={`text-[50px] font-normal ${playfair.className}`} style={{ color: '#666666' }}>
          Actor &amp; Model Headshots
        </h2>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      {/* 4-Image Grid */}
      <div className="pb-12" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="aspect-square relative overflow-hidden">
            <Image src="/images/floyd-s5.jpg" alt="Headshot of professional ballet dancer" fill className="object-cover" />
          </div>
          <div className="aspect-square relative overflow-hidden">
            <Image src="/images/Ashleigh.jpg" alt="Headshot of model and actress with blonde hair" fill className="object-cover" />
          </div>
          <div className="aspect-square relative overflow-hidden">
            <Image src="/images/Raviteja-v1.jpg" alt="Headshot of professional actor" fill className="object-cover" />
          </div>
          <div className="aspect-square relative overflow-hidden">
            <Image src="/images/Claire1.jpg" alt="Professional headshot of model with red hair" fill className="object-cover" />
          </div>
        </div>

        {/* Text Below Grid */}
        <div className={`max-w-3xl mx-auto text-center space-y-4 px-4 ${montserrat.className}`} style={{ color: '#666666' }}>
          <p className="text-lg">
            <strong style={{ color: '#666666' }}>Question: Actors &amp; Models.</strong> What will get you that audition for that amazing job?
          </p>
          <p className="text-lg">
            <strong style={{ color: '#666666' }}>Answer:</strong> A &quot;megawatt&quot; headshot that grabs the attention of the casting director.
          </p>
        </div>
      </div>
    </section>
  )
}
