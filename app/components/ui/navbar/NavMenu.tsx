import { FC } from 'react'
import Link from 'next/link'
interface NavMenuProps {

}

const NavMenu: FC<NavMenuProps> = ({ }) => {
    return (
        <div className='w-full lg:flex justify-center hidden '>
            <ul className='flex w-full  gap-10 justify-evenly max-w-[1000px]'>
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
        </div>
    )
}

export default NavMenu