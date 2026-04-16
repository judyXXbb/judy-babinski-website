import Layout from '@/components/Layout'
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

const reviews = [
  {
    name: "Hannah",
    title: "",
    review: "I instantly felt comfortable because of her kind and professional demeanor. You feel confident by her graceful guidance to make you look your best.",
    rating: "★★★★★"
  },
  {
    name: "Derek",
    title: "",
    review: "The interaction with Judy from the beginning was effortless. Her headshot pricing and options are straight forward, and the instructions to prepare for the session was clear. She is excellent to work with during the photo shoot and can capture the essence of what you want.",
    rating: "★★★★★"
  },
  {
    name: "Sam",
    title: "",
    review: "Had the most amazing time with Judy! She has the sweetest heart! Made me feel incredible! If you need headshots — she's your gal.",
    rating: "★★★★★"
  },
]

export default function ReviewsPage() {
  return (
    <Layout title="Client Reviews | Judy Babinski Photography" description="Read what clients say about their headshot experience with Judy Babinski Photography, serving Detroit Metro.">

      {/* Page Header */}
      <div className="text-center pt-[52px] pb-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
        <h1 className={`text-[50px] font-normal tracking-widest ${playfair.className}`} style={{ color: '#666666' }}>
          REVIEWS
        </h1>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      {/* Reviews List */}
      <div style={{ backgroundColor: '#f5f5f5', width: '80%', maxWidth: '900px', margin: '0 auto', paddingBottom: '80px' }}>
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#ffffff',
              marginTop: '40px',
              padding: '40px',
            }}
          >
            <p className={montserrat.className} style={{ fontSize: '18px', lineHeight: '1.9em', color: '#666666', textAlign: 'justify', marginBottom: '24px' }}>
              &ldquo;{review.review}&rdquo;
            </p>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
              <p className={`${playfair.className}`} style={{ fontSize: '22px', color: '#666666', marginBottom: '4px' }}>
                {review.name}
              </p>
              {review.title && (
                <p className={montserrat.className} style={{ fontSize: '14px', color: '#999999' }}>
                  {review.title}
                </p>
              )}
              <p style={{ color: '#bbf7d0', fontSize: '18px', marginTop: '8px' }}>
                {review.rating}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: '40px', backgroundColor: '#f5f5f5' }} />

    </Layout>
  )
}
