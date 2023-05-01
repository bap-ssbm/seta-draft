'use client'

import { FC, useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import NavMenu from './NavMenu'
import Hamburg from './Hamburg'
import MobileMenu from './MobileMenu'


interface NavbarProps {
    lng: string
}

const Navbar: FC<NavbarProps> = ({lng }) => {

    const [scrollTop, setScrollTop] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav

            className={((scrollTop === 0) ? ('lg:flex-col lg:h-[150px]') : ('flex-row')) + (' w-full items-center fixed top-0 flex justify-center py-5 gap-7  z-50 bg-white  duration-300 transition-all px-[5%] ')}>
            <motion.div

                className='max-h-[40px]'>
                <motion.img

                    src='/images/logo.png' />
            </motion.div>

            <NavMenu lng={lng}/>
            <Hamburg openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <AnimatePresence>
                {openMenu && <MobileMenu lng={lng}/>}
            </AnimatePresence>


        </nav>
    )
}

export default Navbar