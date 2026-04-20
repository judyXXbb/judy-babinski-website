import Image from 'next/image'
import { Playfair_Display, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'optional',
})

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  display: 'optional',
})

interface TwoColumnSectionProps {
  imageSrc: string
  imageAlt: string
  title: string
  content: string
}

export default function TwoColumnSection({ imageSrc, imageAlt, title, content }: TwoColumnSectionProps) {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Photo on the left */}
          <div className="w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={800}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Text content on the right */}
          <div className="flex flex-col justify-center space-y-6 px-12 py-12" style={{ backgroundColor: '#f5f5f5' }}>
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