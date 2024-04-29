import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { wrap } from "popmotion"
import { Skin } from "../../Types/Skin";
import { useChampions } from "../../Hooks/useChampions";

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

const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};



export default function ImageSlide({ imgs, id }: any) {
    const [[page, direction], setPage] = useState([0, 0]);
    if(!imgs || !id) return null;
    const { getChampionImgsURL } = useChampions();
    const images = imgs.map((skin: Skin) => getChampionImgsURL(id, skin.num).centered);

    const imageIndex = wrap(0, images.length, page);


    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };


    return (
        <>
            <AnimatePresence initial={false} custom={direction}>

                <motion.img
                    key={page}
                    src={images[imageIndex]}
                    width={'100%'}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    loading="eager"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}

                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />
                <div className=" absolute top-[250vh]  text-white pl-20 text-4xl bg-opacity-40 bg-black  p-5  rounded-e-2xl drop-shadow-2xl font-thin">
                    <h3 className="text-3xl font-thin text-start">Skin</h3>
                    <span>{imgs[imageIndex].name === "default" ? "Clásico" : imgs[imageIndex].name}
                    </span></div>
            </AnimatePresence>

        </>
    );
}