import Btncard from "../Btncard/Btncard";
import { TypeCharacter} from "../../interface/character.interface";


const Card: React.FC<TypeCharacter> = ({
  imgSrc,
  title,
  description,
  ...props
}) => {
  return (
    <div
      {...props}
      className="relative max-w-64 overflow-hidden rounded-2xl shadow-2xl group"
    >
      <img
        src={imgSrc}
        className=" transition-transform group-hover:scale-110 duration-200"
      />
      <div className="absolute inset-0 flex items-end ">
        <div className=" text-white p-3  w-full bg-black bg-opacity-60	">
          <h3 className="text-xl  font-bold mb-1">{title}</h3>
         <p className="font-light text-sm">{description}</p>
         <div className="flex flex-row-reverse "> <Btncard/></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
