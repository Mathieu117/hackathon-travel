import React from 'react';
import "../styles/PropositionList.css"
import array from '../components/BaseDonnées'
<<<<<<< HEAD
=======
import Popup from 'reactjs-popup'; 
>>>>>>> 144a607a9021dff6b5b212963711e71b64c1983f
import { useState } from 'react';
import Search from '../components/Search';
import CardDetail from '../components/CardDetail'
const PropositionList = () => {
    const [searchValue, setSearchValue] = useState ("")
    
    const [open, setOpen] = useState()

    const openPopUp = (index) => {
        setOpen(array[index])
    }

    return (
    <div> 
        <div className='choice'>
           <span ><Search searchValue={searchValue} setSearchValue={setSearchValue} /></span>
            {array
            .filter((e) => {
             return e.serie.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
})
            .map((e,index) => {
                return <div className='card' onClick={() => openPopUp(index)}><img src={e.affiche} alt="affiche" /></div>
            })}
            {open ? <CardDetail item={open} onClose={()=> setOpen(null)} /> : null}
        </div>
     </div>
    );
};

export default PropositionList;