import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar2 from '@/compoments/Navbar2';
import CustomizeCarousel from '@/compoments/Carousel';
import WhyBar from '@/compoments/WhyBar';
import Cards from '@/compoments/Cards';
import AboutUs from '@/compoments/AboutUs';
import Events from '@/compoments/Event';
import Fee from '@/compoments/Fee';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Peaceful Meditation Group</title>
        <meta name="Peaceful Meditation Group" content="Peaceful Meditation Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="wrapper">
        <Navbar2 />
        <section id="top" style={{ backgroundColor: '#333' }}>
          <CustomizeCarousel />
          <WhyBar />
        </section>
        <Cards />
        <AboutUs />
        <Events />
        <Fee />
      </div>
    </>
  )
}
