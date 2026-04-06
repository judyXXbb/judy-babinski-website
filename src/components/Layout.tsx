import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const SITE_URL = 'https://www.judybabinskiphotos.com'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'Judy Babinski Photography',
  url: SITE_URL,
  telephone: '+1-972-953-6259',
  email: 'judy@judybabinskiphotos.com',
  image: `${SITE_URL}/images/Judy_Babinski_Photos__.jpg`,
  description: 'Professional headshot photography serving Detroit Metro. Corporate headshots, actor headshots, and personal branding photography.',
  areaServed: { '@type': 'City', name: 'Detroit', containedInPlace: { '@type': 'State', name: 'Michigan' } },
  priceRange: '$$',
}

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title = 'Judy Babinski Photography | Headshots Detroit', description = 'Professional headshot photography in Detroit. Corporate headshots, actor headshots, and personal branding.' }: LayoutProps) {
  const router = useRouter()
  const canonicalUrl = `${SITE_URL}${router.asPath === '/' ? '' : router.asPath}`

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
              url: `${SITE_URL}/images/Judy_Babinski_Photos__.jpg`,
              alt: 'Judy Babinski Photography — Headshots Detroit',
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