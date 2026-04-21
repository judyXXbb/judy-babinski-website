import Layout from '@/components/Layout'
import Head from 'next/head'
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

type Review = {
  name: string
  title?: string
  review: string
}

const reviews: Review[] = [
  {
    name: "Kelley Keating",
    review: "What a joy to work with Judy. She knows what looks good and how to get the best shot possible. Her communication and tips prior to your appointment are a wealth of knowledge — follow her recommendations and guidance and you will have plenty of great headshots to choose from. Highly recommend.",
  },
  {
    name: "Caleb Hale",
    review: "Judy was absolutely amazing! From the little details to her expertise, she had everything covered and was extremely patient with someone like me, never having professional photos before. She was very helpful and gave directions that even made me look professional (no easy feat). Would recommend to anyone looking for a professional photographer.",
  },
  {
    name: "Katie Daniel",
    review: "Judy made my headshot session fun! I have a serious camera phobia, but before I knew it, I was relaxed and having a good time. Judy was very good at explaining how to position myself to find my best angles and communicate the desired attitude for a professional photo. I highly recommend her for anyone who feels awkward in front of a camera.",
  },
  {
    name: "Paul Homsher",
    review: "Judy was incredibly professional and the photos turned out fantastic! I could not have asked for a better experience with Judy, and I would certainly recommend her to anyone else looking for professional photos.",
  },
  {
    name: "John",
    review: "Judy is absolutely amazing. I've never taken professional headshots or even photos before. To say I was nervous was an understatement. Judy was able to get me laughing and get some amazing photographs. I couldn't recommend her enough.",
  },
  {
    name: "Mark Borgfeld",
    review: "Judy is great! She is a pleasure to work with and very professional. Photos are of exceptional quality.",
  },
  {
    name: "Hannah",
    review: "I instantly felt comfortable because of her kind and professional demeanor. You feel confident by her graceful guidance to make you look your best.",
  },
  {
    name: "Maren Devine",
    review: "Judy is so talented and such a pleasure to work with. Great experience!",
  },
  {
    name: "Jasmine",
    review: "Amazing! Great woman. Awesome headshots. Very pleased. A+ investment.",
  },
  {
    name: "Joseph Torres",
    review: "One of the best experiences I've had taking headshots. Kind, patient, and flexible; Judy is the place to go. I will be recommending her to all my coworkers.",
  },
  {
    name: "Keith Robinson",
    review: "Judy is a true professional and a very talented photographer! She knows how to capture the perfect image.",
  },
]

const SITE_URL = 'https://www.judybabinskiphotos.com'

const reviewSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      name: "Kelley Keating",
      review: "What a joy to work with Judy. She knows what looks good and how to get the best shot possible. Her communication and tips prior to your appointment are a wealth of knowledge — follow her recommendations and guidance and you will have plenty of great headshots to choose from. Highly recommend.",
    },
    {
      name: "Caleb Hale",
      review: "Judy was absolutely amazing! From the little details to her expertise, she had everything covered and was extremely patient with someone like me, never having professional photos before. She was very helpful and gave directions that even made me look professional (no easy feat). Would recommend to anyone looking for a professional photographer.",
    },
    {
      name: "Katie Daniel",
      review: "Judy made my headshot session fun! I have a serious camera phobia, but before I knew it, I was relaxed and having a good time. Judy was very good at explaining how to position myself to find my best angles and communicate the desired attitude for a professional photo. I highly recommend her for anyone who feels awkward in front of a camera.",
    },
    {
      name: "Paul Homsher",
      review: "Judy was incredibly professional and the photos turned out fantastic! I could not have asked for a better experience with Judy, and I would certainly recommend her to anyone else looking for professional photos.",
    },
    {
      name: "John",
      review: "Judy is absolutely amazing. I've never taken professional headshots or even photos before. To say I was nervous was an understatement. Judy was able to get me laughing and get some amazing photographs. I couldn't recommend her enough.",
    },
    {
      name: "Mark Borgfeld",
      review: "Judy is great! She is a pleasure to work with and very professional. Photos are of exceptional quality.",
    },
    {
      name: "Hannah",
      review: "I instantly felt comfortable because of her kind and professional demeanor. You feel confident by her graceful guidance to make you look your best.",
    },
    {
      name: "Derek",
      review: "The interaction with Judy from the beginning was effortless. Her headshot pricing and options are straight forward, and the instructions to prepare for the session was clear. She is excellent to work with during the photo shoot and can capture the essence of what you want.",
    },
    {
      name: "Maren Devine",
      review: "Judy is so talented and such a pleasure to work with. Great experience!",
    },
    {
      name: "Jasmine",
      review: "Amazing! Great woman. Awesome headshots. Very pleased. A+ investment.",
    },
    {
      name: "Joseph Torres",
      review: "One of the best experiences I've had taking headshots. Kind, patient, and flexible; Judy is the place to go. I will be recommending her to all my coworkers.",
    },
    {
      name: "Keith Robinson",
      review: "Judy is a true professional and a very talented photographer! She knows how to capture the perfect image.",
    },
  ].map(r => ({
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'Judy Babinski Photography',
      '@id': `${SITE_URL}/#business`,
    },
    author: { '@type': 'Person', name: r.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: r.review,
  })),
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '40px' }}>
      <p className={montserrat.className} style={{ fontSize: '18px', lineHeight: '1.9em', color: '#666666', textAlign: 'justify', marginBottom: '24px' }}>
        &ldquo;{review.review}&rdquo;
      </p>
      <div style={{ textAlign: 'center' }}>
        <p className={playfair.className} style={{ fontSize: '22px', color: '#666666', marginBottom: '4px' }}>
          {review.name}
        </p>
        {review.title && (
          <p className={montserrat.className} style={{ fontSize: '14px', color: '#999999' }}>
            {review.title}
          </p>
        )}
        <p style={{ color: '#bbf7d0', fontSize: '18px', marginTop: '8px' }}>★★★★★</p>
        <div style={{ borderBottom: '1px solid #e5e5e5', marginTop: '16px' }} />
      </div>
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <Layout title="Client Reviews | Judy Babinski Photography" description="Read what clients say about their headshot experience with Judy Babinski Photography, serving Detroit Metro.">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      </Head>

      {/* Page Header */}
      <div className="text-center pt-[52px] pb-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
        <h1 className={`text-[50px] font-normal tracking-widest ${playfair.className}`} style={{ color: '#666666' }}>
          REVIEWS
        </h1>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      {/* Intro Text */}
      <div style={{ backgroundColor: '#ffffff', paddingBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '560px', padding: '0 24px' }}>
          <p className={montserrat.className} style={{ fontSize: '18px', lineHeight: '1.9em', color: '#666666' }}>
            Every session is a collaboration — great lighting, genuine coaching, a comfortable you and some laughter.
            Here&rsquo;s what clients have to say about the experience.
          </p>
        </div>
      </div>

      {/* What Clients Say heading */}
      <div className="text-center py-8" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
        <h2 className={`text-[40px] font-normal tracking-widest ${playfair.className}`} style={{ color: '#666666' }}>
          WHAT CLIENTS SAY
        </h2>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      {/* Testimonials */}
      <div style={{ backgroundColor: '#ffffff', width: '80%', maxWidth: '900px', margin: '0 auto', paddingBottom: '80px' }}>
        {reviews.map((review, index) => (
          <div key={index} style={{ marginTop: '20px' }}>
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

    </Layout>
  )
}
