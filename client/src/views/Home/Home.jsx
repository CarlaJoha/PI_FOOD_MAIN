import React from 'react';
import style from './Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllRecipes } from '../../redux/actions';
import  RecipesContainer  from '../../components/RecipesContainer/RecipesContainer';
import Paginated from '../../components/Paginated/Paginated';


const Home = () => {
   
   const dispatch = useDispatch();

   const allRecipes = useSelector( (state) => state.allRecipes );
   const recipesPerPage = useSelector( (state) => state.recipesPerPage );
  console.log(allRecipes);
   const [ currentPage, setCurrentPage ] = useState();
   
   useEffect(() => {
     dispatch(getAllRecipes())
  }, [dispatch]);

 //PAGINADO:
 const lastRecipeIndex = currentPage * recipesPerPage;
 const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
 const currentRecipe = allRecipes.slice(firstRecipeIndex, lastRecipeIndex)

   return(
      <div className={style.container}>
         <h1>Componente: HOME</h1>
            <RecipesContainer 
               allRecipes={currentRecipe} 
            /> 
            <Paginated 
               totalRecipes={allRecipes.length} 
               recipesPerPage={recipesPerPage}
               setCurrentPage={setCurrentPage}
               currentPage={currentPage}
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

