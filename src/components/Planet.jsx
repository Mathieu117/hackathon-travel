import React from 'react';
import "../styles/Planet.css"
import image from "../images/logo2-removebg-preview.png"

const Planet = () => {
    return (
        <div className='galaxy'>
            <img src={image} alt="logo"></img>
            
            
            <div className='Planete'>
                <div className='Terre'>
                    <div className='avion'>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Planet;