

import ChampionSkills from './ChampionSkills';
import { Champion } from '../../Types/Champion';


export default function ChampionDetailContainer({ champ }: { champ: Champion }) {

  //  const { id, lore, image } = champ;

    return (
        <div className="w-full md:w-1/2 flex">
            <div className="flex flex-col gap-5 items-center justify-center overflow-scroll no-scrollbar">        
                <ChampionSkills champ={champ} />
            </div>
        </div>
    )

}