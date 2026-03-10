import Image from 'next/image'
import { Playfair_Display, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

interface TwoColumnSectionProps {
  imageSrc: string
  imageAlt: string
  title: string
  content: string
}

export default function TwoColumnSection({ imageSrc, imageAlt, title, content }: TwoColumnSectionProps) {
  return (
    <section style={{ backgroundColor: '#f6f6f6' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Photo on the left */}
          <div className="order-2 lg:order-1">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={800}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Text content on the right */}
          <div className="order-1 lg:order-2 space-y-6 px-8 flex flex-col justify-center">
            <h2 className={`text-3xl lg:text-4xl leading-tight font-bold ${playfair.className}`} style={{color: '#666666'}}>
              {title}
            </h2>
            <div className={`prose prose-lg leading-relaxed ${montserrat.className}`} style={{color: '#666666'}}>
              <p>{content}</p>
            </div>
          </div>
      </div>
    </section>
  )
}