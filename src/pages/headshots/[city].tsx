import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { Montserrat, Playfair_Display } from 'next/font/google'
import type { GetStaticPaths, GetStaticProps } from 'next'

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

const SITE_URL = 'https://judybabinskiphotos.com'

interface ImageItem {
  src: string
  alt: string
}
interface ReviewItem {
  name: string
  review: string
}
interface FaqItem {
  q: string
  a: string
}

interface LocationProps {
  slug: string
  city: string
  heading: string
  metaTitle: string | null
  description: string
  summary: string
  introHtml: string
  images: ImageItem[]
  howSessionsWork: string[]
  reviews: ReviewItem[]
  faqs: FaqItem[]
  ctaText: string | null
  ctaLabel: string | null
  ctaHref: string | null
}

export default function LocationPage({
  slug, city, heading, metaTitle, description, summary, introHtml,
  images, howSessionsWork, reviews, faqs, ctaText, ctaLabel, ctaHref,
}: LocationProps) {
  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  return (
    <Layout
      title={metaTitle ?? `${heading} | Judy Babinski Photography`}
      description={description}
      canonical={`${SITE_URL}/headshots/${slug}`}
    >
      {faqSchema && (
        <Head>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        </Head>
      )}

      {/* H1 + summary */}
      <div className="text-center pt-[52px] pb-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
        <h1 className={`text-[44px] font-normal tracking-widest ${playfair.className}`} style={{ color: '#666666' }}>
          {heading}
        </h1>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      <div style={{ backgroundColor: '#ffffff', width: '80%', maxWidth: '900px', margin: '0 auto' }}>
        {summary.split('\n\n').filter(Boolean).map((para, i) => (
          <p key={i} className={montserrat.className} style={{ fontSize: '18px', lineHeight: '1.7em', color: '#666666', textAlign: 'center', paddingBottom: '20px' }}>
            {para.trim()}
          </p>
        ))}
      </div>

      {/* Text + Image two-column */}
      <div style={{ backgroundColor: '#ffffff', width: '80%', maxWidth: '1200px', margin: '0 auto', paddingTop: '20px', paddingBottom: '40px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '40px', alignItems: 'center' }}>
          <div
            className={`blog-content ${montserrat.className}`}
            style={{ fontSize: '17px', lineHeight: '1.7em', color: '#666666' }}
            dangerouslySetInnerHTML={{ __html: introHtml }}
          />
          {images.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {images.map((img, i) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={552}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority={i === 0}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* How Sessions Work */}
      {howSessionsWork.length > 0 && (
        <div style={{ backgroundColor: '#f5f5f5', width: '100%', paddingTop: '50px', paddingBottom: '50px' }}>
          <div style={{ width: '80%', maxWidth: '900px', margin: '0 auto' }}>
            <h2 className={`text-center ${playfair.className}`} style={{ fontSize: '34px', fontWeight: '400', color: '#666666', marginBottom: '30px' }}>
              How Sessions Work
            </h2>
            <ol style={{ counterReset: 'step' }}>
              {howSessionsWork.map((step, i) => (
                <li key={i} className={montserrat.className} style={{ fontSize: '17px', lineHeight: '1.7em', color: '#666666', marginBottom: '18px', display: 'flex', gap: '14px' }}>
                  <span className={playfair.className} style={{ fontSize: '24px', color: '#666666', flexShrink: 0 }}>{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {/* Reviews */}
      {reviews.length > 0 && (
        <div style={{ backgroundColor: '#ffffff', width: '100%', paddingTop: '50px', paddingBottom: '50px' }}>
          <div style={{ width: '80%', maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className={`text-center ${playfair.className}`} style={{ fontSize: '34px', fontWeight: '400', color: '#666666', marginBottom: '30px' }}>
              What Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '30px' }}>
              {reviews.map((r, i) => (
                <div key={i} style={{ backgroundColor: '#f5f5f5', padding: '24px' }}>
                  <p className={montserrat.className} style={{ fontSize: '15px', lineHeight: '1.6em', color: '#666666', marginBottom: '14px' }}>
                    &ldquo;{r.review}&rdquo;
                  </p>
                  <p className={montserrat.className} style={{ fontSize: '14px', color: '#999999' }}>— {r.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Q&A / FAQ */}
      {faqs.length > 0 && (
        <div style={{ backgroundColor: '#f5f5f5', width: '100%', paddingTop: '50px', paddingBottom: '50px' }}>
          <div style={{ width: '80%', maxWidth: '900px', margin: '0 auto' }}>
            <h2 className={`text-center ${playfair.className}`} style={{ fontSize: '34px', fontWeight: '400', color: '#666666', marginBottom: '30px' }}>
              Q&amp;A
            </h2>
            {faqs.map((f, i) => (
              <div key={i} style={{ marginBottom: '24px', display: 'flex', gap: '14px' }}>
                <span className={playfair.className} style={{ fontSize: '24px', color: '#666666', flexShrink: 0 }}>{i + 1}.</span>
                <div>
                  <h3 className={playfair.className} style={{ fontSize: '20px', fontWeight: '400', color: '#666666', marginBottom: '8px' }}>{f.q}</h3>
                  <p className={montserrat.className} style={{ fontSize: '16px', lineHeight: '1.7em', color: '#666666' }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      {ctaLabel && (
        <div style={{ backgroundColor: '#ffffff', width: '100%', textAlign: 'center', paddingTop: '50px', paddingBottom: '80px' }}>
          {ctaText && (
            <p className={montserrat.className} style={{ fontSize: '18px', lineHeight: '1.7em', color: '#666666', width: '80%', maxWidth: '700px', margin: '0 auto 24px' }}>
              {ctaText}
            </p>
          )}
          {ctaHref && ctaHref.startsWith('http') ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block rounded-full tracking-wider uppercase transition-colors ${montserrat.className}`}
              style={{ fontSize: '14px', color: '#666666', padding: '10px 24px', backgroundColor: 'rgba(158,239,217,0.21)' }}
            >
              {ctaLabel}
            </a>
          ) : (
            <Link
              href={ctaHref ?? '/contact'}
              className={`inline-block rounded-full tracking-wider uppercase transition-colors ${montserrat.className}`}
              style={{ fontSize: '14px', color: '#666666', padding: '10px 24px', backgroundColor: 'rgba(158,239,217,0.21)' }}
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      )}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join(process.cwd(), 'content', 'locations')
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.md')) : []
  const paths = files.map(file => ({ params: { city: file.replace(/\.md$/, '') } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<LocationProps> = async ({ params }) => {
  const slug = params?.city as string
  const filePath = path.join(process.cwd(), 'content', 'locations', `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const introHtml = await marked.parse(content)

  return {
    props: {
      slug,
      city: data.city ?? '',
      heading: data.heading ?? '',
      metaTitle: data.metaTitle ?? null,
      description: data.description ?? '',
      summary: data.summary ?? '',
      introHtml,
      images: data.images ?? [],
      howSessionsWork: data.howSessionsWork ?? [],
      reviews: data.reviews ?? [],
      faqs: data.faqs ?? [],
      ctaText: data.ctaText ?? null,
      ctaLabel: data.ctaLabel ?? null,
      ctaHref: data.ctaHref ?? null,
    },
  }
}
