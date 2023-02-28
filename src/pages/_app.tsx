import '../styles/bootstrap.min.css'
import '../styles/animate.css'
import '../styles/custom-fonts.css'
import '../styles/flexslider.css'
import '../styles/font-awesome.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
