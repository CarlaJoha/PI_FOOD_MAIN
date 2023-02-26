import React from 'react';
import style from './Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllRecipes } from '../../redux/actions';
import  RecipesContainer  from '../../components/RecipesContainer/RecipesContainer';
import Paginated from '../../components/Paginated/Paginated'

const Home = () => {
   
   const dispatch = useDispatch();

   const allRecipes = useSelector( (state) => state.allRecipes );

   const recipesPerPage = useSelector( (state) => state.recipesPerPage )
   const currentPage = useSelector( (state) => state.currentPage  )
 
   const indexLastRecipe = currentPage * recipesPerPage;//9
   const indexFirstRecipe = indexLastRecipe - recipesPerPage; //0
   const currentRecipes = allRecipes.slice(indexFirstRecipe, indexLastRecipe);
   
 
   useEffect(() => {
     dispatch(getAllRecipes())
  }, [dispatch, allRecipes]);

  const handleClick = (event) => {
   event.preventDefault();
   dispatch(getAllRecipes())
  }

   return(
      <div className={style.container}>
         <button 
            onClick={(event) => { handleClick(event) } }>REFRESH
         </button>
        
         <Paginated/>        
         
         <RecipesContainer
            currentRecipes={currentRecipes}
         />
      </div>
   )

};

export default Home;

// Página de renderizado 9 recetas por página
// Se muestra las opciones de filtrado y ordenamiento
// opciones de búsqueda por nombre y por ID
// el navBar
//botón para refrescar las recetas

