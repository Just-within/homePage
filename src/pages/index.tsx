import Head from 'next/head'
import Navbar2 from '@/compoments/Navbar2';
import CustomizeCarousel from '@/compoments/Carousel';
import WhyBar from '@/compoments/WhyBar';
import Cards from '@/compoments/Cards';
import AboutUs from '@/compoments/AboutUs';
import Events from '@/compoments/Event';
import Fee from '@/compoments/Fee';
import Managerment from '@/compoments/Managerment';
import ContractUs from '@/compoments/ContractUs';
import Footer from '@/compoments/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Peaceful Meditation Group</title>
        <meta name="Peaceful Meditation Group" content="Peaceful Meditation Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/fontawesome.min.css"></link>
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
        <Managerment />
        <ContractUs />
        <Footer />
      </div>
    </>
  )
}
