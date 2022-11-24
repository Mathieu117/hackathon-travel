import React from 'react';
import {useState, useEffect} from 'react'
import 

const SearchBar = () => {

const [datas, setDatas] = useState([]);



    return (
        <>
        <div className ="search">

            <input 
            type ="text"
            name ="searchBar" 
            id ="searchBar" 
            placeholder ="Rechercher"/>
        </div>
        <div className ="searchResults">
            <div className="searchResult">
                Données
            </div>
        </div>
        </>
    );
};

export default SearchBar;