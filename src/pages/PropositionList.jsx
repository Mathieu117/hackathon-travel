import React from 'react';
import "../styles/PropositionList.css"
import array from '../components/BaseDonnées'
import Popup from 'reactjs-popup'; 
const PropositionList = () => {
    
    return (
        <div className='choice'>
            {array.map((e) => {
                return <div className='card'><img src={e.affiche} alt="affiche" /></div>
            })}
            <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
        </div>
    );
};

export default PropositionList;