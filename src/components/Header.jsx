import React from 'react';
import "../styles/Header.css"
import image from "../images/logo2-removebg-preview.png"

const Header = () => {
    return (
        <div className='navBar'>
            <img src={image} alt="logo"></img>
            <h1>Voyagez à travers vos Fictions</h1>

        </div>
    );
};

export default Header;