import { useChampions } from "../Hooks/useChampions";
import { useParams } from "react-router-dom";
import { Champion } from "../Types/Champion";
import { useState,useEffect } from "react";
import { ChampionCover, ChampionDetail, ImageSlide } from "../Components/Champion";



const { getChampion } = useChampions();



export default function ChampionDetails() {

    const { id } = useParams<{ id: string }>();

    
    const [champ, setChamp] = useState<Champion>(null); 
   
    useEffect(() => {
        const getChamp = async () => {
            //Traer un campeon
                const champ = await getChampion(id);
                setChamp(champ);     
        }
        getChamp();
        
    }, [id])


    if(!champ) return <h1>Cargando...</h1>;

    if(champ.error) return <h1>Campeon no encontrado</h1>;
    

return champ && !champ.error && 
      <div>
        <ChampionCover champion={champ} />
         <ChampionDetail name={id} champ={champ} />
         <ImageSlide imgs={champ.skins} id={id} />
        </div> 
      
}