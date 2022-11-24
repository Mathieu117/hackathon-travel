import React from 'react';
import "../styles/Header.css"
import Planet from "../components/Planet";

const Header = () => {
    return (
        <div className='navBar'>
            <h1 className='titre'><Planet/></h1> 
        </div>
    );
};

export default Header;