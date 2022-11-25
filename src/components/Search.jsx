import React from 'react';

function Search({searchValue, setSearchValue}) {
    return (
        <div>
            <input
                value = {searchValue}
                type = "text"
                placeholder= "Rechercher"
                onChange = {(e) => setSearchValue(e.target.value)}
                />
        </div>
    );
}

export default Search;