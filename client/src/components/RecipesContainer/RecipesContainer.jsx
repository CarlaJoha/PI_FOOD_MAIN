import React from 'react';
import Card from '../Card/Card';
import style from './RecipesContainer.module.css';


const RecipesContainer = ({ currentRecipes }) => {
   
   return(
      <div className={style.container}>
         { currentRecipes.map((element) =>{
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