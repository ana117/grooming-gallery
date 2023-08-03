import Hero from "../Hero";
import AboutUs from "../AboutUs";
import Divider from "../components/Divider";
import Shop from "../Shop";

const LandingPage = () => {
    return (
        <>
            <Hero/>
            <AboutUs/>
            <Divider/>
            <Shop isHighlight={true} />
        </>
    )
}

export default LandingPage;