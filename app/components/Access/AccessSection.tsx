import Image from 'next/image'
import { FC } from 'react'
import Button from '../ui/Button'
import { BiMap } from 'react-icons/bi'

interface AccessSectionProps {

}

const AccessSection: FC<AccessSectionProps> = ({ }) => {
    return (
        <div className='grid place-content-center w-full my-10'>
            <div className='flex flex-col gap-10 items-center'>
                <h1 className='text-[23px] italic underline tracking-[2px] text-center'>
                    Access
                </h1>

                <Image height={500} width={1000} alt='' src='/images/AO_Map.png' />
                <div className='flex gap-10 flex-col md:flex-row p-10 md:border'>
                    <div className='flex gap-5 md:pr-10 pb-10 md:pb-0 border-b md:border-r md:border-b-0 justify-center items-center'>


                        <div className='flex flex-col gap-5'>
                            <p className='font-bold underline'>
                                住所:
                            </p>
                            <p>
                                〒240-0112
                                <br />
                                神奈川県三浦郡葉山町堀内541-19
                            </p>
                            <a href='https://www.google.com/maps/place/HAYAMA+%E3%81%9B%E3%81%9F%E4%BA%AD/@35.2782653,139.5714886,17z/data=!3m1!4b1!4m6!3m5!1s0x601846fe07cb3531:0xf8b03366ea9f1814!8m2!3d35.2782653!4d139.5736773!16s%2Fg%2F11bv1m_fqx?hl=en'>
                                <Button addClass='w-full flex gap-2 items-center justify-center'>
                                    <BiMap />Google Maps
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div>
                            <p className='font-bold mb-5 underline text-blue-950'>
                                公共交通機関でお越しの方
                            </p>
                            <p>
                                JR逗子駅 (横須賀線) から京急バス【逗11】【逗12】系統にて約13分、元町バス停下車、徒歩3分
                                <br />
                                京急新逗子駅から京急バス 【逗11】【逗12】系統にて約9分、元町バス停下車、徒歩3分
                            </p>
                        </div>
                        <div>
                            <p className='font-bold mb-5 underline text-blue-950'>
                                お車でお越しの方
                            </p>
                            <p>
                                横浜横須賀道路〜逗葉新道、県道311号線、国道134号線を経て、逗葉新道終点出口より約11分
                                <br />
                                ※２台分の駐車スペースを用意しております。(ご予約のお客様を優先させていただきます）
                                <br />
                                ※満車の際は、近隣の公共駐車場（有料）をご利用ください。


                            </p>
                        </div>


                    </div>

                </div>

            </div>

        </div>)
}

export default AccessSection