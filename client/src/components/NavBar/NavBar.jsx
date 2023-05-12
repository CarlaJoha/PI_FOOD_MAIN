import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import  SearchBar  from '../SearchBar/SearchBar';
import {  getAllRecipes } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useEffect} from 'react';

const NavBar = () => {
   const dispatch = useDispatch();


   useEffect(() => {
      dispatch(getAllRecipes())
   }, [dispatch]);

const handleClick = (event) => {
   event.preventDefault();
   dispatch(getAllRecipes())
  }

   return(
      <nav className={style.containerNavBar}>
         <Link className={style.link} to="/recipes" >HOME</Link>
         <Link className={style.link} to="/form" >CREATE RECIPE</Link>
         <SearchBar ></SearchBar>
         <button className={style.buttonRefresh}            
            onClick={(event) =>  handleClick(event)  }>REFRESH
         </button>
      </nav>
   )

}

export default NavBar;