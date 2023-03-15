import React from 'react';
import './App.css'
import { BottomNavbar, Footer, Hero, Navbar, ProductsArea, ProductsSlider } from './components'
import LanguageContext from './contexts/LanguageSwitcher';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
    
    AOS.init({
        offset: 200,
    });
    
    const { language } = React.useContext(LanguageContext);
    const endPoint = ""

    return (

        <div className='App' style={{ textAlign: "center" }}>
            <Navbar/>
            <Hero endPoint={endPoint}/>
            <ProductsSlider language={language} endPoint={endPoint} />
            <ProductsArea language={language} endPoint={endPoint}/>
            <Footer/>
            <BottomNavbar />
        </div>

    )
}

export default App