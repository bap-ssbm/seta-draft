import { FC } from 'react'
import Image from 'next/image'
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import Button from '../ui/Button'
interface ReservationSectionProps {

}

const ReservationSection: FC<ReservationSectionProps> = ({ }) => {
    return (
        <div className='px-[4%] py-16 w-full grid place-content-center lg:p-[5%]   bg-blue-950'>
            <div className='flex lg:flex-row flex-col w-full justify-center gap-10 max-w-[1200px]'>
                <div
                    style={{ aspectRatio: 1758 / 502 }}
                    className='flex flex-col gap-10'>
                    <div className='w-screen px-[2%] md:w-auto' >
                        <h1 className='mb-5 text-white text-[23px] italic tracking-[3px] text-center lg:text-start'>
                            Schedule
                        </h1>
                        <Image height={502} width={1758} src='/images/date.png' alt='' />
                    </div>
                    <div className='p-8  bg-white mx-10 lg:ml-10'>
                        <Image height={50} width={400} src='/images/seta_tables.jpg' alt='' />
                    </div>


                </div>



                <div className='text-[16px] flex flex-col gap-5 p-10 bg-white rounded-md shadow-md w-fit items-center mx-[4%] md:mx-0'>
                    <h1 className='text-[23px] italic tracking-[3px] mb-2 lg:w-full underline'>
                        Information
                    </h1>
                    <div className='flex flex-col md:flex-row gap-5'>

                        <p className='font-bold  text-center md:text-start md:whitespace-nowrap'>
                            営業時間:
                        </p>
                        <div>
                            <p className=' md:whitespace-nowrap'>
                                ランチタイム : 11:30〜13:30 (LO)
                            </p>
                            <p className='md:whitespace-nowrap'>
                                ディナータイム : 17:30〜19:30 (LO)
                            </p>
                        </div>
                    </div>

                    <a href='tel:046-887-0099' className='w-full'>
                        <Button addClass='w-full'>
                            <p className='text-[12px]'>
                                ご予約・お問い合わせは
                            </p>
                            <p className='text-[20px]'>
                                046-887-0099
                            </p>
                        </Button>
                    </a>
                    <hr className='b-black dashed w-full' />
                    <div>
                        <p>
                            ※
                            座席の間隔を空けて営業しておりますので、お席に限りがございます。
                            <br />
                            なるべくご予約くださいますようお願いいたします。
                            コース料理は前日までのご予約をお願い致します。
                            なお、コースをお召し上がりになることが難しい 年齢のお子様のご利用はご遠慮願っております。
                            <br />
                            貸し切りや臨時休業の情報についてはフェイスブックページにてお知らせしております。ご予約の前にご確認ください。
                        </p>

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