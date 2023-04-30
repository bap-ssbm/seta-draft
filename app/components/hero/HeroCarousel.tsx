
import { FC, useState } from 'react'

import Carousel from './Carousel'

interface HeroCarouselProps {

}

const HeroCarousel: FC<HeroCarouselProps> = ({ }) => {
   
    return (
        <div className='relative grid place-content-center w-full'>
            <Carousel/>

            <div className='z-10 absolute top-0 left-0 w-full h-full grid place-content-center pointer-events-none'>
                <h1 className='lg:text-[30px] font-bold text-white text-center'>
                    葉山の
                    <br/>
                和食のようなフレンチ
                </h1>
            </div>
        </div>

    )
}

export default HeroCarousel