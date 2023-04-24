// import validation from './validation.js';
import style from './Form.module.css';
import React from 'react';
import { getAllDiets, postRecipe } from '../../redux/actions';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import validation from './validation';
import { Link } from 'react-router-dom';

const Form = () => {
  
   const dispatch = useDispatch();
   const history = useHistory();
   const allDiets = useSelector((state) => state.allDiets)
   // const allRecipes = useSelector((state) => state.allRecipes)
  
   //LOCAL STATE del Form
   const [ input, setInput ] = useState({
      name: "",
      healthScore: 0,
      summary: "",
      instructions:[],  
      image: "",
      diets: [],
   })
   console.log(input)

   //Errors State
   const [ errors, setErrors ] = useState({
      name: "",
      healthScore: 0,
      summary: "",
      instructions: "",
      image: "",
      diets: [],
   })

   
   const handleChange = (event) => {//escucha los cambios del los inputs
      setInput({ ...input, [event.target.name] : event.target.value })
      setErrors(validation({
         ...input,
         [event.target.name] : event.target.value//modifico el state errors
     })
     )
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

   const handleSubmit = async (event) => {
      event.preventDefault();
      // console.log(input);
       setInput({
         name: "",
         summary: "",
         healthScore: 0,
         instructions: [],
         image: "",
         diets: [],
      })
      
      dispatch(postRecipe(
         input.name, 
         input.healthScore, 
         input.summary, 
         [input.instructions],
         input.image, 
         input.diets
      ))
     
      history.push('/recipes')
   };

   useEffect(() => {
      dispatch(getAllDiets())
   }, [dispatch])
   
   
   return(
      <div>
      <form className={style.container} onSubmit={(event) => handleSubmit(event)}  name="form" >
      <h1 className={style.h1}>CREATE YOUR RECIPE</h1>
      <button >
            <Link to='/recipes'>BACK</Link>
            </button>

         <label className={style.label} >Title recipe:</label>
         <input 
            onChange={handleChange}
            type="text" 
            name="name"
            value={input.name}
            autoComplete="on"
            placeholder="Recipe Title"
            className={style.inputTitle}
            />
            { errors.name && <p className={style.errors}>{errors.name}</p> }

         <label className={style.label} >Health Score:</label>
         <input 
            onChange={handleChange}
            type="range" 
            name="healthScore"
            value={input.healthScore}
            placeholder='100'
            min="0"
            max="100"
            autoComplete="off"
            className={style.inputHealthscore}/>
            { errors.healthScore && <p className={style.errors}>{errors.healthScore}</p> }

         <label className={style.label} >Summary:</label>
         <textarea 
            onChange={handleChange}
            name="summary"
            value={input.summary}
            placeholder='Summary Recipe'
            className={style.textSummary}
            autoComplete="off">
         </textarea>
            { errors.summary && <p className={style.errors}>{errors.summary}</p> }


         <label className={style.label} >Step by Step:</label>
         <textarea 
            onChange={handleChange}
            name="instructions"
            value={input.instructions}
            className={style.textAreaInstructions}
            placeholder='Step-by-step explanation to make the recipe.'
            autoComplete="off"
         >
         </textarea>

         <label className={style.label} htmlFor="image">Image:</label>
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
            <div>
                {
                    allDiets.map((diet) => (
                        <label  key={diet.id} className={style.inputCheckbox} >
                            <input
                                onChange={(e) => handleCheckBox(e) } 
                                key={diet.id}
                                name="diet"
                                type="checkbox"
                                value={diet.name} />{diet.name + ""}
                        </label>))
                }
                { errors.diets && <p className={style.errors}>{errors.diets}</p> }
            </div>

         {/* <label className={style.label} htmlFor="addDiet">Add Diet:</label>
         <input 
            type="text" 
            name="addDiets"
            placeholder="added a diet"
            className={style.AddDiet}
            autoComplete="off"
         /> */}
         
         <button className={style.button} >CREATE RECIPE</button>
         { errors.form && <p className={style.errors}>{errors.form}</p> }
      </form>
      </div>
   )
}

export default Form;