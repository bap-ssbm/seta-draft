import { FC } from 'react'
import Button from '../ui/Button'
import Image from 'next/image'
import MenuTranslation from '../../i18n/locales/Home/MenuSection.json'

interface MenuSectionProps {
    lng: string
}

const MenuSection: FC<MenuSectionProps> = ({ lng }) => {
    let translation = lng==="ja"? MenuTranslation.ja:MenuTranslation.en
    return (
        <div className=' grid place-content-center px-[5%]'>
            <div className=' flex flex-col gap-10 items-center'>
                <div className='text-center flex flex-col gap-5 items-center mb-10 max-w-[600px]'>
                    <h1 className='text-[23px] italic tracking-[3px] lg:w-full underline'>
                        Concept
                    </h1>
                    <p>
                    {translation.concept}
                    </p>
                    

                    <div className='md:w-[50%] w-full'>
                        <Button addClass='w-fit px-10'>
                            {translation.button}
                        </Button>
                    </div>


                </div>

                <div className='flex flex-col md:flex-row gap-20 items-center'>
                    <div className='flex gap-10  flex-col text-center  items-center  md:w-[30%] lg:max-w-[300px]'>

                        <div className=' flex flex-col gap-5'>
                            <h2 className='font-bold text-[18px] italic'>
                            {translation.hayamaTitle}
                                </h2>
                            <hr />
                            <p className=''>
                                {translation.hayamaDesc}
                            </p>

                        </div>
                        <div className='bg-blue-900'>
                            <Image className='translate-x-3 translate-y-3  border border-black' src='/images/hayamaImg.jpg' alt='' height={300} width={300} />
                        </div>


                    </div>

                    <div className='flex gap-10  flex-col text-center  items-center  md:w-[30%] lg:max-w-[300px]'>
                        <div className=' flex flex-col gap-5 '>
                            <h2 className='font-bold text-[18px] italic'>
                                {translation.vegetableTitle}
                                </h2>
                            <hr />
                            <p className=''>
                               {translation.vegieDesc}
                            </p>

                        </div>
                        <div className='bg-blue-900'>
                            <Image className='translate-x-3 translate-y-3  border border-black' src='/images/vegetables.jpg' alt='' height={300} width={300} />
                        </div>


                    </div>

                    <div className='flex gap-10  flex-col text-center  items-center md:w-[30%] lg:max-w-[300px]'>
                        <div className=' flex flex-col gap-5 '>
                            <h2 className='font-bold text-[18px] italic'>
                                {translation.fishTitle}
                                </h2>
                            <hr />
                            <p className=''>
                                {translation.fishDesc}
                            </p>

                        </div>
                        <div className='bg-blue-900'>
                            <Image className='translate-x-3 translate-y-3 border border-black' src='/images/foodimg.jpg' alt='' height={300} width={300} />
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default MenuSection