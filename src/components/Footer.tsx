import { Facebook, Instagram } from 'lucide-react'
import { Playfair_Display, Open_Sans, Crimson_Text } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const openSans = Open_Sans({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const crimsonText = Crimson_Text({
  weight: ['400'],
  style: ['italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgba(158,239,217,0.21)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '38px', paddingBottom: '38px' }}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">

          {/* Left Column - Contact Us */}
          <div className="text-center">
            <div className="flex justify-center" style={{ marginBottom: '9px' }}>
              <hr className="border-gray-600 w-[30px]" />
            </div>
            <h3 className={`tracking-wide ${playfair.className}`} style={{ fontSize: '14px', color: '#666666', marginBottom: '9px' }}>CONTACT US</h3>
            <div className="flex justify-center mb-4">
              <hr className="border-gray-600 w-[30px]" />
            </div>
            <div className={`space-y-1 ${openSans.className}`} style={{ fontSize: '13px', color: '#666666', lineHeight: '1.8em' }}>
              <p>972-953-6259</p>
              <p>judy@judybabinskiphotos.com</p>
              <p>3505 Kipling Ave</p>
              <p>Berkley, MI 48972</p>
            </div>
          </div>

          {/* Right Column - Service Areas + Social Media */}
          <div className="flex flex-col justify-center items-center gap-4">
            <p className={`text-center ${crimsonText.className}`} style={{ fontSize: '22px', fontStyle: 'italic', color: '#666666', lineHeight: '1.9em' }}>Serving Detroit, The Woodward Corridor, Ferndale, Royal Oak, Birmingham, Bloomfield, Farmington, Southfield, Troy</p>
            <div className="flex justify-center gap-4">
              <a href="https://www.facebook.com/JudyBabinskiPhotography/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white rounded-full p-2 hover:opacity-70 transition-opacity">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/judybabinskiphotography/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white rounded-full p-2 hover:opacity-70 transition-opacity">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}