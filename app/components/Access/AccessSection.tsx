import Image from 'next/image'
import { FC } from 'react'
import Button from '../ui/Button'
import { BiMap } from 'react-icons/bi'
import translate from '../../i18n/locales/Home/Access.json'

interface AccessSectionProps {
    lng:string
}

const AccessSection: FC<AccessSectionProps> = ({ lng }) => {
    let translation = lng==="ja"? translate.ja:translate.en
    return (
        <div className='grid place-content-center w-full my-10'>
            <div className='flex flex-col gap-10 items-center'>
                <h1 className='text-[23px] italic underline tracking-[2px] text-center'>
                    Access
                </h1>
                {lng==="ja"? <Image height={500} width={1000} alt='' src='/images/AO_Map.png' />: <Image height={500} width={1000} alt='' src='/images/AO_Map_en.png' />}
               
                <div className='flex gap-10 flex-col md:flex-row p-10 md:border'>
                    <div className='flex gap-5 md:pr-10 pb-10 md:pb-0 border-b md:border-r md:border-b-0 justify-center items-center'>
                        <div className='flex flex-col gap-5'>
                            <div>
                            <p className='font-bold underline'>
                                {translation.addressTitle}
                            </p>
                            <p>
                                〒240-0112
                                <br />
                                {translation.address}
                            </p>
                            </div>
                            
                            <a href='https://www.google.com/maps/place/HAYAMA+%E3%81%9B%E3%81%9F%E4%BA%AD/@35.2782653,139.5714886,17z/data=!3m1!4b1!4m6!3m5!1s0x601846fe07cb3531:0xf8b03366ea9f1814!8m2!3d35.2782653!4d139.5736773!16s%2Fg%2F11bv1m_fqx?hl=en'>
                                <Button addClass='w-full flex gap-2 items-center justify-center'>
                                    <BiMap />Google Maps
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='max-w-[800px]'>
                            <p className='font-bold mb-2 underline text-blue-950'>
                                {translation.busTitle}
                            </p>
                            <p>
                                {translation.busDesc}
                            </p>
                        </div>
                        <div>
                            <p className='font-bold mb-2 underline text-blue-950'>
                                {translation.carTitle}
                            </p>
                            <p>
                                {translation.carDesc}
                                <br />
                                {translation.car1}
                                <br />
                                {translation.car2}


                            </p>
                        </div>


                    </div>

                </div>

            </div>

        </div>)
}

export default AccessSection