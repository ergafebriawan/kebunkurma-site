import Head from 'next/head';
import Template from '../components/Template';
import MainHeader from '../components/MainHeader';
import AboutCompany from '../components/AboutCompany';
import Fasilitas from '../components/Product';
import Wahana from '../components/Wahana';
import Gallery from '../components/Gallery';
import KontakKami from '../components/KontakKami';
import Map from '../components/Map';

export default function Home() {
  return (
    <>
      <Template title_page="Beranda" active_page="beranda">
        {/* Carousel */}
        <MainHeader />

        {/* Tentang Kami */}
        <div className='mt-48'>
          <AboutCompany />
        </div>
        
        {/* Wahana */}
        <Wahana />

        {/* Fasilitas */}
        <Fasilitas />


        {/* Gallery */}
        <Gallery />

        {/* Peta */}
        <Map />

        {/* Kontak Kami */}
        <KontakKami />
      </Template>
    </>
  )
}
