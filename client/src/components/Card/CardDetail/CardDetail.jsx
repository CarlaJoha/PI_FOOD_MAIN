import { getRecipesDetail, clearDetail } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CardDetail = () => {

const dispatch = useDispatch();
const { id } = useParams();
const recipe = useSelector((state) => state.recipeDetail)
console.log(recipe);
const recipeId = recipe.map((obj) => obj === obj.id)
console.log(recipeId);

useEffect(() => {
   dispatch(getRecipesDetail(id));
   dispatch(clearDetail())
}, [dispatch, id])


   return(
      <div>
      
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
         })}; */