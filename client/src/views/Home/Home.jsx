import React from 'react';
import style from './Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllRecipes } from '../../redux/actions';

const Home = () => {

   const dispatch = useDispatch();
   const recipes = useSelector((state) => state.allRecipes )
   
   useEffect(() => {
      dispatch(getAllRecipes())
   }, [dispatch, recipes])

   return(
      <div className={style.container}>
         <h1>HOME</h1>
      </div>
   )

};

export default Home;

// Página de renderizado 9 recetas por página
// Se muestra las opciones de filtrado y ordenamiento
// opciones de búsqueda por nombre y por ID
// el navBar
//botón para refrescar las recetas

