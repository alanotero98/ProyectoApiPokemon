import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom'; // Cambio en la importación
import background from './img/background.jpg';

const LandingPage = () => {
    const navigate = useNavigate(); // Cambio en la variable

    const goToHomePage = () => {navigate('/home');};// Cambio en la función de navegación

    return (
        <div className="landing-page">
            <img src={background} alt="Background" className="background-image" />
            <button className="enter-button" onClick={goToHomePage}>Ingresar</button>
        </div>
    );
};

export default LandingPage;
