import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import Header from '../components/Header/Header'

const nunito = Nunito({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={nunito.className}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
