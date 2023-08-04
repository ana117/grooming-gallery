import {ToolsImage} from "../assets/image";
import {useTranslation} from "react-i18next";

const HeroLeft = () => {
    const {t} = useTranslation();
    return (
        <div className="flex items-center justify-center relative h-full">
            <img src={ToolsImage} alt="tools" className="brightness-[.25]"/>
            <div className="absolute px-[2rem] flex flex-col gap-[3rem] text-text-dark">
                <h1 className="heading text-4xl md:text-5xl">
                    {t("heroHeading")}
                </h1>
                <div className="flex flex-col gap-[1rem] paragraph">
                    <p>{t("heroText")}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroLeft;