import Logo from "../../components/Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import NavbarButtons from "../NavbarButtons/NavbarButtons";

export default function Navbar() {
return (
    <div className="sticky top-0 z-50 flex justify-start p-2 bg-neutral-950 border-b-2 border-violet-950">
        <Logo />
        <Searchbar />
        <NavbarButtons />
    </div>
);
};