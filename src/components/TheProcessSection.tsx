import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export default function TheProcessSection() {
  return (
    <section className="bg-white">
      {/* Title */}
      <div className="text-center pt-[26px] pb-8 bg-white">
        <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
        <h2 className={`text-[50px] font-normal ${playfair.className}`} style={{ color: '#666666' }}>
          The Process
        </h2>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      <div style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Book It Column */}
          <div className="text-center">
            <h3 className={`text-3xl font-normal mb-6 ${playfair.className}`} style={{color: '#666666'}}>
              BOOK IT
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Time is precious so we make it as easy as clicking on a calendar. Click on the View Pricing Button and then Click on the blue Schedule Session button to see the calendar. Pick your date and time from the available dates and you're booked for a great session.
            </p>
          </div>

          {/* Shoot It Column */}
          <div className="text-center">
            <h3 className={`text-3xl font-normal mb-6 ${playfair.className}`} style={{color: '#666666'}}>
              SHOOT IT
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              You will receive an email with lots of ideas on how to prepare for your session, clothing choices, hair, make up for women and skin prep tips for men. The session will take about and hour and you will feel like a pampered movie star from start to finish. And I guarantee I will have you laughing and enjoying your session.
            </p>
          </div>

          {/* Love It Column */}
          <div className="text-center">
            <h3 className={`text-3xl font-normal mb-6 ${playfair.className}`} style={{color: '#666666'}}>
              LOVE IT
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Right after the session, we will sit down with a cup of coffee and go over the images. You will have plenty to choose from and I will guide you through the selection process. Your selected favorites will be sent off for retouching and within a week you will have headshots that you love ready for posting, incorporating into your website, and business cards, and sending to your friends and colleagues.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}