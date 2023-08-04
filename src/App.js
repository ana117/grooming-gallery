import {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";

function App() {
    useEffect(() => {
        document.title = "The Grooming Gallery";
    }, []);

    return (
        <div className="min-h-screen theme relative font-montserrat flex flex-col whitespace-pre-line">
            <BrowserRouter basename="/grooming-gallery">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/products" element={<ShopPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
