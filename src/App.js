import React from 'react';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import LanguageContext from './contexts/LanguageSwitcher';
import ScrollToTop from './utils/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';

const App = () => {

    AOS.init({
        offset: 200,
    });

    const endPoint = "https://ik.imagekit.io/bbtbvbqon/food-menus/topburger/"
    const { language } = React.useContext(LanguageContext);

    return (

        <div className='App' style={{ textAlign: "center" }}>
            <Router>
            <ScrollToTop />
                <Routes>
                    <Route exact path="/" element={<Home endPoint={endPoint} lng={language} />} />
                    <Route path='/:productId' element={<Product endPoint={endPoint} lng={language} />} />
                </Routes>
            </Router>
        </div>

    )
}

export default App