import Layout from '@/components/Layout'
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

interface PostProps {
  slug: string
  title: string
  metaTitle: string | null
  description: string
  date: string
  coverImage: string | null
  contentHtml: string
  ctaText: string | null
  ctaLabel: string | null
  ctaHref: string | null
}

export default function BlogPost({ slug, title, metaTitle, description, date, coverImage, contentHtml, ctaText, ctaLabel, ctaHref }: PostProps) {
  return (
    <Layout title={metaTitle ?? `${title} | Judy Babinski Photography`} description={description} canonical={`${SITE_URL}/blog/${slug}`}>
      <article style={{ backgroundColor: '#ffffff', width: '80%', maxWidth: '800px', margin: '0 auto', paddingTop: '52px', paddingBottom: '90px' }}>

        <p className={montserrat.className} style={{ fontSize: '13px', color: '#999999', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {formatDate(date)}
        </p>

        <h1 className={playfair.className} style={{ fontSize: '42px', fontWeight: '400', color: '#666666', lineHeight: '1.2em', marginBottom: '30px' }}>
          {title}
        </h1>

        {coverImage && (
          <div style={{ maxWidth: '336px', margin: '0 auto 40px' }}>
            <Image
              src={coverImage}
              alt={title}
              width={960}
              height={640}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </div>
        )}

        <div
          className={`blog-content ${montserrat.className}`}
          style={{ fontSize: '18px', lineHeight: '1.7em', color: '#666666' }}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {ctaLabel && (
          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            {ctaText && (
              <p className={montserrat.className} style={{ fontSize: '18px', lineHeight: '1.7em', color: '#666666', marginBottom: '20px' }}>
                {ctaText}
              </p>
            )}
            {ctaHref && ctaHref.startsWith('http') ? (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full tracking-wider uppercase transition-colors ${montserrat.className}`}
                style={{ fontSize: '12px', color: '#666666', padding: '7px 17px', backgroundColor: 'rgba(158,239,217,0.21)', display: 'inline-block' }}
              >
                {ctaLabel}
              </a>
            ) : (
              <Link
                href={ctaHref ?? '/contact'}
                className={`rounded-full tracking-wider uppercase transition-colors ${montserrat.className}`}
                style={{ fontSize: '12px', color: '#666666', padding: '7px 17px', backgroundColor: 'rgba(158,239,217,0.21)', display: 'inline-block' }}
              >
                {ctaLabel}
              </Link>
            )}
          </div>
        )}

        <div style={{ marginTop: '50px' }}>
          <Link
            href="/blog"
            className={`rounded-full tracking-wider uppercase transition-colors ${montserrat.className}`}
            style={{ fontSize: '12px', color: '#666666', padding: '7px 17px', backgroundColor: 'rgba(158,239,217,0.21)', display: 'inline-block' }}
          >
            &larr; Back to Blog
          </Link>
        </div>
      </article>
    </Layout>
  )
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogDir = path.join(process.cwd(), 'content', 'blog')
  const files = fs.existsSync(blogDir) ? fs.readdirSync(blogDir).filter(f => f.endsWith('.md')) : []
  const paths = files.map(file => ({ params: { slug: file.replace(/\.md$/, '') } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const slug = params?.slug as string
  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const contentHtml = await marked.parse(content)

  return {
    props: {
      slug,
      title: data.title ?? '',
      metaTitle: data.metaTitle ?? null,
      description: data.description ?? '',
      date: data.date ?? '',
      coverImage: data.coverImage ?? null,
      contentHtml,
      ctaText: data.ctaText ?? null,
      ctaLabel: data.ctaLabel ?? null,
      ctaHref: data.ctaHref ?? null,
    },
  }
}
