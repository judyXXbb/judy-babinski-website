import Layout from '@/components/Layout'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { Phone, Mail } from 'lucide-react'
import { Montserrat, Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export const getServerSideProps = async () => {
  return { props: {} }
}

export default function ContactPage() {
  return (
    <Layout title="Contact Judy Babinski Photography | Detroit Headshots" description="Book a headshot session or get in touch with Judy Babinski Photography. Serving Detroit Metro. Call 972-953-6259 or use the contact form.">

      {/* Page Header */}
      <div className="text-center pt-[52px] pb-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
        <h1 className={`text-[50px] font-normal tracking-widest ${playfair.className}`} style={{ color: '#666666' }}>
          CONTACT
        </h1>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      {/* Two Column Section */}
      <div style={{ backgroundColor: '#ffffff', width: '80%', maxWidth: '1920px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left: Image */}
          <div style={{ marginTop: '40px', marginBottom: '40px', marginRight: '20px' }}>
            <Image
              src="/images/Judy-Babinski-Photography-Detroit-Metro-Team-Headshots.jpg"
              alt="Team Headshots by Judy Babinski"
              width={800}
              height={1200}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Right: Text */}
          <div style={{ backgroundColor: '#ffffff', marginTop: '40px', marginBottom: '40px', marginLeft: '20px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className={montserrat.className} style={{ fontSize: '22px', fontWeight: '400', lineHeight: '1.5em', textAlign: 'justify', color: '#666666' }}>
              We offer custom packages for on-site headshots and team branding. Contact us with your specifications so we can develop a package specifically to meet your goals and needs.
            </p>
            <div className={playfair.className} style={{ fontSize: '22px', fontWeight: '400', lineHeight: '1.9em', color: '#666666', marginTop: '16px' }}>
              <div className="flex items-center gap-3">
                <Phone size={20} color="#bbf7d0" />
                <a href="tel:9729536259" style={{ color: '#666666' }}>972 953 6259</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} color="#bbf7d0" />
                <a href="mailto:judy@judybabinskiphotos.com" style={{ color: '#666666' }}>judy@judybabinskiphotos.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Contact Form Section */}
      <div style={{ backgroundColor: '#f5f5f5', width: '100%', paddingBottom: '90px' }}>

        {/* Intro Text */}
        <p className={`text-center ${montserrat.className}`} style={{ fontSize: '20px', fontWeight: '400', color: '#666666', paddingTop: '40px' }}>
          Complete the contact form below.
        </p>

        {/* Form */}
        <div style={{ backgroundColor: '#ffffff', width: '80%', maxWidth: '1920px', margin: '20px auto 0 auto', padding: '40px' }}>
          <ContactForm />
        </div>

      </div>

    </Layout>
  )
}
