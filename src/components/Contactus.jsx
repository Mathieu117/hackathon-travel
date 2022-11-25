import React from 'react';
import "../styles/Footer.css";
import {Link } from "react-router-dom";


const Contactus = () => {

  return (
    
   
   
    
    <div className='form'>

      <div className="form-group">
        <label htmlFor="nom"></label>
        <input className="form-control" id="nom" placeholder='Nom'/>
      </div>

      <div className="form-group">

        <label htmlFor="email"></label>

        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          />

      </div>

      <input className='input' type="text" placeholder='Votre message' />

      <div className="twobutton">
      <Link   to="/" ><button className='back'>Retour</button></Link>
        <button className="send" type="submit" onClick={() => {alert('Nous vous remercions de votre message. A bientot ! ');}}>
          Envoyer
        </button>
      </div>
    </div>
   
  );
};

export default Contactus;