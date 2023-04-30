

import AboutSection from './components/About/AboutSection'
import AccessSection from './components/Access/AccessSection'
import MenuSection from './components/Menu/MenuSection'
import ReservationSection from './components/Reservation/ReservationSection'
import HeroCarousel from './components/hero/HeroCarousel'
import Footer from './components/ui/footer/Footer'


export default function Home() {
  return (
    <div className='flex flex-col items-center gap-20'>
      <HeroCarousel />
      <ReservationSection/>
      <MenuSection/>
      <AboutSection/>
      <AccessSection/>
      <Footer/>
    </div>
  )
}
