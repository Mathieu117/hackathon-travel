import React from 'react';
import "../styles/Search.css"

function Search({searchValue, setSearchValue}) {
    return (
        <div>
            <input className='searchBar'
                value = {searchValue}
                type = "text"
                placeholder= "Tapez votre recherche...vers l'infini et au delà"
                onChange = {(e) => setSearchValue(e.target.value)}
                />
        </div>
    );
}

export default Search;