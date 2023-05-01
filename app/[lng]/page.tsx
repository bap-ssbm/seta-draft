

import AboutSection from './components/About/AboutSection'
import AccessSection from './components/Access/AccessSection'
import MenuSection from './components/Menu/MenuSection'
import ReservationSection from './components/Reservation/ReservationSection'
import HeroCarousel from './components/hero/HeroCarousel'



type Params = {
  params:{
    lng:string
  }
}

export default function Page({params: {lng}} : Params) {
  
  return (
    <div className='flex flex-col items-center gap-20 mb-10'>
      <HeroCarousel lng={lng}/>
      <ReservationSection lng={lng}/>
      <MenuSection lng={lng}/>
      <AboutSection lng={lng}/>
      <AccessSection lng={lng}/>
    
    </div>
  )
}
