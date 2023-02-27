/* eslint-disable array-callback-return */
import React from 'react';
import style from './Paginated.module.css';
import { pagination } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


const Paginated = ({ currentPage }) => {
   
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
      
      <div className={style.nav}>
         
         <ul className={style.ul}>
         {
            pages && currentPage > 1 ?
               <button 
                  className="buttonPage"
                  onClick={handlerPages}
                  value="Previous">               
               </button> : null
         }
         { 
            pages.map((number) => (
                  <button 
                     className={style.buttonPage} 
                     onClick={handlerPages}
                     value={number} 
                     key={number}>{number}
                  </button>
         ))}
          {
            pages && currentPage < pages.length ?
               <button 
                  className="buttonPage"
                  onClick={handlerPages}
                  value="next">                 
               </button> : null
         }
         </ul>
      </div>
   )
}

export default Paginated;
//miércoles S