import React from 'react';
import "../styles/Footer.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contactus from './Contactus';


const Footer = () => {
    return (

        <BrowserRouter>
        <Routes>
            <Route  path="/Contactus" element={<Contactus/>}/>
            
        </Routes>
        <div className='footer'>
            <div className='list'>
                <ul className='contact'><h3>Contact</h3>
                <li className='li-contact'>Mail: voyagemail@Gmail.com</li>
                <li className='li-contact'>Tel: 07 46 48 12 39</li>
                <li className='li-contact'>Adresse: 4 rue Barron Nantes 44000</li>
                </ul>

                <Link  component={Contactus}to="/Contactus" ><button className='link'>Envoyer un message</button></Link>

                <ul className='reseaux'><h3>Nos réseaux</h3>
                <div className='allimg'> 
                <img className='img-reseaux' src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="FB" />
                <img className='img-reseaux' src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="INSTA" />
                <img className='img-reseaux' src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" /></div>
                
                </ul>
            </div>
        </div>
       
        </BrowserRouter>
    );
};

export default Footer;