import React from 'react';
import "../styles/Header.css"
import image from "../images/NetFly.png"




const Header = () => {
    return (
        <div className='navBar'>
            <img src={image} alt="logo"></img>
        </div>
    );
};

export default Header;