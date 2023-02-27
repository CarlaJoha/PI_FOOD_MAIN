import React from 'react';
import style from './Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {  getAllRecipes } from '../../redux/actions';
import  RecipesContainer  from '../../components/RecipesContainer/RecipesContainer';
import Paginated from '../../components/Paginated/Paginated'
import Filter from '../../components/Filter/Filter'

const Home = () => {
   
   const dispatch = useDispatch();

   const allRecipes = useSelector( (state) => state.allRecipes );
   // eslint-disable-next-line no-unused-vars
   const [ order, setOrder ] = useState('');

   const recipesPerPage = useSelector( (state) => state.recipesPerPage )
   const currentPage = useSelector( (state) => state.currentPage  )
 
   const indexLastRecipe = currentPage * recipesPerPage;//9
   const indexFirstRecipe = indexLastRecipe - recipesPerPage; //0
   const currentRecipes = allRecipes.slice(indexFirstRecipe, indexLastRecipe);


 
   useEffect(() => {
     dispatch(getAllRecipes())
  }, [dispatch]);



  const handleClick = (event) => {
   event.preventDefault();
   dispatch(getAllRecipes())
  }

   return(
      <div className={style.container}>
         
         <button className={style.buttonRefresh}            
            onClick={(event) =>  handleClick(event)  }>REFRESH
         </button>

         <Filter setOrder={setOrder} />

         <Paginated/>        

         <RecipesContainer currentRecipes={currentRecipes} />

      </div>
   )

};

export default Home;

// Página de renderizado 9 recetas por página
// Se muestra las opciones de filtrado y ordenamiento
// opciones de búsqueda por nombre y por ID
// el navBar
//botón para refrescar las recetas

