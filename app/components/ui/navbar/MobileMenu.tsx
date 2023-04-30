'use client'
import { FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
interface MobileMenuProps {

}

const MobileMenu: FC<MobileMenuProps> = ({ }) => {
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:0.8, ease:'easeInOut'}}}
        exit={{opacity:0}}
        className='w-screen h-screen lg:hidden absolute top-0 left-0 bg-white '>
            <ul className='flex w-full  gap-10 text-[18px] justify-evenly pt-28 px-[5%] flex-col'>
                <li className='relative underline-hover-effect'>
                    <Link href="/">
                        ホーム
                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
                <li className='relative underline-hover-effect '>
                    <Link href="/">
                        シェフ
                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
                <li className='relative underline-hover-effect'>
                    <Link href="/">
                        メニュー
                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
                <li className='relative underline-hover-effect'>
                    <Link href="/">
                        予約する
                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
                <li className='relative underline-hover-effect'>
                    <Link href="/">
                        アクセス
                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
            </ul>
        </motion.div>
    )
}

export default MobileMenu