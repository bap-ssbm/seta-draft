import Image from 'next/image'
import { FC } from 'react'

interface AboutSectionProps {

}

const AboutSection: FC<AboutSectionProps> = ({ }) => {
    return (
        <div className=' w-full p-[5%] grid place-content-center bg-blie text-white bg-blue-950'>

            <h1 className='text-[23px] italic underline tracking-[2px] mb-5'>
                About The Chef
            </h1>
            <div className='w-full flex gap-20 flex-col lg:flex-row'>

                <div className='py-10 bg-white mx-10'>

                    <Image className='translate-x-10' src='/images/ritsuko1.jpg' alt='' height={400} width={400} />
                </div>

                <div className='max-w-[500px] '>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h2 className='font-bold'>瀬田律子</h2>
                            <h3>Ritsuko Seta</h3>
                        </div>
                        <hr/>

                        <p>
                            帝国ホテル、外資オーディオメーカー、外資系ＩＴ企業勤務を経た後、
                            <br />
                            『ル・コルドン・ブルー東京』にてフランス料理の基本を学ぶ。
                            <br />
                            その後、ナチュラル系レストラン、フレンチレストラン勤務の後、
                            <br />
                            『ビストロ瀬田亭』に入店。瀬田金行シェフの元でキュイジーヌ・フランコ・ジャポネーズの技法を体得、
                            <br />
                            同店料理教室講師、TV番組料理製作アシスタントも務める。2013年夏、南仏海辺のレストラン『Bistr’eau Ryon』にて研修、
                            2015年5月、神奈川県三浦群葉山町に『HAYAMA せた亭』をオープン。
                        </p>
                        <hr />
                        <div>
                            <h2 className='font-bold'>
                                担当した番組・講習会
                            </h2>

                            <ul>
                                <li>
                                    ・ NHK「今日の料理ビギナーズ」
                                </li>
                                <li>
                                    ・ NHK「爆問学問」
                                </li>
                                <li>
                                    ・ Eテレ「SWITCH インタビュー　三浦雄一郎 X 加山雄三」
                                </li>
                                <li>
                                    ・パナソニック　ＩＨ＆オーブンレンジ講習会料理制作など
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