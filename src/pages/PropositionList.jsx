import React from 'react';
import "../styles/PropositionList.css"
import array from '../components/BaseDonnées'
import { useState } from 'react';
import CardDetail from "../components/CardDetail"
import Search from '../components/Search';


const PropositionList = () => {
    const [searchValue, setSearchValue] = useState ("")
    
    const [open, setOpen] = useState()

    const openPopUp = (index) => {
        console.log("clicked")
        setOpen(array[index])
    }

    return (
        <div className='choice'>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            

          

            {array.filter((e) => {
                return e.serie.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
            })
            
            .map((e, index) => {
                return <div className='card' onClick={() => openPopUp(index)}><img src={e.affiche} alt="affiche" /></div>
                
            })} 
            {/* {open ? <CardDetail item={open} onClose={() => setOpen(null)}/> : null}
 */}
        </div>
    );
};

export default PropositionList;