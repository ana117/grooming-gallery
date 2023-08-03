import {ToolsImage} from "../assets/image";

const HeroLeft = () => {
    return (
        <div className="flex items-center justify-center relative h-full">
            <img src={ToolsImage} alt="tools" className="brightness-[.25]"/>
            <div className="absolute px-[2rem] flex flex-col gap-[3rem] text-text-dark">
                <h1 className="heading text-4xl md:text-5xl">
                    Crafting Timeless Styles, <br/>One Cut at a Time
                </h1>
                <div className="flex flex-col gap-[1rem] paragraph">
                    <p>
                        <b>The Grooming Gallery</b>, where the art of grooming meets modern sophistication.
                        <span className="hidden md:inline">
                                    &nbsp;Step into a realm of distinguished service and impeccable craftsmanship as our
                                    skilled barbers bring your vision to life.
                                </span>
                    </p>
                    <p>
                        Book your appointment today and elevate your grooming journey.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroLeft;