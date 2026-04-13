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

export default function OnLocationTeamHeadshotsSection() {
  return (
    <section className="bg-white">
      {/* Title */}
      <div className="text-center pt-[26px] pb-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
        <h2 className={`text-[50px] font-normal ${playfair.className}`} style={{ color: '#666666' }}>
          Team Headshots
        </h2>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-center" style={{ backgroundColor: '#f5f5f5' }}>
        {/* Left: Image */}
        <div className="w-full">
          <Image
            src="/images/Berkley-Chamber-of-Commerce-Board.jpg"
            alt="Headshots of the board members of the Berkley area Chamber of Commerce"
            width={1200}
            height={800}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Right: Text */}
        <div className={`flex items-center px-12 py-16 lg:py-24 ${montserrat.className}`} style={{ color: '#666666', backgroundColor: '#f5f5f5' }}>
          <div className="text-lg leading-relaxed">
          <p>
            You would love to have headshots of your key personnel on your corporate website showing the friendly and
            competent team that your clients can rely on. I can help you make that happen in a comfortable and efficient
            way.
          </p>
          <p className="mt-4">
            I bring my lights and camera to your location and set up a small mini studio in an unused space. Depending
            on the size of your team we can schedule an afternoon or a day to take their headshots with a minimum
            disruption to their workflow.
          </p>
          <p className="mt-4">
            Don&apos;t hesitate to contact me for a proposal.
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}
