
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link  to="/home" className="text-white  flex flex-col hover:text-purple-800 transition duration-150 justify-center items-center  lolfont uppercase">
            <h1 className='text-3xl'>lolchamp</h1>
           
        </Link>
    );
}