import React from 'react';
import "../styles/PropositionList.css"
import array from '../components/BaseDonnées'

const PropositionList = () => {
    
    return (
        <div className='choice'>
            {array.map((e) => {
                return <div className='card'><img src={e.affiche} alt="affiche" /></div>
            })}
        </div>
    );
};

export default PropositionList;