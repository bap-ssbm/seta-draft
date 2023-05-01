import { FC } from 'react'
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import Button from '../ui/Button'
import translate from '../../../i18n/locales/Home/Reservation.json'
interface ReservationSectionProps {
    lng: string
}

const ReservationSection: FC<ReservationSectionProps> = ({ lng }) => {
    let translation = lng==="ja"? translate.ja:translate.en
    return (
        <div className='px-[4%] py-16 w-full grid place-content-center lg:p-[5%]   bg-blue-950'>
            <div className='flex lg:flex-row flex-col w-full px-[2%] justify-center gap-10 lg:max-w-[1300px]'>
                <div
                    className='flex flex-col gap-10'>
                    <div className='relative' >
                        <h1 className='mb-5 text-white text-[23px] italic tracking-[3px] text-center lg:text-start'>
                            Schedule
                        </h1>


                    </div>
                    <div className='p-8 lg:pl-20 bg-white'>
                        <img src='/images/seta_tables.jpg' alt='' />
                    </div>


                </div>



                <div className=' flex flex-col  gap-5 p-5 md:p-10 bg-white rounded-md shadow-md w-full items-center h-fit'>
                    <h1 className='text-[23px] italic tracking-[3px] mb-2 lg:w-full underline'>
                        Information
                    </h1>
                    <div className='w-full'>
                        {lng === "ja" ? <img src='/images/date.png' alt='' /> : <img src='/images/timeenglish.jpg' alt='' />}
                    </div>
                    <div className='flex flex-col md:flex-row gap-5'>

                        <p className='font-bold  text-center md:text-start md:whitespace-nowrap'>
                            {translation.timeTitle}
                        </p>
                        <div>
                            <p className=' md:whitespace-nowrap'>
                                {translation.lunch}: 11:30〜13:30 (LO)
                            </p>
                            <p className='md:whitespace-nowrap'>
                                {translation.dinner}: 17:30〜19:30 (LO)
                            </p>
                        </div>
                    </div>

                    <a href='tel:046-887-0099' className='w-full'>
                        <Button addClass='w-full'>
                            <p className='text-[14px]'>
                                {translation.button}
                            </p>
                            <p className='text-[20px]'>
                                046-887-0099
                            </p>
                        </Button>
                    </a>
                    <hr className='b-black dashed w-full' />
                    <div>
                        {translation.warning}

                    </div>
                    <hr className='b-black dashed w-full' />
                    <div className='flex gap-5 w-full justify-center mt-4'>
                        <a href='https://www.instagram.com/hayama_setatei/' className='flex-grow'>
                            <Button addClass='flex justify-center items-center gap-3 w-full'>
                                <BsInstagram style={{ display: 'inline-block' }} /> <span>Instagram</span>
                            </Button>
                        </a>
                        <a href='https://www.facebook.com/hayamasetatei/' className='flex-grow'>
                            <Button addClass='flex justify-center items-center gap-3 w-full'>
                                <BsFacebook /><span>Facebook</span>
                            </Button>
                        </a>
                    </div>
                </div>





            </div>

        </div>
    )
}

export default ReservationSection