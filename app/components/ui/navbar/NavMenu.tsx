import { FC } from 'react'
import Link from 'next/link'
interface NavMenuProps {
    lng: string
}

const NavMenu: FC<NavMenuProps> = ({ lng }) => {
    return (
        <div className='w-full lg:flex justify-center hidden '>
            <ul className='flex w-full  gap-10 justify-evenly max-w-[1000px]'>
                <li className='relative underline-hover-effect'>
                    <Link href="/">
                        {lng === "ja" ? 'ホーム' : 'Home'}
                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
                <li className='relative underline-hover-effect '>
                    <Link href="/">
                        {lng === "ja" ? 'シェフ' : 'Chef'}

                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
                <li className='relative underline-hover-effect'>
                    <Link href="/">
                        {lng === "ja" ? 'メニュー' : 'Menu'}

                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
                <li className='relative underline-hover-effect'>
                    <Link href="/">
                        {lng === "ja" ? '予約する' : 'Reservation'}

                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
                <li className='relative underline-hover-effect'>
                    <Link href="/">
                        {lng === "ja" ? 'アクセス' : 'Access'}

                    </Link>
                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
                <li className='relative underline-hover-effect'>
                    {lng === "ja" ? <Link href="/en">
                        English
                    </Link> : <Link href="/ja">
                        日本語
                    </Link>}

                    <div className='absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 duration-500' />
                </li>
            </ul>
        </div>
    )
}

export default NavMenu