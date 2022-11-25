import React from 'react';
import "../styles/Search.css"

function Search({searchValue, setSearchValue}) {
    return (
        <div>
            <input className='searchBar'
                value = {searchValue}
                type = "text"
                placeholder= "Vers l'infini et au delà...tapez votre recherche"
                onChange = {(e) => setSearchValue(e.target.value)}
                />
        </div>
    );
}

export default Search;