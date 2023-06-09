import { FC } from 'react'
import Button from '../Button'
import translate from "../../../i18n/locales/Footer.json"

import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai'

interface FooterProps {
    lng:string
}

const Footer: FC<FooterProps> = ({ lng }) => {
    let translation = lng==="ja"? translate.ja:translate.en
    return (
        <footer className='py-20 border-t text-white bg-blue-950 w-full flex justify-center'>
            <div className=' relative w-full flex flex-col md:flex-row gap-10 md:gap-20 max-w-[1200px] px-20 justify-between '>

                <p className='text-center'>
                    © HAYAMA せた亭
                </p>
                <div className='flex flex-col gap-10 justify-center items-center text-center'>
                    <div>
                        <p className='font-bold whitespace-nowrap underline'>
                            {translation.timeTitle}
                        </p>
                        <p className=' whitespace-nowrap'>
                            {translation.lunch} : 11:30〜13:30 (LO)
                        </p>
                        <p className='whitespace-nowrap'>
                            {translation.dinner} : 17:30〜19:30 (LO)
                        </p>
                    </div>
                    <div>
                        <p className='font-bold whitespace-nowrap underline'>
                            {translation.rest}
                        </p>
                        <p className=' whitespace-nowrap'>
                        {translation.lunch} : {translation.lunchDates}
                        </p>
                        <p className='whitespace-nowrap'>
                        {translation.dinner} : {translation.dinnerDates}
                        </p>
                    </div>
                    <a href='tel:046-887-0099' className='w-fit hover:text-red-300 duration-300'>

                        <p className=''>
                            {translation.reservation}: <span className='underline text-[20px]'>046-887-0099</span>
                        </p>
                        
                    
                    </a>

                </div>
                <div className='flex justify-center gap-5 items-center h-fit  text-[30px]'>
                    
                    <a href='https://www.instagram.com/hayama_setatei/' className='hover:text-red-300 duration-300'>
                      
                            <AiFillInstagram  /> 
                        
                    </a>
                    <a href='https://www.facebook.com/hayamasetatei/' className='hover:text-red-300 duration-300'>
    
                            <AiFillFacebook/>
                   
                    </a>
                </div>
                


            </div>
        </footer>

    )
}

export default Footer