import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Nunito } from 'next/font/google'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const nunito = Nunito({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={nunito.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
