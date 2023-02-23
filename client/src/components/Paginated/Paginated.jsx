import React from 'react';
import style from './Paginated.module.css';


const Paginated = ({totalRecipes, recipesPerPage, setCurrentPage, currentPage}) => {
   
   let pages = [];
   const recipes = Math.ceil(totalRecipes.length / recipesPerPage);
   for(let i = 1; i <= recipes; i++){ pages.push(i) }

   return(
      
      <div className={style.paginated}>
         {
         pages.map((page, index) => {
            return (
               <button 
                  key={index} 
                  className={page === currentPage ? 'active' : ''}
                  onClick={() => setCurrentPage(page)}>{page}
                  
               </button>)
         } )
         }
      </div>
   )
}

export default Paginated;