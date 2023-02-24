import { getRecipesDetail, clearDetail } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './CardDetail.module.css'

const CardDetail = ({ image, name, diets, summary, healtScore, instructions}) => {

   const dispatch = useDispatch();
   const { id } = useParams();
console.log(id);
   useEffect(() => {
      dispatch(getRecipesDetail(id));
      return () => dispatch(clearDetail())
   }, [dispatch, id])

   const recipe = useSelector((state) => state.recipeDetail)
console.log(recipe);
   return(
      
      <div className={style.container}>
      <h1>CardDetail</h1>
         <h2 className={style.name}>{recipe.name}</h2>
         <img className={style.image} src={recipe.image} alt={recipe.name} />
         <h3>{recipe.diets}</h3>
         <span>{recipe.summary}</span>
         <p>{recipe.instructions}</p>
       
           
     
   </div>
   )
 
}
export default CardDetail;


/*  { recipe.map((element) =>{
              return(
              
                  key={element?.id}
                  id={element?.id}
                  image={element?.image}
                  name={element?.title}//cambiar a name
                  diets={element?.diets}
                  summary={element.summary}
                  instructions={element.analyzedInstructions.map((obj) => obj.steps)}
              
              );
         })}; 

FUNCIONA
   const dispatch = useDispatch();
   const { id } = useParams();
console.log(id);
   useEffect(() => {
      dispatch(getRecipesDetail(id));
      return () => dispatch(clearDetail())
   }, [dispatch, id])

   const recipe = useSelector((state) => state.recipeDetail)
console.log(recipe);
   return(
      <div className={style.container}>
         <h1 className={style.title}>Componente CardDetail</h1>
      
         <Fragment key={id}>
         <div>
            <img src={recipe.image} alt={recipe.title} />
         </div>
         <div>
            <h1>{recipe.title}</h1>
         </div>
         <div>
            <p>{recipe.summary}</p>
         </div>
            <p>{recipe.analyzedInstructions}</p>
         <div>

         </div>
         </Fragment>
   
      </div>
   )
         
         
         
   
         
         
         
         */