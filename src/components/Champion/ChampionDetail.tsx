
import { Champion } from '../../Types/Champion'
import { motion } from 'framer-motion';
import ChampionDetailContainer from './ChampionDetailContainer';





export default function ChampionDetail({ name = "Teemo", champ, randomSkin }: { name?: string, champ: Champion, randomSkin: string }) {





    const background = `https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${name}_${randomSkin}.jpg`;





    return (
        
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className='flex min-h-screen text-white  ' >

                    <div className="flex w-full ">

                        {/**Champion Detail Container */}
                        <ChampionDetailContainer champ={champ} />
                        {/**Background*/}
                        <div className=" hidden lg:w-1/2  z-[1] md:block  bg-gradient-to-r from-black " >
                            <img src={background} className="w-1/2 h-full absolute md:object-cover xl:object-center-right xl:object-fit xl:object-center-left mix-blend-overlay" />
                        </div>

                    </div>

                </div>


            </motion.div>

        </>
    );
}