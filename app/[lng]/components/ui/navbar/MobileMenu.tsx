'use client'
import { FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
interface MobileMenuProps {
    lng:string
}

const MobileMenu: FC<MobileMenuProps> = ({lng }) => {
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:0.8, ease:'easeInOut'}}}
        exit={{opacity:0}}
        className='w-screen h-screen lg:hidden absolute top-0 left-0 bg-white '>
            <ul className='flex w-full  gap-10 text-[18px] justify-evenly pt-28 px-[5%] flex-col'>
            <li className='relative -hover-effect'>
                    <Link href="/">
                        {lng === "ja" ? 'ホーム' : 'Home'}
                    </Link>
                    
                </li>
                <li className='relative -hover-effect '>
                    <Link href="/">
                        {lng === "ja" ? 'シェフ' : 'Chef'}

                    </Link>
               
                </li>
                <li className='relative -hover-effect'>
                    <Link href="/">
                        {lng === "ja" ? 'メニュー' : 'Menu'}

                    </Link>
               
                </li>
                <li className='relative -hover-effect'>
                    <Link href="/">
                        {lng === "ja" ? '予約する' : 'Reservation'}

                    </Link>
                   
                </li>
                <li className='relative -hover-effect'>
                    <Link href="/">
                        {lng === "ja" ? 'アクセス' : 'Access'}

                    </Link>
             
                </li>
                <li className='relative -hover-effect'>
                    {lng === "ja" ? <Link href="/en">
                        English
                    </Link> : <Link href="/ja">
                        日本語
                    </Link>}

                  
                </li>
            </ul>
        </motion.div>
    )
}

export default MobileMenu