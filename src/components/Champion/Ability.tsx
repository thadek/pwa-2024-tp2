import { motion } from "framer-motion";
import { Champion } from "../../Types/Champion";

export const Ability = ({ spell, passive,champ,currentPage }: { spell?: any, passive?: any, champ:Champion,currentPage:number }) => {

    const completeZeros = (number: number) => {
        if(number < 10){
            return `000${number}`;
        }
        
        if(number < 100 ){
            return `00${number}`;
        } 
        
        if(number < 1000){
            return `0${number}`;
        }
    }

    if (passive) {
        const posiblehtml = { __html: passive.description };


        return (
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="lolfont text-2xl uppercase">Pasiva</h2>
                <h3 className="lolfont uppercase">{passive.name}</h3>
                <p className=" text-sm pb-5" dangerouslySetInnerHTML={posiblehtml}></p>
                <video preload="metadata" autoPlay muted loop src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${completeZeros(parseInt(champ.key))}/ability_${completeZeros(parseInt(champ.key))}_P1.webm`} className="w-full md:w-1/2" />
            </motion.div>
        );
    }
    const posiblehtml = { __html: spell.description };
    const ability = ["Q","W","E","R"]
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="lolfont text-2xl uppercase">{ability[currentPage]}</h2>
            <h3 className="lolfont uppercase">{spell.name}</h3>
            <p className=" text-sm pb-5" dangerouslySetInnerHTML={posiblehtml}></p>
            <video preload="metadata" autoPlay muted loop src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${completeZeros(parseInt(champ.key))}/ability_${completeZeros(parseInt(champ.key))}_${ability[currentPage]}1.webm`} className="w-1/2" />

        </motion.div>
    );
};

