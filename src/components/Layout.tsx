import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const SITE_URL = 'https://www.judybabinskiphotos.com'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService', 'PhotographyBusiness'],
  name: 'Judy Babinski Photography',
  url: SITE_URL,
  telephone: '+1-972-953-6259',
  email: 'judy@judybabinskiphotos.com',
  image: `${SITE_URL}/images/Judy dyptich_F.jpg`,
  description: 'Judy Babinski Photography specializes in professional headshots for business professionals, corporate teams, actors, models, and personal branding in the Detroit Metro area. Studio located in Berkley, MI.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3505 Kipling Ave.',
    addressLocality: 'Berkley',
    addressRegion: 'MI',
    postalCode: '48072',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'City', name: 'Detroit', containedInPlace: { '@type': 'State', name: 'Michigan' } },
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '16',
    bestRating: '5',
    worstRating: '1',
  },
}

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title = 'Judy Babinski Photography | Headshots Detroit', description = 'Professional headshot photography in Detroit. Corporate headshots, actor headshots, and personal branding.' }: LayoutProps) {
  const router = useRouter()
  const path = router.pathname === '/' ? '' : router.pathname
  const canonicalUrl = `${SITE_URL}${path}`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          title,
          description,
          type: 'website',
          url: canonicalUrl,
          images: [
            {
              url: `${SITE_URL}/images/Judy dyptich_F.jpg`,
              alt: 'Judy Babinski Photography — Headshots Detroit',
              width: 1200,
              height: 800,
            },
          ],
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}