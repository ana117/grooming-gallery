import logo from '../assets/logo.svg';

const AboutUs = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-[2rem] py-[2rem]">
            <div className="flex justify-center">
                <img src={logo} alt="logo" className="w-1/2 bg-accent rounded-full"/>
            </div>

            <div className="flex flex-col justify-center px-[2rem] gap-[2rem]">
                <h1 className="heading text-center">
                    About The Grooming Gallery
                </h1>
                <div className="flex flex-col gap-[1rem] paragraph">
                    <p>
                        At The Grooming Gallery, we're not just a barbershop – we're a sanctuary for style and self-care.
                        Established with a passion for the art of grooming, our barbershop has become a haven where
                        craftsmanship and creativity converge.
                    </p>
                    <p>
                        Discover a place where precision meets passion, tradition meets innovation, and grooming becomes an
                        art form. Join us at The Grooming Gallery and experience grooming redefined.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;