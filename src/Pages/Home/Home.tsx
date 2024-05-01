import { useTitle } from "../../Hooks/useTitle";
import Listcards from "../../Components/Listcards/Listcards";

export default function Home() {

  useTitle("Home");

  return (
    <div className="flex flex-wrap gap-3 p-3">  
    <div>
      <h1 className='text-xl  text-white  lolfont uppercase'>league of legends</h1>
    </div> 
     <Listcards/>
      </div>
  );
}
