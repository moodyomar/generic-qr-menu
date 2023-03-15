import React from 'react';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import LanguageContext from './contexts/LanguageSwitcher';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

    AOS.init({
        offset: 200,
    });

    const endPoint = ""
    const { language } = React.useContext(LanguageContext);

    return (

        <div className='App' style={{ textAlign: "center" }}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home endPoint={endPoint} lng={language} />} />
                </Routes>
            </Router>
        </div>

    )
}

export default App