import Hero from "./Hero";
import {useEffect} from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./AboutUs";
import Shop from "./Shop";

function App() {
    useEffect(() => {
        document.title = "The Grooming Gallery";
    }, []);

    return (
        <div className="min-h-screen theme relative font-montserrat">
            <Navbar/>
            <Hero/>
            <AboutUs/>
            <Shop/>
        </div>
    );
}

export default App;
