import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Montserrat, Playfair_Display } from 'next/font/google'

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

interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  excerpt: string
  coverImage: string | null
}

export default function BlogIndex({ posts }: { posts: PostMeta[] }) {
  return (
    <Layout
      title="Blog | Judy Babinski Photography"
      description="Tips and insights on headshots, personal branding, and getting great professional portraits from Detroit photographer Judy Babinski."
    >
      {/* Page Header */}
      <div className="text-center pt-[52px] pb-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
        <h1 className={`text-[50px] font-normal tracking-widest ${playfair.className}`} style={{ color: '#666666' }}>
          BLOG
        </h1>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      {/* Post List */}
      <div style={{ backgroundColor: '#ffffff', width: '80%', maxWidth: '1100px', margin: '0 auto', paddingBottom: '90px' }}>
        {posts.length === 0 && (
          <p className={`text-center ${montserrat.className}`} style={{ color: '#666666', fontSize: '18px', paddingTop: '20px' }}>
            New posts coming soon.
          </p>
        )}

        {posts.map(post => (
          <article key={post.slug} style={{ borderBottom: '1px solid #e5e5e5', paddingTop: '40px', paddingBottom: '40px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-4" style={{ gap: '30px' }}>
              {post.coverImage && (
                <Link href={`/blog/${post.slug}`} className="lg:col-span-1">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={400}
                    height={267}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </Link>
              )}
              <div className={post.coverImage ? 'lg:col-span-3' : 'lg:col-span-4'}>
                <p className={montserrat.className} style={{ fontSize: '13px', color: '#999999', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {formatDate(post.date)}
                </p>
                <h2 className={playfair.className} style={{ fontSize: '30px', fontWeight: '400', color: '#666666', marginBottom: '14px' }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: '#666666' }}>
                    {post.title}
                  </Link>
                </h2>
                <p className={montserrat.className} style={{ fontSize: '16px', lineHeight: '1.6em', color: '#666666', marginBottom: '18px' }}>
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className={`rounded-full tracking-wider uppercase transition-colors ${montserrat.className}`}
                  style={{ fontSize: '12px', color: '#666666', padding: '7px 17px', backgroundColor: 'rgba(158,239,217,0.21)', display: 'inline-block' }}
                >
                  Read more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  )
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export async function getStaticProps() {
  const blogDir = path.join(process.cwd(), 'content', 'blog')
  const files = fs.existsSync(blogDir) ? fs.readdirSync(blogDir).filter(f => f.endsWith('.md')) : []

  const posts: PostMeta[] = files.map(file => {
    const fileContents = fs.readFileSync(path.join(blogDir, file), 'utf8')
    const { data } = matter(fileContents)
    return {
      slug: file.replace(/\.md$/, ''),
      title: data.title ?? '',
      description: data.description ?? '',
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      coverImage: data.coverImage ?? null,
    }
  })

  // Newest first
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return { props: { posts } }
}
