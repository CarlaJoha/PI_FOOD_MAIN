// import style from './Detail.module.css';
import CardDetail from '../../components/Card/CardDetail/CardDetail';
import style from './Detail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearDetail, getRecipesDetail } from '../../redux/actions';
import { useParams, Link } from 'react-router-dom';



const Detail = () => {

   const dispatch = useDispatch();

   const { id } = useParams();
   const recipeDetail = useSelector((state) => state.recipeDetail)
 

   console.log(recipeDetail);
   useEffect(() => {
     dispatch(getRecipesDetail(id));
     dispatch(clearDetail())
  
   }, [dispatch, id]);

   return(
      <div className={style.container}>
         <Link to="/recipes" >{"<< "}BACK
         </Link>
         <CardDetail />
      </div>
   )
}

export default Detail;