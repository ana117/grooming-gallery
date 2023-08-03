import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";

const Hero = () => {
    return (
        <div className="grid lg:grid-cols-2 lg:h-screen overflow-hidden">
            <div className="overflow-hidden">
                <HeroLeft/>
            </div>
            <div className="overflow-hidden hidden lg:block">
                <HeroRight/>
            </div>
        </div>
    );
}

export default Hero;