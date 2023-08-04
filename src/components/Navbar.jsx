import DarkModeSwitcher from "./DarkModeSwitcher";
import LogoImage from "../assets/logo.svg";
import {Link} from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
    return (
        <nav className="top-0 absolute w-full px-[1rem] z-50
                        flex items-center gap-[4rem] bg-accent h-[3rem] md:h-[4rem]
                        font-oswald text-2xl md:text-3xl text-text-dark">
            <Link to="/" className="flex items-center gap-[0.5rem]">
                <img src={LogoImage} alt="logo" className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]"/>
                <p>Grooming Gallery</p>
            </Link>
            <div className="flex items-center gap-x-[2rem] h-full">
                <Link to="/products"
                      className="flex items-center h-full px-[1rem] hover:bg-accent-dark hover:text-text">
                    Products
                </Link>
            </div>

            <div className="ms-auto flex gap-[1rem]">
                <LanguageSwitcher/>
                <DarkModeSwitcher/>
            </div>
        </nav>
    );
}

export default Navbar;