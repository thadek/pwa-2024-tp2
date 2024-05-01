import { useChampions } from "../../Hooks/useChampions";
import { useParams } from "react-router-dom";
import { Champion } from "../../Types/Champion";
import { useState, useEffect } from "react";
import { ChampionCover, ChampionDetail, ImageSlide } from "../../Components/Champion";
import {  FloatingButtonPDF } from "../../Components/Button/FloatingButtonPDF";
import { ViewPDF } from "../../Components/PDFService/ViewPDF";
import { NotFoundPage } from "../Error/404";
import { Loading } from "../Loading/Loading";


export default function ChampionDetails() {

    const { getChampion } = useChampions();

    const { id } = useParams<{ id: string }>();

    const [pdf, setPDF] = useState<boolean>(false);

    const [champ, setChamp] = useState<Champion>();

    useEffect(() => {
        const getChamp = async () => {
            //Traer un campeon
            const champ = await getChampion(id!);
            setChamp(champ);

        }
        getChamp();

    }, [id])

    if(pdf){
        return <ViewPDF champ={champ!}/>
    }

    if (!champ) return <Loading text="Cargando campeón..." />;

    if (champ.error) return <NotFoundPage />;


    return champ && !champ.error &&
        <div>
            <ChampionCover champion={champ} />
            <ChampionDetail name={id} randomSkin={champ.randomSkin} champ={champ} />
            <ImageSlide imgs={champ.skins} id={id} />
            <FloatingButtonPDF setPDF={setPDF} />
        </div>

}