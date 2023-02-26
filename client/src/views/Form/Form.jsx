// import validation from './validation.js';
import style from './Form.module.css';
import React from 'react';
// import { postRecipe } from '../../redux/actions';
// import { useState } from 'react';
// import { useDispatch} from 'react-redux';


const Form = () => {
  
   // const dispatch = useDispatch();

   // const [ create, setCreate ] = useState({
   //    name: "",
   //    summary: "",
   //    image: "",
   //    healtScore: 0,
   //    diets: [],
   //    instructions:{}
   // })


   return(
      <form className={style.container}>

         <label className={style.label} htmlFor="title">Title recipe:</label>
         <input 
            type="text" 
            name="title"
            autoComplete="off"
            placeholder="Recipe Title"
            className={style.inputTitle}
            maxLength={50}

         />
         <label className={style.label} htmlFor="healthscore">Health Score:</label>
         <input 
            type="number" 
            name="healthScore"
            placeholder='10'
            className={style.inputHealthscore}
         />

         <label className={style.label} htmlFor="summary">Summary:</label>
         <textarea 
            type="text" 
            name="summary"
            placeholder='Summary Recipe'
            className={style.textSummary}
            autoComplete="off"
         >
         </textarea>


         <label className={style.label} htmlFor="instructions">Step by Step:</label>
         <textarea 
            type="text" 
            name="instructions"
            className={style.textAreaInstructions}
            placeholder='Step-by-step explanation to make the recipe.'
         >
         </textarea>

         <label className={style.label} htmlFor="url">Image:</label>
         <input 
            type="url" 
            name="image"
            placeholder="image url"
            className={style.inputImage}
            autoComplete="off"
         />
         
         <label className={style.label} htmlFor="diets">Diets Types:</label>
         <input 
            type="checkbox" 
            name="diets"
            className={style.checkboxDiets}
            autoComplete="off"
         />

          <label className={style.label} htmlFor="addDiet">Add Diet:</label>
         <input 
            type="text" 
            name="addDiets"
            placeholder="added a diet"
            className={style.AddDiet}
            autoComplete="off"
         />
         
         <button className={style.button}>CREATE RECIPE</button>

      </form>
   )
}

export default Form;