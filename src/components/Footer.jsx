import React from 'react';
import "../styles/Footer.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contactus from './Contactus';
// import {AiFillFacebook} from 'react-icons/'


const Footer = () => {
    return (

        <BrowserRouter>
        <Routes>
            <Route  path="/Contactus" element={<Contactus/>}/>
            
        </Routes>
        
        <div className='footer'>
            <div className='list'>
                <ul className='reseaux'>
                <div className='allimg'> 
                <a href="//www.facebook.com/">
                <img  className='img-reseaux'src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="FB"/>
                </a>
                <a href="//www.instagram.com/">
                <img className='img-reseaux' src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="INSTA" />
                </a>
                <a href="//twitter.com/">
                <img className='img-reseaux' src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" />
                </a>
                </div>
                
                </ul>
                <Link  component={Contactus}to="/Contactus" ><button className='link'>Contactez Nous</button></Link>
            </div>
        </div>
       
        </BrowserRouter>
    );
};

export default Footer;