import React from 'react';
import "../styles/Footer.css";
import {Link } from "react-router-dom";


const Contactus = () => {

  return (
    
   
    <div className='contactus'>
    
    <div className='form'>

      <div className="form-group">
        <label htmlFor="nom">Nom</label>
        <input className="form-control" id="nom" />
      </div>

      <div className="form-group">

        <label htmlFor="email">Adresse mail</label>

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
        </div>
  );
};

export default Contactus;