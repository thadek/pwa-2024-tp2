import { useTitle } from "../../Hooks/useTitle";
import Listcards from "../../Components/Listcards/Listcards";
import Logo from "../../Components/Logo/Logo";

export default function Home() {

  useTitle("Home");

  return (
    <div className="flex flex-wrap gap-3 p-3">  
    <div>
    
      <Logo/>
    </div> 
     <Listcards/>
      </div>
  );
}
