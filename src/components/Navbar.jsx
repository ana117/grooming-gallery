import DarkModeSwitcher from "./DarkModeSwitcher";
import LogoImage from "../assets/logo.svg";

const Navbar = () => {
    return (
        <nav className="top-0 absolute w-full px-[1rem] py-[0.5rem] z-50
                        flex items-center bg-accent">
            <div className="flex items-center gap-[0.5rem]">
                <img src={LogoImage} alt="logo" className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]"/>
                <p className="font-oswald text-2xl md:text-3xl text-text-dark">
                    Grooming Gallery
                </p>
            </div>
            <div className="ms-auto">
                <DarkModeSwitcher />
            </div>
        </nav>
    );
}

export default Navbar;