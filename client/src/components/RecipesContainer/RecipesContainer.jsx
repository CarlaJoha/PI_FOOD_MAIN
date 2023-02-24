import React from 'react';
import Card from '../Card/Card';
import style from './RecipesContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllRecipes } from '../../redux/actions';

const RecipesContainer = () => {
   
   const dispatch = useDispatch();
   const recipes = useSelector((state) => state.allRecipes)
  
   useEffect(()=>{
      dispatch(getAllRecipes()) 
      // return () => dispatch(clearRecipes())  
   }, [dispatch])


   return(
      <div className={style.container}>
         { recipes.map((element) =>{
              return(
               <Card
                  key={element?.id}
                  id={element?.id}
                  image={element?.image}
                  name={element?.name}//cambiar a name
                  diets={element?.diets}
               />
              );
         })};
      </div>
   )
}

export default RecipesContainer;