import React from 'react';
import "../styles/CardDetail.css";
    
const Card = ({item, onClose}) => {
    return (
        <div className='cardDetail'>
            <div className='content'>
                <div className='contentLeft'>
                    <img src={item.affiche} alt="affiche" />
                </div>
                <div className='content-right'>
                    <div className='title'><h2>{item.serie}</h2></div>                 
                    <div className='city'><h3>{item.city}</h3></div> 
                    <div className='country'><h3>{item.country}</h3></div> 

                    <div className="imageCity"><img src={item.pic} alt="city"/></div>
                    <div className='airbnb'>
                    <a href={item.airbnb}>Réservez un logement</a> 
                     
                    </div>
                </div>
                <div className='closeButton' >
                    <svg onClick={onClose} width="30" height="30" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292894 10.2929C-0.0976309 10.6834 -0.0976309 11.3166 0.292894 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6 7.41421L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L7.41421 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683418 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L6 4.58579L1.70711 0.292893Z" fill="#592C1C"/>
                </svg>
                </div>
            </div>
         </div>
    );
};

export default Card;