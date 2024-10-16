
import { Link } from "react-router-dom";
import { ROUTES } from "../../const/routes";

export default function Logo() {
    return (
        <Link to={ROUTES.home} className="text-white  flex flex-col hover:text-purple-800 transition duration-150 justify-center items-center  lolfont uppercase">
            <h1 className='text-3xl'>lolchamp</h1>
        </Link>
    );
}