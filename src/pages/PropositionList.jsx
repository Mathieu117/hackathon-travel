import React from 'react';
import "../styles/PropositionList.css"
import array from '../components/BaseDonnées'
import Popup from 'reactjs-popup'; 
const PropositionList = () => {
    
    return (
        <div className='choice'>
            {array.map((e) => {
                return <div className='card'><Popup trigger={<img src={e.affiche} alt="affiche" />} position="center">
    <div>Popup content here !!</div>
  </Popup></div>
            })}
            
        </div>
    );
};

export default PropositionList;