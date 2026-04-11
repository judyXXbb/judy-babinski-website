import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export default function HeadshotGallery() {
  const headshotImages = [
    { src: '/images/Andrea_IG.jpg', alt: 'Headshot of medical professional' },
    { src: '/images/James_IG.jpg', alt: 'Headshot of James for his Linkedin account' },
    { src: '/images/Cindy.jpg', alt: 'Headshot of Cindy, a corporate professional' },
    { src: '/images/Tyler.jpg', alt: 'Professional headshot of Tyler for his Linkedin account' },
    { src: '/images/Caleb.jpg', alt: 'Headshot of Caleb, retiring military, for his Linkedin account' },
    { src: '/images/Nykol.jpg', alt: 'Smiling headshot of Nykol, dancer and actress' },
    { src: '/images/Hs.jpg', alt: 'Impish headshot by Judy Babinski Photography' },
    { src: '/images/Rocio.jpg', alt: 'Headshot of Rocio for her Linkedin account' },
  ]

  return (
    <section className="bg-white">
      {/* Top Heading */}
      <div className="py-[37px]" style={{ backgroundColor: '#ffffff' }}>
        <div className="text-center">
          <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
          <h1 className={`text-[50px] font-normal tracking-widest ${playfair.className}`} style={{color: '#666666'}}>
            HEADSHOTS DETROIT
          </h1>
          <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
        </div>
      </div>

      {/* Full Width Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px]">
        {headshotImages.map((image, index) => (
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

      {/* Bottom Heading */}
      <div className="py-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="text-center">
          <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
          <h2 className={`text-[50px] font-normal tracking-widest ${playfair.className}`} style={{color: '#666666'}}>
            LOVE YOUR HEADSHOT
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
        </div>
      </div>
    </section>
  )
}