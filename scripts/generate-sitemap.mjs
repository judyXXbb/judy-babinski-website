// Auto-generates public/sitemap.xml from the site's pages and content.
//
// Runs automatically before every build (see the "build" script in package.json),
// so new blog posts and location pages are added to the sitemap with no manual step.
//
// - Static/marketing pages are listed below with their curated image titles.
// - Blog posts (content/blog/*.md) and location pages (content/locations/*.md)
//   are discovered automatically; their images come from frontmatter.
// - The /about page is intentionally omitted (blank + noindex).

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const SITE = 'https://judybabinskiphotos.com'
const ROOT = process.cwd()
const today = new Date().toISOString().slice(0, 10)

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// --- Curated static/marketing pages (images live in components, not content) ---
const staticPages = [
  {
    path: '/', lastmod: '2026-05-08', changefreq: 'monthly', priority: '1.0',
    images: [
      ['/images/Andrea_IG.jpg', 'Headshot of medical professional'],
      ['/images/James_IG.jpg', 'Headshot of James for his LinkedIn account'],
      ['/images/Cindy.jpg', 'Headshot of Cindy, a corporate professional'],
      ['/images/Tyler.jpg', 'Professional headshot of Tyler for his LinkedIn account'],
      ['/images/Caleb.jpg', 'Headshot of Caleb, retiring military, for his LinkedIn account'],
      ['/images/Nykol.jpg', 'Smiling headshot of Nykol, dancer and actress'],
      ['/images/Hs.jpg', 'Impish headshot by Judy Babinski Photography'],
      ['/images/Rocio.jpg', 'Headshot of Rocio for her LinkedIn account'],
      ['/images/lily.png', 'Professional headshot of Krystal, MSW'],
      ['/images/Idris.jpg', 'Idris enjoying his headshot'],
      ['/images/Shauna.jpg', 'Professional headshot by Judy Babinski Photography'],
      ['/images/Patrick.jpg', 'Professional headshot by Judy Babinski'],
      ['/images/Marcel.jpg', 'Professional headshot photography for architects'],
      ['/images/Peter.jpg', 'Corporate headshots by Judy Babinski, Detroit, MI'],
      ['/images/Cary.jpg', 'Author headshot photography for book jackets and websites'],
      ['/images/Ben.jpg', 'Professional headshot of Ben, art critic for Dallas Morning News'],
      ['/images/Natalie.jpg', 'Headshot of entrepreneur coffee shop owner'],
      ['/images/Bill.jpg', 'Corporate headshots by Judy Babinski, Detroit, MI'],
      ['/images/floyd-s5.jpg', 'Headshot of professional ballet dancer'],
      ['/images/Ashleigh.jpg', 'Headshot of model and actress with blonde hair'],
      ['/images/Raviteja-v1.jpg', 'Headshot of professional actor'],
      ['/images/Claire1.jpg', 'Professional headshot of model with red hair'],
      ['/images/Berkley-Chamber-of-Commerce-Board.jpg', 'Headshots of the board members of the Berkley area Chamber of Commerce'],
    ],
  },
  {
    path: '/pricing', lastmod: '2026-05-08', changefreq: 'monthly', priority: '0.8',
    images: [
      ['/images/Julie.jpg', 'Professional headshot of Julie by Detroit headshot photographer Judy Babinski'],
      ['/images/Justin.jpg', 'Business headshot of Justin for his LinkedIn account'],
      ['/images/Kelley.jpg', 'Professional headshot of Kelley, retiring military, for his LinkedIn account'],
      ['/images/Tobias.jpg', 'Professional headshot of Tobias, retiring military, for his LinkedIn account'],
    ],
  },
  {
    path: '/branding', lastmod: '2026-05-08', changefreq: 'monthly', priority: '0.7',
    images: [
      ['/images/Floyd tryptch_WS.jpg', 'Branding portraits for professional dancers'],
      ['/images/Andreza tryptch_WS.jpg', 'Branding portraits for fitness instructors'],
      ['/images/Webb Tryptch_WS.jpg', 'Branding portraits for actors by Judy Babinski Photography'],
      ['/images/Lauren tryptch_WS.jpg', 'Branding portraits for entrepreneurs by Judy Babinski Photography'],
    ],
  },
  {
    path: '/contact', lastmod: '2026-05-08', changefreq: 'monthly', priority: '0.7',
    images: [
      ['/images/Judy-Babinski-Photography-Detroit-Metro-Team-Headshots.jpg', 'Team Headshots by Judy Babinski'],
    ],
  },
  { path: '/reviews', lastmod: '2026-05-08', changefreq: 'monthly', priority: '0.7', images: [] },
]

// --- Helpers to read a content directory ---
function readContent(dir) {
  const full = path.join(ROOT, 'content', dir)
  if (!fs.existsSync(full)) return []
  return fs.readdirSync(full)
    .filter(f => f.endsWith('.md'))
    .map(file => {
      const filePath = path.join(full, file)
      const { data } = matter(fs.readFileSync(filePath, 'utf8'))
      const mtime = fs.statSync(filePath).mtime.toISOString().slice(0, 10)
      return { slug: file.replace(/\.md$/, ''), data, mtime }
    })
}

// --- Blog posts (newest first) ---
const blogPosts = readContent('blog')
  .map(p => ({
    path: `/blog/${p.slug}`,
    lastmod: p.data.date || p.mtime,
    changefreq: 'monthly',
    priority: '0.7',
    images: p.data.coverImage ? [[p.data.coverImage, p.data.title || '']] : [],
  }))
  .sort((a, b) => new Date(b.lastmod) - new Date(a.lastmod))

// --- Blog index (lastmod = newest post) ---
const blogIndex = {
  path: '/blog',
  lastmod: blogPosts[0]?.lastmod || today,
  changefreq: 'weekly',
  priority: '0.8',
  images: [],
}

// --- Location pages (alphabetical) ---
const locationPages = readContent('locations')
  .map(p => ({
    path: `/headshots/${p.slug}`,
    lastmod: p.data.date || p.mtime,
    changefreq: 'monthly',
    priority: '0.8',
    images: (p.data.images || []).map(im => [im.src, im.alt || '']),
  }))
  .sort((a, b) => a.path.localeCompare(b.path))

const pages = [...staticPages, blogIndex, ...blogPosts, ...locationPages]

// --- Render XML ---
function renderImages(images) {
  return images.map(([loc, title]) =>
    `    <image:image>\n` +
    `      <image:loc>${SITE}${loc}</image:loc>\n` +
    `      <image:title>${esc(title)}</image:title>\n` +
    `    </image:image>`
  ).join('\n')
}

const body = pages.map(pg => {
  const imgs = pg.images && pg.images.length ? '\n' + renderImages(pg.images) : ''
  return `  <url>\n` +
    `    <loc>${SITE}${pg.path}</loc>\n` +
    `    <lastmod>${pg.lastmod}</lastmod>\n` +
    `    <changefreq>${pg.changefreq}</changefreq>\n` +
    `    <priority>${pg.priority}</priority>${imgs}\n` +
    `  </url>`
}).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
  `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
  `${body}\n` +
  `</urlset>\n`

fs.writeFileSync(path.join(ROOT, 'public', 'sitemap.xml'), xml)
console.log(`Generated public/sitemap.xml with ${pages.length} URLs.`)
