import React from 'react';
import "../styles/Planet.css"
import image from "../images/logo2-removebg-preview.png"



const Planet = () => {
    return (
        <div className='galaxy'>
            <div className='bar'>
                <img src={image} alt="logo"></img>
            </div>
            <div className='Planete'>
                <div className='Terre'>
                </div>
            </div>
            <div className='titre'>
            <h1>Voyagez à travers vos Fictions</h1>

            </div>
            
        </div>
    );
};

export default Planet;