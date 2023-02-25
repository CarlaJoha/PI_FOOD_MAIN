/* eslint-disable array-callback-return */
import React from 'react';
import style from './Paginated.module.css';
import { pagination } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


const Paginated = () => {
   
   const dispatch = useDispatch();

   const allRecipes = useSelector( (state) => state.allRecipes );
   const recipesPerPage = useSelector( (state) => state.recipesPerPage )
  

   let pages = [];
   for(let i = 1; i <= Math.ceil( allRecipes.length / recipesPerPage); i++){ 
      pages.push(i) 
   }

   const handlerPages = (event) => {
      dispatch(pagination(event.target.value))
   }
   
   return(
      
      <nav className={style.nav}>
         { 
            pages && pages.map((number) => (
               <ul className={style.ul}>
                  <button 
                     className={style.button} 
                     onClick={handlerPages} 
                     key={number}>{number}
                  </button>
               </ul>
         ))}
        
      </nav>
   )
}

export default Paginated;
//miércoles S