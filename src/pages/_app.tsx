import '../styles/bootstrap.min.css'
// import '../styles/animate.css'
// import '../styles/custom-fonts.css'
// import '../styles/flexslider.css'
import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-accessible-accordion/dist/fancy-example.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
