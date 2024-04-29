import { Champion } from "../../Types/Champion";
import { Reveal } from "../Animations/Reveal";

export default function ChampionLore({ champ }: { champ: Champion }) {


    return (
        <div className="min-h-100 md:min-h-1/2 flex  items-center p-5 gap-2">
            <div className="hidden md:w-1/2 md:flex items-center  justify-center">
                <div className=" w-1/6 text-xl items-center justify-center">
                   <Reveal>
                    <div className="sm:w-100 xs:w-100">
                        <img src={`https://universe.leagueoflegends.com/images/role_icon_${champ.tags[0].toLowerCase()}.png`} className="w-16 md:w-32 lg:w-48" />
                        <span className="lolfont uppercase text-m">Rol</span>
                    </div>
                    </Reveal>
                </div>

            </div>
            <div className="w-100 md:w-1/2">
               <Reveal> 
                <p className="text-start text-sm">{champ.lore}</p>
               </Reveal>
            </div>

        </div>
    );
}