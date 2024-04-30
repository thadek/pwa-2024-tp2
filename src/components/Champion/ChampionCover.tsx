import { easeIn, motion } from 'framer-motion';
import ChampionLore from './ChampionLore';
import { useTitle } from '../../Hooks/useTitle';
import { Reveal } from '../Animations/Reveal';

export default function ChampionCover({ champion }: any) {

    const background = `linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgb(20 20 20 / 0%) 100%),url('https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${champion.id}_0.jpg')`;



    useTitle(`${champion.name} - ${champion.title}`);


    return (
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <div className='flex min-h-screen  bg-cover bg-center md:bg-[size:200%]   lg:bg-[size:160%]  xl:bg-[size:120%]   2xl:bg-[size:100%] justify-center text-white items-end      bg-no-repeat  ' style={{ backgroundImage: background }}>


                <div className="container" >
                    <div className='container mx-auto px-5 py-10   '>
                        <fieldset className="relative text-center gap-6 items-center mb-14 border  border-white ">


                            <legend className="flex px-10 flex-col items-center bg-transparent lolfont ">
                                <Reveal>
                                    <p className="text-2xl font-bold italic uppercase ">{champion.title}</p>
                                </Reveal>

                                <span className="text-7xl font-bold uppercase italic ">
                                    <Reveal>
                                        {champion.name}</Reveal></span>

                            </legend>


                            <ChampionLore champ={champion} />
                        </fieldset>
                    </div>
                </div>

            </div>
        </motion.div>

    );
}