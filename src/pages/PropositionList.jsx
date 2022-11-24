import React from 'react';
import "../styles/PropositionList.css"
import array from '../components/BaseDonnées'
import Search from '../components/Search'
import { useState } from 'react';

const PropositionList = () => {
    const [searchValue, setSearchValue] = useState ("")
    
    return (
        <div className='choice'>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            
            {array.filter((e) => {
                return e.serie.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
            })
            
            .map((e) => {
                return <div className='card'><img src={e.affiche} alt="affiche" /></div>
                
            })}
        </div>
    );
};

export default PropositionList;