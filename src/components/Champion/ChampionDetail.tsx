
import { Champion } from '../../Types/Champion'
import { motion } from 'framer-motion';
import ChampionDetailContainer from './ChampionDetailContainer';


export default function ChampionDetail({ name = "Yasuo", champ }: { name?: string, champ: Champion }) {

    const background = `linear-gradient(90deg, rgb(0 0 0) 0%, rgba(20, 20, 20, 0) 100%) 50% center / cover,url('https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${name}_0.jpg')`;
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
                        <div className="hidden  md:w-1/2 md:block " style={{ background, width: '50%', height: '100%', backgroundSize: 'cover', backgroundPosition: '25%' }}/>
             
                    </div>

                </div>


            </motion.div>

        </>
    );
}