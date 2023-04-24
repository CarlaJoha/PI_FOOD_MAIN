import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import  SearchBar  from '../SearchBar/SearchBar';
// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'redux-react';

const NavBar = () => {
//    const dispatch = useDispatch();
//    const currentPage = useSelector( (state) => state.currentPage);
//    const allRecipes  = useSelector((state) => state.allRecipes);

// const HandleChangeEvent = (event) =>{
//    event.preventDefault();
//    dispatch(currentPage)
// }

// // useEffect(() => {
// //    dispatch(allRecipes)
// // }, [])

// onClick={HandleChangeEvent}
   return(
      <nav className={style.container}>
         <Link to="/recipes" >HOME</Link>
         <Link to="/form" >CREATE RECIPE</Link>
         <SearchBar ></SearchBar>
      </nav>
   )

}

export default NavBar;