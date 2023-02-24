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

         <label htmlFor="title">Title recipe:</label>
         <input 
            type="text" 
            name="title"
            autoComplete="off"
            placeholder="Recipe Title"
            className={style.title}
            maxLength={50}

         />

         <label htmlFor="summary">Summary:</label>
         <textarea 
            type="text" 
            name="summary"
            placeholder='Summary Recipe'
            className={style.summary}
            autoComplete="off"
         >
         </textarea>

         <label htmlFor="healthscore">Health Score:</label>
         <input 
            type="number" 
            name="healthScore"
            placeholder='10'
            className={style.healthScore}
         />

         <label htmlFor="instructions">Step by Step:</label>
         <textarea 
            type="text" 
            name="instructions"
            className={style.summary}
            placeholder='Step-by-step explanation to make the recipe.'
         >
         </textarea>

         <label htmlFor="url">Image:</label>
         <input 
            type="url" 
            name="image"
            placeholder="image url"
            className={style.image}
            autoComplete="off"
         />
         
         <label htmlFor="diets">Diets Types:</label>
         <input 
            type="checkbox" 
            name="image"
            className={style.image}
            autoComplete="off"
         />
         <button>CREAR RECETA</button>

      </form>
   )
}

export default Form;