import Layout from '@/components/Layout'
import Image from 'next/image'
import { Playfair_Display, Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})


const playfair = Playfair_Display({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
})

const gridImages = [
  { src: '/images/Julie.jpg', alt: 'Professional headshot by Judy Babinski Photography' },
  { src: '/images/Justin.jpg', alt: 'Professional headshot by Judy Babinski Photography' },
  { src: '/images/Kelley.jpg', alt: 'Professional headshot by Judy Babinski Photography' },
  { src: '/images/Tobias.jpg', alt: 'Professional headshot by Judy Babinski Photography' },
]

export default function PricingPage() {
  return (
    <Layout title="Pricing" description="Headshot photography pricing and session options">

      {/* Page Header */}
      <div className="bg-gray-50 py-8">
        <div className="text-center">
          <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
          <h1 className={`text-[50px] font-medium tracking-widest ${playfair.className}`} style={{ color: '#666666' }}>
            PRICING
          </h1>
          <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
        </div>
      </div>

      {/* 4 Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px]">
        {gridImages.map((image, index) => (
          <div key={index} className="aspect-square relative overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* How Sessions Work */}
      <div style={{ backgroundColor: '#f5f5f5', marginLeft: '100px', marginRight: '100px', marginTop: '100px' }}>
      <div className="py-12 text-center" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <h2 className={`text-[40px] font-medium tracking-widest mb-4 ${playfair.className}`} style={{ color: '#666666' }}>
          HOW SESSIONS WORK
        </h2>
        <p className={`leading-relaxed ${montserrat.className}`} style={{ fontSize: '20px', lineHeight: '1.4em', color: '#666666', textAlign: 'justify' }}>
          My goal is to make sure that your headshot session is FUN, EASY and FLEXIBLE. Because I want to make sure you get what you want, I offer two types of sessions, The Extended Studio Session and The Expedited Studio Session.
        </p>
      </div>
      </div>

      {/* Extended Studio Session */}
      <div style={{ backgroundColor: '#f5f5f5', marginLeft: '100px', marginRight: '100px', marginTop: '50px' }}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center" style={{ marginBottom: '8px' }}>
          <h2 className={`text-[40px] font-medium tracking-widest ${playfair.className}`} style={{ color: '#666666' }}>
            EXTENDED STUDIO SESSION
          </h2>
        </div>

        <div className="text-center" style={{ marginBottom: '10px' }}>
          <h3 className={`font-normal ${montserrat.className}`} style={{ fontSize: '27px', lineHeight: '1.2em', color: '#666666', marginBottom: '8px' }}>Session Fee</h3>
          <p className={`font-normal ${montserrat.className}`} style={{ fontSize: '27px', lineHeight: '1.2em', color: '#666666' }}>$200</p>
        </div>

        <ul className="space-y-3" style={{ paddingLeft: '20px' }}>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0" style={{ color: '#666666' }}>–</span>
            <span className={`tracking-wide ${montserrat.className}`} style={{ fontSize: '17px', lineHeight: '1.2em', color: '#666666' }}>SESSION TIME IS FLEXIBLE TO MEET YOUR NEEDS</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0" style={{ color: '#666666' }}>–</span>
            <span className={`tracking-wide ${montserrat.className}`} style={{ fontSize: '17px', lineHeight: '1.2em', color: '#666666' }}>UNLIMITED WARDROBE CHANGE</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0" style={{ color: '#666666' }}>–</span>
            <span className={`tracking-wide ${montserrat.className}`} style={{ fontSize: '17px', lineHeight: '1.2em', color: '#666666' }}>MULTIPLE BACKGROUND OPTIONS</span>
          </li>
        </ul>

        <div className="text-center" style={{ marginTop: '36px' }}>
          <h3 className={`font-normal ${montserrat.className}`} style={{ fontSize: '27px', lineHeight: '1.2em', color: '#666666', marginBottom: '8px' }}>Image Fees</h3>
          <p className={`font-normal ${montserrat.className}`} style={{ fontSize: '27px', lineHeight: '1.2em', color: '#666666', marginBottom: '10px' }}>$100 per Image</p>
          <p className={`${montserrat.className}`} style={{ fontSize: '17px', lineHeight: '1.9em', color: '#666666', textAlign: 'justify' }}>I DO NOT INCLUDE IMAGES IN THIS SESSION FEE AS I FIND THAT MY CLIENTS' NEEDS FOR IMAGES VARIES. SOME CLIENTS WANT MULTIPLE IMAGES FOR USE ACROSS THEIR WEBSITE AND OTHER SOCIAL MEDIA APPLICATIONS. OTHER CLIENTS ARE JUST INTERESTED IN PURCHASING ONE IMAGE FOR LINKEDIN. BY SPLITTING THE COST OF YOUR HEADSHOT SESSION INTO TWO PIECES I AM ABLE TO OFFER YOU THIS FLEXIBILITY.</p>
          <div className="text-center mt-8">
            <a
              href="https://app.acuityscheduling.com/schedule.php?owner=15180961&appointmentType=5678831"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-4 py-2 rounded-full font-medium tracking-wider uppercase transition-colors ${montserrat.className}`}
              style={{ fontSize: '14px', color: '#666666', backgroundColor: 'rgba(158,239,217,0.21)' }}
            >
              Schedule Session
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* Express Studio Session */}
      <div style={{ backgroundColor: '#f5f5f5', marginLeft: '100px', marginRight: '100px', marginTop: '50px' }}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center" style={{ marginBottom: '8px' }}>
          <h2 className={`text-[40px] font-medium tracking-widest ${playfair.className}`} style={{ color: '#666666' }}>
            EXPRESS STUDIO SESSION
          </h2>
        </div>

        <div className="text-center" style={{ marginBottom: '10px' }}>
          <h3 className={`font-normal ${montserrat.className}`} style={{ fontSize: '27px', lineHeight: '1.2em', color: '#666666', marginBottom: '8px' }}>Session Fee</h3>
          <p className={`font-normal ${montserrat.className}`} style={{ fontSize: '27px', lineHeight: '1.2em', color: '#666666' }}>$200</p>
        </div>

        <ul className="space-y-3" style={{ paddingLeft: '20px' }}>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0" style={{ color: '#666666' }}>–</span>
            <span className={`tracking-wide ${montserrat.className}`} style={{ fontSize: '17px', lineHeight: '1.2em', color: '#666666' }}>EXPEDITED SESSION TIME, USUALLY BETWEEN 30 - 40 MINUTES</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0" style={{ color: '#666666' }}>–</span>
            <span className={`tracking-wide ${montserrat.className}`} style={{ fontSize: '17px', lineHeight: '1.2em', color: '#666666' }}>ONE OVERALL LOOK, BUT WITH ABILITY TO CHANGE JACKETS</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0" style={{ color: '#666666' }}>–</span>
            <span className={`tracking-wide ${montserrat.className}`} style={{ fontSize: '17px', lineHeight: '1.2em', color: '#666666' }}>ONE BACKGROUND CHOICE, WHITE OR GRAY</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0" style={{ color: '#666666' }}>–</span>
            <span className={`tracking-wide ${montserrat.className}`} style={{ fontSize: '17px', lineHeight: '1.2em', color: '#666666' }}>ONE FULLY RETOUCHED IMAGE</span>
          </li>
        </ul>
          <div className="text-center mt-8">
            <a
              href="https://app.acuityscheduling.com/schedule.php?owner=15180961&appointmentType=32874568"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-4 py-2 rounded-full font-medium tracking-wider uppercase transition-colors ${montserrat.className}`}
              style={{ fontSize: '14px', color: '#666666', backgroundColor: 'rgba(158,239,217,0.21)' }}
            >
              Schedule Session
            </a>
          </div>
      </div>
      </div>

      {/* Contact Callout */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <p className={`${montserrat.className}`} style={{ fontSize: '18px', lineHeight: '1.4em', color: '#666666', textAlign: 'justify' }}>
          I would love to hear from you, and if you do have any questions at all before booking, please do feel free to give me a call on 972 953 6259.

        </p>
      </div>

    </Layout>
  )
}