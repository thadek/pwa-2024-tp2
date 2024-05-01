import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { wrap } from "popmotion"
import { Skin } from "../../Types/Skin";
import { useChampions } from "../../Hooks/useChampions";
import { Reveal } from "../Animations/Reveal";
import { ArrowRightIcon,ArrowLeftIcon } from "@heroicons/react/24/solid";

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};





export default function ImageSlide({ imgs, id }: any) {
    const [[page, direction], setPage] = useState([0, 0]);
    if (!imgs || !id) return null;
    const { getChampionImgsURL } = useChampions();
    const images = imgs.map((skin: Skin) => getChampionImgsURL(id, skin.num).centered);

    const imageIndex = wrap(0, images.length, page);


    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };


    return (
        <div className="flex h-screen justify-center items-center">
            <AnimatePresence initial={true} custom={direction}>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    key="text"

                    className="w-2/5 h-full text-center justify-center lolfont uppercase text-white ">
                    <div className="flex flex-col justify-center h-full items-center ">
                        <Reveal>
                            <h1 className="  text-2xl md:text-6xl">Skin</h1>
                        </Reveal>
                        <Reveal>
                            <>     
                            <span className="text-sm h-4/12 w-4/12 md:text-2xl md:h-1/3 md:w-1/3">{imgs[imageIndex].name === "default" ? "Clásico" : imgs[imageIndex].name}</span>
                            <div className="flex flex-col pt-4 md:flex-row  justify-center items-center">
                                <ArrowLeftIcon className="h-6/12 w-6/12 md:h-20  md:w-20 duration-200 hover:-translate-x-1  text-white" onClick={() => paginate(-1)} />    
                            <ArrowRightIcon className="   h-6/12 w-6/12 md:h-20 md:w-20  duration-200 hover:translate-x-1  text-white" onClick={() => paginate(1)} />
                           </div> 
                           </>
                        </Reveal>

                        
                    </div>

                </motion.div>


                <div className="w-4/5 h-full relative justify-center items-center  ">
                    
                        
            
                        
                  

                    <motion.img
                        className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                        key={page}
                        src={images[imageIndex]}

                        custom={direction}
                        variants={variants}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        animate="center"
                        whileHover="hover"
                        transition={{
                            x: { type: "spring", stiffness: 0 },
                            opacity: { duration: 1 }
                        }}
                        loading="eager"
                        
                        dragConstraints={{ left: 0, right: 0 }}

                      
                    />

                </div>


            </AnimatePresence>
        </div>


    );
}