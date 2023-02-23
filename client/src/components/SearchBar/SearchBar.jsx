import React from 'react';
import style from './SearchBar.module.css';



const SearchBar = () => {
   return(
      <div className={style.container}>
         <input className={style.input} placeholder="Search Recipe" type="search" />
         <button className={style.button}>SEARCH</button>
      </div>
   )

}

export default SearchBar;