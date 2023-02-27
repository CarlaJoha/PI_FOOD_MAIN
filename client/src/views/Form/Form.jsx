// import validation from './validation.js';
import style from './Form.module.css';
import React from 'react';
import { getAllDiets, postRecipe } from '../../redux/actions';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import validation from './validation';



const Form = () => {
  
   const dispatch = useDispatch();
   const history = useHistory();
   const allDiets = useSelector((state) => state.allDiets)
  

   const [ errors, setErrors ] = useState()

   
   //LOCAL STATE del Form
   const [ input, setInput ] = useState({
      name: "",
      summary: "",
      image: "",
      healthScore: "",
      diets: [],
      instructions: [],
      createInDb: true
   })
   
   const handleChange = (event) => {//escucha los cambios del los inputs
      setInput({ ...input, [event.target.name] : event.targe.value })
      setErrors(validation({
         ...input,
         [event.target.name] : event.targe.value
      }))
   }

   const handleCheckBox = (event) => {
      if(event.target.checked){
         setInput({
            ...input,
            diets : [...input.diets, event.target.value]
         })
      } else {
         setInput({
            ...input,
            diets: [...input.diets]
      })}
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(input)
      dispatch(postRecipe(input))
      alert("Recipe created successfully")
      setInput({
         name: "",
         summary: "",
         image: "",
         healthScore: "",
         diets: [],
         instructions: [],
         createInDb: true
      })

      history.push('/recipes')
   };

   useEffect(() => {
      dispatch(getAllDiets())
   }, [dispatch])
   
   
   return(
      <form className={style.container}>

         <label className={style.label} >Title recipe:</label>
         <input 
            onChange={handleChange}
            type="text" 
            name="name"
            value={input.name}
            autoComplete="off"
            placeholder="Recipe Title"
            className={style.inputTitle}
            />
            {/* { errors.name && <p>{errors.name}</p> } */}

         <label className={style.label} >Health Score:</label>
         <input 
            onChange={handleChange}
            type="number" 
            name="healthScore"
            value={input.healthScore}
            placeholder='10'
            className={style.inputHealthscore}/>
            {errors.healthScore && <p>{errors.healthScore}</p>}

         <label className={style.label} htmlFor="summary">Summary:</label>
         <textarea 
            onChange={handleChange}
            type="text" 
            name="summary"
            value={input.summary}
            placeholder='Summary Recipe'
            className={style.textSummary}
            autoComplete="off"
         >
         </textarea>


         <label className={style.label} >Step by Step:</label>
         <textarea 
            onChange={handleChange}
            type="text" 
            name="instructions"
            value={input.instructions}
            className={style.textAreaInstructions}
            placeholder='Step-by-step explanation to make the recipe.'
         >
         </textarea>

         <label className={style.label} >Image:</label>
         <input 
            onChange={handleChange}
            type="url" 
            name="image"
            value={input.image}
            placeholder="image url"
            className={style.inputImage}
            autoComplete="off"
         />
         
        
         <label className={style.label} >Diet Select: </label>
                {
                    allDiets.map((diet) => (
                        <label  key={diet.id} >
                            <input className={style.checkbox} 
                                onChange={(e) => handleCheckBox(e) } 
                              //   checked={diets.includes(diet.name)}
                                key={diet.id}
                                type="checkbox"
                                value={diet.name} />{diet.name}
                        </label>))
                }
        

         {/* <label className={style.label} htmlFor="addDiet">Add Diet:</label>
         <input 
            type="text" 
            name="addDiets"
            placeholder="added a diet"
            className={style.AddDiet}
            autoComplete="off"
         /> */}
         
         <button className={style.button} onClick={handleSubmit} >CREATE RECIPE</button>

      </form>
   )
}

export default Form;