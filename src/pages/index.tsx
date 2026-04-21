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
import PersonalBranding2Section from '@/components/PersonalBranding2Section'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function HomePage({ frontmatter, content }: { frontmatter: any, content: string }) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <HeadshotGallery />
      <TwoColumnSection
        imageSrc="/images/lily.png"
        imageAlt="Professional Headshot of Krystal, MSW"
        title="Ordinary people. Extraordinary smiles!"
        content="You don't have to be a movie star to have a great headshot. It only takes great coaching, great lighting, and a relaxed and comfortable you!"
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