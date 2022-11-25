import React from 'react';

import "../styles/PropositionList.css"
import array from '../components/BaseDonnées'
import { useState } from 'react';
import Search from '../components/Search';
import CardDetail from '../components/CardDetail'
const PropositionList = () => {
    const [searchValue, setSearchValue] = useState ("")
    
    const [open, setOpen] = useState()

    const openPopUp = (index) => {
        console.log("clicked")
        setOpen(array[index])
    }

    return (
    <div>
        <div className="propo">

           <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className='choice'>
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