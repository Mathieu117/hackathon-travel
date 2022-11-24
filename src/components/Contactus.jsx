import React from 'react';
import "../styles/Footer.css";




const Contactus = () => {

    return (
      <div className='form'>

        <form action="" method='gat'></form>
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
      <input className='input'type="text" placeholder='Votre message' />
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Envoyer
        </button>
      </div>
      </div>
    );
};

export default Contactus;