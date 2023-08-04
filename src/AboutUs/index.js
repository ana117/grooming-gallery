import logo from '../assets/logo.svg';
import {useTranslation} from "react-i18next";

const AboutUs = () => {
    const {t} = useTranslation();

    return (
        <div className="grid lg:grid-cols-2 gap-[2rem] py-[2rem]">
            <div className="flex justify-center">
                <img src={logo} alt="logo" className="w-1/2 bg-accent rounded-full"/>
            </div>

            <div className="flex flex-col justify-center px-[2rem] gap-[2rem]">
                <h1 className="heading text-center">
                    {t("aboutHeading")}
                </h1>
                <div className="flex flex-col gap-[1rem] paragraph">
                    <p className="hidden md:inline">{t("aboutText")}</p>
                    <p className="md:hidden">{t("aboutTextShort")}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;