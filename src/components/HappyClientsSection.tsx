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

const testimonials = [
  {
    name: "Derek",
    image: "/images/Derek.jpg",
    testimonial: "The interaction with Judy from the beginning was effortless. Her headshot pricing and options are straight forward, and the instructions to prepare for the session was clear. She is excellent to work with during the photo shoot and can capture the essence of what you want.",
  },
  {
    name: "Krystal Martinez",
    image: "",
    testimonial: "Judy is amazing already for her work with our fosters at Paws in The City, but she was such a pleasure and absolute joy to work with for my first ever professional photo shoot. She did a great job putting me at ease and making me laugh at myself. I was able to learn from her, but she also respected the vision I had. I absolutely recommend Judy!!",
  },
  {
    name: "Dewayne Williams",
    image: "",
    testimonial: "I can't stand taking pictures. Still, I had a great session with an amazing photographer Judy Babinski from Portraits For Patriots. Thank you for the free professional headshot and for supporting veterans.",
  },
]

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

      <div style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              {/* Client Photo */}
              <div className="mb-6">
                <div className="w-48 h-48 mx-auto relative overflow-hidden">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} headshot`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full" style={{ backgroundColor: '#e5e5e5' }} />
                  )}
                </div>
              </div>

              {/* Client Name */}
              <h3 className={`text-2xl font-normal mb-6 ${playfair.className}`} style={{color: '#666666'}}>
                {testimonial.name}
              </h3>

              {/* Testimonial Text */}
              <p className={`leading-relaxed mb-6 text-sm max-w-xs mx-auto ${montserrat.className}`} style={{color: '#666666'}}>
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}