import Btncard from "../Btncard/Btncard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { Champion } from "../../Types/Champion";
import { useChampions } from "../../Hooks/useChampions";


const Card = ({ champ }: { champ: Champion }) => {
  const navigate = useNavigate()
  const { title, id, name } = champ;
  const { getChampionImgsURL } = useChampions();
  const imgSrc = getChampionImgsURL(id).loading;
  const onclickSeeMoreHandler = () => {
    navigate(ROUTES.detail+id);
  }

  return (
    <div>
      <fieldset className="relative text-center gap-6 items-center rounded-2xl mb-14 border  border-white ">
        <div
          
          className="relative max-w-64 overflow-hidden rounded-2xl shadow-2xl group"
        >

          <img
            src={imgSrc}
            className=" transition-transform scale-110 group-hover:scale-105  duration-200"
          />
          <div className="absolute inset-0  flex items-end ">
            <div className=" text-white p-3 group w-full bg-black bg-opacity-60	">
              <h3 className="text-xl lolfont uppercase group-hover:translate-x-3 duration-200 font-bold mb-1">{name}</h3>
              <p className="font-light text-sm">{title}</p>
              <div className="flex flex-row-reverse "> <Btncard onClick={onclickSeeMoreHandler} /></div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Card;
