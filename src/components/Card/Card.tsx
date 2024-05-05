import Btncard from "../Btncard/Btncard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { Champion } from "../../Types/Champion";
import { useChampions } from "../../Hooks/useChampions";
import { Show } from "../../components/Animations/Show";
import CardImage from "./CardImage";


const Card = ({ champ }: { champ: Champion }) => {
  const navigate = useNavigate()
  const { title, id, name } = champ;
  const { getChampionImgsURL } = useChampions();
  const imgSrc = getChampionImgsURL(id).loading;
  const onclickSeeMoreHandler = () => {
    navigate(ROUTES.detail+id);
  }

  return (
   <Show>
      <fieldset className="relative text-center gap-6 items-center rounded-2xl mb-14   ">
        <div
          
          className="relative max-w-64 overflow-hidden rounded-2xl shadow-2xl group"
        >

         <CardImage src={imgSrc} width="100%" size="200px" />
          <div className="absolute inset-0  flex items-end ">
            <div className=" text-white p-2 group w-full bg-black bg-opacity-60	">
              <h3 className="text-xl lolfont uppercase group-hover:translate-x-3 duration-200 font-bold mb-1">{name}</h3>
              <p className="font-light " style={{fontSize:'12px'}}>{title}</p>
              <div className="flex flex-row-reverse "> <Btncard onClick={onclickSeeMoreHandler} /></div>
            </div>
          </div>
        </div>
      </fieldset>
      </Show>
  );
};

export default Card;
