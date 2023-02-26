import { getRecipesDetail, clearDetail } from '../../../redux/actions';
import style from './CardDetail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
         <img 
            className={style.image} 
            src={recipe.image} 
            alt={recipe.name} />
         <h2>Diets: </h2>
         <h2>ID: {recipe.id}</h2>
         <h3>{recipe.diets}</h3>
         <h3>Health Score: {recipe.healthScore}</h3>
         <h2>Summary: </h2>
         <span>{recipe.summary}</span>
         <h2>Steps by Steps: </h2>
         <p>{recipe.instructions}</p>
      </div>
   )
 
}
export default CardDetail;
