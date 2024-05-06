import Logo from "../../components/Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import NavbarButtons from "../NavbarButtons/NavbarButtons";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";


export default function Navbar() {
    const location = useLocation();

    return (
        <div className={`sticky top-0 z-50 h-20 flex justify-between p-3 bg-neutral-950 border-b-2 border-violet-950`}>
            <Logo />
            {
                location.pathname === '/home' ? <><Searchbar /><NavbarButtons /> </> : null
            }
            {
                /**Boton volver atrás */
                location.pathname.includes("champion") ? <div >
                    <Link to="/home" className="flex lolfont uppercase text-white p-3 group"> 
                       <ArrowLeftIcon className="w-6 h-6 group-hover:-translate-x-3 transition duration-100" />
                        <span className="ml-2">Volver</span>
                    </Link>
                </div> : null
            }
        </div>
    );
};