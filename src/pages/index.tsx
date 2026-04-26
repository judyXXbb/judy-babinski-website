import Head from 'next/head'
import Layout from '@/components/Layout'
import HeadshotGallery from '@/components/HeadshotGallery'
import TwoColumnSection from '@/components/TwoColumnSection'
import RelaxAndLaughSection from '@/components/RelaxAndLaughSection'
import TheProcessSection from '@/components/TheProcessSection'
import HappyClientsSection from '@/components/HappyClientsSection'
import LoveYourHeadshotSection from '@/components/LoveYourHeadshotSection'
import FAQSection from '@/components/FAQSection'
import BusinessHeadshotsSection from '@/components/BusinessHeadshotsSection'
import ActorModelHeadshotsSection from '@/components/ActorModelHeadshotsSection'
import OnLocationTeamHeadshotsSection from '@/components/OnLocationTeamHeadshotsSection'
import BrandingHeaderSection from '@/components/BrandingHeaderSection'
import PersonalBrandingSection from '@/components/PersonalBrandingSection'
import BrandingForPerformersSection from '@/components/BrandingForPerformersSection'
import BrandingForActorsSection from '@/components/BrandingForActorsSection'
import ProfessionalHeadshotsSection from '@/components/ProfessionalHeadshotsSection'
import CTASection from '@/components/CTASection'
import PersonalBranding2Section from '@/components/PersonalBranding2Section'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many outfits should I bring to my headshot session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Women should bring 6+ outfits, three casual and three business. Having a number of outfits gives you the choice of seeing how they photograph. Remember it\'s a headshot so focus on tops and jackets. Men should bring at least two jackets and 3 or 4 shirts. The shirts should be well pressed especially if worn without a jacket. Bring at least 5 ties so we can pick one that really looks great photographed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I wear patterns or solid colors for my headshot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally we recommend solid colors although small prints can work well also. The focus is on your face and expression. Large prints can grab the eye and take away the focus from the face.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors photograph well for headshots?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bring both bold and muted colors, but especially bring some of your favorite colors. You usually know what colors best flatter your skin tones. We can try some different colors and see what photographs best for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makeup tips should women follow for a headshot session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Liquid foundation looks better than powder. Keep the lip color close to your natural lip color or 1 shade darker and glossy — no matte lipstick. Go easy on the blush and bronzer. Keep eyes looking defined but natural with soft blended eyeliner. Neutral color eyeshadow is usually best. Wear mascara and curl your lashes. Drink lots of water and get a good night\'s sleep before your session.',
      },
    },
    {
      '@type': 'Question',
      name: 'What hair tips should I follow for my headshot session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Style your hair in the manner you normally would. If you want to have your hair cut, do it at least several days before your session. If you color your hair, make sure roots are touched up beforehand. Men should bring hair products to the session to allow for different looks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you recommend a professional makeup and hair artist for headshots?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional makeup and hair can have a big impact on your headshot. Cost usually runs around $150. I can provide you with names of several professional makeup and hair artists if you wish to have your makeup and hair done for your headshot session.',
      },
    },
  ],
}

export default function HomePage({ frontmatter, content }: { frontmatter: any, content: string }) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <HeadshotGallery />
      <TwoColumnSection
        imageSrc="/images/lily.png"
        imageAlt="Professional Headshot of Krystal, MSW"
        title="You don't need to know how to pose. That's my job."
        content={[
          "Most people don't come in feeling totally comfortable in front of the camera—and that's completely normal.",
          "I'll guide you through the session in a relaxed, natural way so you're not left wondering what to do.",
          "With the right direction, good light, and a little time, things start to feel easier—and that's when the best images happen.",
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <RelaxAndLaughSection />
      <LoveYourHeadshotSection />
      <HappyClientsSection />
      <div className="text-center py-12" style={{ backgroundColor: '#ffffff' }}>
        <a
          href="/reviews"
          className="inline-block px-6 py-3 rounded-full font-medium tracking-wider uppercase transition-colors"
          style={{ fontSize: '14px', color: '#666666', backgroundColor: 'rgba(158,239,217,0.41)', fontFamily: 'inherit' }}
        >
          Read More Client Reviews
        </a>
      </div>
      <CTASection />
      <TheProcessSection />
      <FAQSection />
      <BusinessHeadshotsSection />
      <ProfessionalHeadshotsSection />
      <ActorModelHeadshotsSection />
      <BrandingHeaderSection />
      <PersonalBrandingSection />
      <BrandingForPerformersSection />
      <BrandingForActorsSection />
      <PersonalBranding2Section />
      <OnLocationTeamHeadshotsSection />
      <div style={{ height: '25px', backgroundColor: '#ffffff' }} />
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'home.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}