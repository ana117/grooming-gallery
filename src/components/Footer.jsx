const Footer = () => {
    return (
        <footer className="flex flex-col gap-[2rem] bg-accent p-[2rem] mt-[2rem] text-text-dark">
            <div className="flex justify-between">
                <div className="flex flex-col text-lg gap-[0.5rem]">
                    <p className="text-xl font-semibold">The Grooming Gallery</p>
                    <p>123 Main Street, Cityville, Barberland</p>
                    <a href="tel:123-4567"
                       className="hover:underline underline-offset-8 decoration-text-dark">
                        123-4567
                    </a>
                    <a href="mailto:fake-email@groominggallery.com"
                       className="hover:underline underline-offset-8 decoration-text-dark">
                        fake-email@groominggallery.com
                    </a>
                </div>

                <div className="hidden lg:flex flex-col text-lg gap-[0.5rem]">
                    <p className="text-xl font-semibold">Hours</p>
                    <p>Monday - Friday: 9am - 5pm</p>
                    <p>Saturday: 10am - 4pm</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>

            <div className="w-full text-center text-sm italic">
                This is a fake website for a fake business. This website was created for demonstration only.
            </div>
        </footer>
    );
}

export default Footer;