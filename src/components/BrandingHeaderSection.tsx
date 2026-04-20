import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'optional',
})

export default function BrandingHeaderSection() {
  return (
    <div className="text-center pt-[26px] pb-8" style={{ backgroundColor: '#ffffff' }}>
      <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
      <h2 className={`text-[50px] font-normal ${playfair.className}`} style={{ color: '#666666' }}>
        Branding
      </h2>
      <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
    </div>
  )
}
