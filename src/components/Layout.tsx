import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const SITE_URL = 'https://judybabinskiphotos.com'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  // PhotographyBusiness is not a schema.org type; additionalType carries the
  // photography niche via the recognized Product Ontology vocabulary.
  additionalType: 'http://www.productontology.org/id/Portrait_photographer',
  name: 'Judy Babinski Photography',
  legalName: 'Judy Babinski Photography LLC',
  url: SITE_URL,
  telephone: '+1-947-210-5459',
  email: 'judy@judybabinskiphotos.com',
  image: [
    `${SITE_URL}/images/Judy%20dyptich_F.jpg`,
    `${SITE_URL}/images/judybabinski_logo_PH.png`,
  ],
  description: 'Judy Babinski Photography specializes in professional headshots for business professionals, corporate teams, actors, models, and personal branding, available both in-studio and on location across metro Detroit. Studio located in Berkley, MI.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Berkley',
    addressRegion: 'MI',
    addressCountry: 'US',
  },
  areaServed: [
    'Detroit',
    'Ferndale',
    'Berkley',
    'Birmingham',
    'Bloomfield Hills',
    'Royal Oak',
    'Southfield',
    'Troy',
  ].map((name) => ({
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'State', name: 'Michigan' },
  })),
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '16',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.instagram.com/judybabinskiphotography',
    'https://www.facebook.com/JudyBabinskiPhotography',
    'https://www.linkedin.com/in/judy-babinski-detroit-metro-headshot-photographer-85b0a498/',
  ],
}

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  noindex?: boolean
  canonical?: string
}

export default function Layout({ children, title = 'Judy Babinski Photography | Detroit Metro Headshot Photographer', description = 'Professional headshot photography in Detroit. Corporate headshots, actor headshots, and personal branding.', noindex = false, canonical }: LayoutProps) {
  const router = useRouter()
  // Dynamic routes (e.g. /blog/[slug]) must pass an explicit canonical,
  // since router.pathname would render the literal "[slug]" template.
  const path = router.pathname === '/' ? '' : router.pathname
  const canonicalUrl = canonical ?? `${SITE_URL}${path}`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonicalUrl}
        noindex={noindex}
        openGraph={{
          title,
          description,
          type: 'website',
          url: canonicalUrl,
          siteName: 'Judy Babinski Photography',
          images: [
            {
              url: `${SITE_URL}/images/Judy%20dyptich_F.jpg`,
              alt: 'Judy Babinski Photography — Detroit Metro Headshot Photographer',
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