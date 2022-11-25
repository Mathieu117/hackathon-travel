import React from 'react';
import "../styles/Footer.css";
import {Link } from "react-router-dom";


const Contactus = () => {

  return (
    
   
   
    
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
      <Link   to="/" className='back'><button>Retour</button></Link>
        <button className="send" type="submit" onClick={() => {alert('Nous vous remercions de votre message');}}>
          Envoyer
        </button>
      </div>
    </div>
        
  );
};

export default Contactus;