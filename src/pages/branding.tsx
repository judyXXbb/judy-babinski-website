import Layout from '@/components/Layout'
import BrandingHeaderSection from '@/components/BrandingHeaderSection'
import PersonalBrandingSection from '@/components/PersonalBrandingSection'
import BrandingForPerformersSection from '@/components/BrandingForPerformersSection'
import BrandingForActorsSection from '@/components/BrandingForActorsSection'
import PersonalBranding2Section from '@/components/PersonalBranding2Section'

export default function BrandingPage() {
  return (
    <Layout
      title="Branding Photography | Judy Babinski Photography"
      description="Personal branding, performer branding, and actor branding photography by Judy Babinski."
      noindex={true}
    >
      <BrandingHeaderSection />
      <PersonalBrandingSection />
      <BrandingForPerformersSection />
      <BrandingForActorsSection />
      <PersonalBranding2Section />
    </Layout>
  )
}
