import Image from 'next/image'
import { FC } from 'react'
import translate from '../../i18n/locales/Home/About.json'

interface AboutSectionProps {
    lng:string
}

const AboutSection: FC<AboutSectionProps> = ({ lng }) => {
    let translation = translate.ja
    return (
        <div className=' w-full p-[5%] py-16 grid place-content-center bg-blie text-white bg-blue-950'>

            <h1 className='text-[23px] italic underline tracking-[2px] mb-5'>
                About The Chef
            </h1>
            <div className='w-full flex gap-20 flex-col lg:flex-row mt-10'>

                <div className='p-5 lg:px-0 h-fit bg-white '>

                    <Image className='lg:translate-x-10' src='/images/ritsuko1.jpg' alt='' height={400} width={400} />
                </div>

                <div className='max-w-[500px] '>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h2 className='font-bold'>瀬田律子</h2>
                            <h3>Ritsuko Seta</h3>
                        </div>
                        <hr/>

                        <p>
                            {translation.desc}
                        </p>
                        <hr />
                        <div>
                            <h2 className='font-bold'>
                                {translation.title}
                            </h2>

                            <ul>
                                <li>
                                    ・ {translation.first}
                                </li>
                                <li>
                                    ・ {translation.second}
                                </li>
                                <li>
                                    ・ {translation.third}
                                </li>
                                <li>
                                    ・ {translation.fourth}
                                </li>
                            </ul>


                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default AboutSection