import { FC } from 'react'
import Button from '../ui/Button'
import Image from 'next/image'

interface MenuSectionProps {

}

const MenuSection: FC<MenuSectionProps> = ({ }) => {
    return (
        <div className=' grid place-content-center px-[5%]'>
            <div className=' flex flex-col gap-10'>
                <div className='text-center flex flex-col gap-5 items-center mb-10'>
                    <h1 className='text-[23px] italic tracking-[3px] lg:w-full underline'>
                        Concept
                    </h1>
                    <p>
                        『HAYAMA せた亭』では、
                        <br />
                        地物の野菜や地魚をたっぷりと使った、和食のようなフレンチをご提供。
                        <br />
                        バターや生クリームなどの油脂分ではなく、鰹出汁、醤油、味噌、胡麻などを使った料理です。
                        <br />
                        ゆったりとしたくつろぎの空間で、心と身体にやさしい味をお楽しみください。
                    </p>
                    <div className='md:w-[50%] w-full'>
                        <Button addClass='w-fit px-10'>
                            メニューを見る
                        </Button>
                    </div>


                </div>
                
                <div className='flex flex-col md:flex-row gap-20 items-center'>
                    <div className='flex gap-10  flex-col text-center  items-center  lg:w-[30%] lg:max-w-[300px]'>

                        <div className=' flex flex-col gap-5'>
                            <h2 className='font-bold text-[18px] italic'>葉山というロケーション</h2>
                            <hr />
                            <p className=''>HAYAMAせた亭は葉山町堀内にあります。
                                浜辺まで歩いて５分の距離。
                                美しい富士山にのぞむ比類ない非日常をお楽しみください。</p>

                        </div>
                        <div className='bg-blue-900'>
                            <Image className='translate-x-3 translate-y-3  border border-black' src='/images/hayamaImg.jpg' alt='' height={300} width={300} />
                        </div>


                    </div>

                    <div className='flex gap-10  flex-col text-center  items-center  lg:w-[30%] lg:max-w-[300px]'>
                        <div className=' flex flex-col gap-5 '>
                            <h2 className='font-bold text-[18px] italic'>三浦野菜をふんだんに使用</h2>
                            <hr />
                            <p className=''>
                                新鮮な三浦野菜を中心に、
                            
                                たくさんの野菜を摂っていただけるメニュー。
                                
                                毎日でも食べられる体に優しい味わいです。
                            </p>

                        </div>
                        <div className='bg-blue-900'>
                            <Image className='translate-x-3 translate-y-3  border border-black' src='/images/vegetables.jpg' alt='' height={300} width={300} />
                        </div>


                    </div>

                    <div className='flex gap-10  flex-col text-center  items-center lg:w-[30%] lg:max-w-[300px]'>
                        <div className=' flex flex-col gap-5 '>
                            <h2 className='font-bold text-[18px] italic'>新鮮な魚介と和の優しい味わい</h2>
                            <hr />
                            <p className=''>
                                新鮮な魚介類を特製レムドレソースで。
                                
                                フレンチと和食を融合させたキュイジーヌフランコジャポネーズをお楽しみいただけます。
                            </p>

                        </div>
                        <div className='bg-blue-900'>
                            <Image className='translate-x-3 translate-y-3 border border-black' src='/images/foodimg.jpg' alt='' height={300} width={300} />
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default MenuSection