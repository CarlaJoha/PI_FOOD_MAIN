import React from 'react';
import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import  SearchBar  from '../SearchBar/SearchBar';

const NavBar = () => {
   return(
      <nav className={style.container}>
         <Link to="/recipes" >HOME</Link>
         <Link to="/form" >CREATE RECIPE</Link>
         <SearchBar ></SearchBar>
      </nav>
   )

}

export default NavBar;