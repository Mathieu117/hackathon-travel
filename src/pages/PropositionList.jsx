import React from 'react';
import "../styles/PropositionList.css"
import array from '../components/BaseDonnées'

import Popup from 'reactjs-popup'; 

import { useState } from 'react';
import CardDetail from "../components/CardDetail"



const PropositionList = () => {
    
    const [open, setOpen] = useState()

    const openPopUp = (index) => {
        console.log("clicked")
        setOpen(array[index])
    }

    return (
        <div className='choice'>

          

            {array.map((e, index) => {
                return <div className='card' onClick={() => openPopUp(index)}><img src={e.affiche} alt="affiche" /></div>
            })} 
            {open ? <CardDetail item={open} onClose={() => setOpen(null)}/> : null}

        </div>
    );
};

export default PropositionList;