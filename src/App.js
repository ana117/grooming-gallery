import Hero from "./Hero";
import {useEffect} from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./AboutUs";
import Shop from "./Shop";
import Footer from "./components/Footer";
import Divider from "./components/Divider";

function App() {
    useEffect(() => {
        document.title = "The Grooming Gallery";
    }, []);

    return (
        <div className="min-h-screen theme relative font-montserrat">
            <Navbar/>
            <Hero/>
            <AboutUs/>
            <Divider/>
            <Shop isHighlight={true} />
            <Footer/>
        </div>
    );
}

export default App;
