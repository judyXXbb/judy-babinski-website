import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['500'],
  subsets: ['latin'],
  display: 'optional',
})

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Brand Logo - Left */}
          <Link href="/" className="text-center" style={{ marginLeft: '-10px' }}>
            <Image
              src="/images/judybabinski_logo_PH.png"
              alt="judy babinski photography"
              width={400}
              height={60}
              className="h-10 md:h-12 lg:h-14 w-auto hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Nav Buttons - Right */}
          <div className={`hidden md:flex items-center gap-3 ${montserrat.className}`}>
            <Link
              href="/branding"
              className="text-[#666666] px-4 py-2 rounded-full font-medium tracking-wider uppercase transition-colors"
              style={{ fontSize: '14px', backgroundColor: 'rgba(158,239,217,0.41)' }}
            >
              BRANDING
            </Link>
            <Link
              href="/contact"
              className="text-[#666666] px-4 py-2 rounded-full font-medium tracking-wider uppercase transition-colors"
              style={{ fontSize: '14px', backgroundColor: 'rgba(158,239,217,0.41)' }}
            >
              CONTACT
            </Link>
            <Link
              href="/pricing"
              className="text-[#666666] px-4 py-2 rounded-full font-medium tracking-wider uppercase transition-colors"
              style={{ fontSize: '14px', backgroundColor: 'rgba(158,239,217,0.41)' }}
            >
              PRICING
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#666666] hover:text-[#444444] ml-4"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 rounded-lg mt-2">
              <Link
                href="/"
                className="text-[#666666] hover:text-[#444444] block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#666666] hover:text-[#444444] block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/branding"
                className="text-[#666666] hover:text-[#444444] block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Branding
              </Link>
              <Link
                href="/contact"
                className="text-[#666666] hover:text-[#444444] block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/pricing"
                className="text-[#666666] hover:text-[#444444] block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/reviews"
                className="text-[#666666] hover:text-[#444444] block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}