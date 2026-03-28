import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="klOovqtK6rEySEklPrmt18oXXirpLUgttlMzVs6SwYU" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}