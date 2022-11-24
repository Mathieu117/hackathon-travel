import React from 'react';
import {useState} from 'react';
import array from './BaseDonnées';
import Search from './Search';

function SearchBar() {
    const [searchValue, setSearchValue] = useState ("");
    
    return (
        <div>
            <Search setSearchValue = {setSearchValue} searchValue = {setSearchValue} />
            {array.map((e)=>{
                return(
                    <div>
                        <img src= {e.affiche} alt="affiche"/>
                        
                    </div>
                )

            })}

            
        </div>
    );
}

export default SearchBar;