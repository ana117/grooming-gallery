import {useState} from "react";
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import {PreviewOneImage, PreviewThreeImage, PreviewTwoImage} from "../assets/image";

const HeroRight = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [PreviewOneImage, PreviewTwoImage, PreviewThreeImage];

    const handlePrev = () => {
        setCurrentImage(prev => {
            if (prev === 0) {
                return images.length - 1;
            }
            return prev - 1;
        });
    };

    const handleNext = () => {
        setCurrentImage(prev => {
            if (prev === images.length - 1) {
                return 0;
            }
            return prev + 1;
        });
    };

    return (
        <div className="flex items-center justify-center relative h-full">
            <img src={images[currentImage]} alt="preview" className="brightness-50"/>
            <div className="absolute right-0 bottom-0 p-[2rem]
                            flex items-center justify-end gap-[4rem]
                            text-5xl bg-accent/75">
                <button onClick={handlePrev}>
                    <FaArrowLeftLong/>
                </button>
                <button onClick={handleNext}>
                    <FaArrowRightLong/>
                </button>
            </div>
        </div>
    );
}

export default HeroRight;