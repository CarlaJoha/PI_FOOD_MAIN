import { getRecipesDetail, clearDetail } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './CardDetail.module.css'

const CardDetail = () => {

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
         <h1 className={style.title}>{recipe.name}</h1>
         <img className={style.image} src={recipe.image} alt={recipe.name} />
         <h2>Diets: </h2>
         <h3>{recipe.diets}</h3>
         <h2>Summary: </h2>
         <span>{recipe.summary}</span>
         <h2>Steps by Steps: </h2>
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