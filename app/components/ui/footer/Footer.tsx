import { FC } from 'react'
import Button from '../Button'
import { BsInstagram, BsFacebook } from 'react-icons/bs'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <footer className='py-20 border-t w-full flex justify-center'>
            <div className=' relative w-full flex flex-col md:flex-row gap-10 md:gap-20 max-w-[1200px] px-20 justify-between '>

                <p className='text-center'>
                    © HAYAMA せた亭
                </p>
                <div className='flex flex-col gap-10 justify-center items-center text-center'>
                    <div>
                        <p className='font-bold whitespace-nowrap underline'>
                            営業時間
                        </p>
                        <p className=' whitespace-nowrap'>
                            ランチタイム : 11:30〜13:30 (LO)
                        </p>
                        <p className='whitespace-nowrap'>
                            ディナータイム : 17:30〜19:30 (LO)
                        </p>
                    </div>
                    <a href='tel:046-887-0099' className='w-fit hover:text-red-800 hover:underline duration-300'>

                        <p className='underline'>
                            ご予約・お問い合わせは
                        </p>
                        <p className='text-[20px]'>
                            046-887-0099
                        </p>
                        

                    </a>

                </div>
                <div className='flex  gap-5 justify-center'>
                    <a href='https://www.instagram.com/hayama_setatei/' className=''>
                        <Button addClass='flex justify-center items-center gap-3 px-8'>
                            <BsInstagram style={{ display: 'inline-block' }} /> <span>Instagram</span>
                        </Button>
                    </a>
                    <a href='https://www.facebook.com/hayamasetatei/' className=''>
                        <Button addClass='flex justify-center items-center gap-3 px-8'>
                            <BsFacebook /><span>Facebook</span>
                        </Button>
                    </a>
                </div>
                


            </div>
        </footer>

    )
}

export default Footer