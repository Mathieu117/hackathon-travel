import React from 'react';
import "../styles/Planet.css"
import image from "../images/logo2-removebg-preview.png"

const Planet = () => {
    return (
        <div className='galaxy'>
            <div className='bar'>
            <img src={image} alt="logo"></img>
            <h1>Voyagez à travers vos Fictions</h1>
            </div>

            
            
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