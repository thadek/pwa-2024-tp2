import { Champion } from "../../Types/Champion"
import { useChampions } from "../../Hooks/useChampions"
import { useState } from "react";
import { Ability } from "./Ability";




export default function ChampionSkills({ champ }: { champ: Champion }) {

    const [currentPage, setCurrentPage] = useState(5);
    const changePage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const { getSpellImgURL } = useChampions();

    return (
        <div className=" p-10  h-3/4 flex flex-col gap-3">
            <h3 className='text-5xl font-thin lolfont uppercase '>Habilidades</h3>
            <div className="items-center ">
                <ul className=" flex gap-2">

                    {/**Pasiva */}
                    <button onClick={() => changePage(5)}>
                        <li className={` shadow-lg hover:shadow-white transition transform delay-75 shadow-blue-400/40  ${currentPage == 5 ? " scale-110 shadow-white " : ""} `} onClick={() => changePage(0)} >
                            <img src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/passive/${champ.passive.image.full}`} alt={champ.passive.name} />
                        </li>
                    </button>
                    {Object.entries(champ.spells).map(([key, spell]: any) => {

                        return <li className={` shadow-lg transition ease-in-out delay-75 hover:shadow-white rounded shadow-blue-400/40 ${currentPage == key ? " scale-110 shadow-white " : ""}`} key={key} >

                            <button onClick={() => changePage(key)}>
                                <img src={`${getSpellImgURL(spell.id)}`} alt={spell.name} />
                            </button>


                        </li>
                    })}
                </ul>

            </div>
            <div className="mt-10">
                {currentPage == 5 ?
                    <Ability passive={champ.passive} currentPage={currentPage} champ={champ} /> :
                    <Ability spell={champ.spells[currentPage]} currentPage={currentPage} champ={champ} />
                }
            </div>

        </div >)
}