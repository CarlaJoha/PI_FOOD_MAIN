import React from 'react';
import style from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterDiets, 
         filterCreated, 
         orderByName, 
         getAllRecipes, 
         orderScore,
         } from '../../redux/actions';

function Filter() {

   const dispatch = useDispatch();
   // eslint-disable-next-line no-unused-vars
   const [ order, setOrder ] = useState(' ');
   const [ page, SetcurrentPage ] = useState(1)
   
   useEffect(() => {
      dispatch(getAllRecipes())
   }, [dispatch, page])
  

   //FILTER DIETS
   const handleDietsFilter = (event) => {
      // console.log(event.target.value);
      dispatch(filterDiets(event.target.value))
      SetcurrentPage(1)
   }
   //FILTER COME FROM
   const handleFilterCreated = (event) => {
      dispatch(filterCreated(event.target.value))
   }

   //ORDER ASCENDENTE y DESCENDENTE
   const handleOrderName = (event) => {
      dispatch(orderByName(event.target.value))
      setOrder(`Ordenado ${event.target.value}`)
      SetcurrentPage(1)
   }
   //ORDER HEALTH
   const handleOrderScore = (event) => {
      dispatch(orderScore(event.target.value))
      setOrder(`Ordenado ${event.target.value}`)
   }
   //CLEAN
   const handleClean = () => {
      // dispatch(clearRecipes(event.target.value));
      dispatch(getAllRecipes())
   }



   return(
      <div className={style.container}>
         <button 
            onClick={(event) => handleClean(event)}>RELOAD
         </button>
   
         <select onChange={(event) => handleDietsFilter(event)}>Filter By Diets
            <option value='DEFAULT'>Filter By Diets</option>
            <option value='all'>AllDiets</option>
            <option value="vegan">Vegan</option>
            <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
            <option value="gluten free">Gluten Free</option>
            <option value="primal">Primal</option>
            <option value="pescatarian">Pescetarian</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="dairy free">Dairy free</option>
            <option value="fodmap friendly">Fodmap friendly</option>
            <option value="paleolithic">Paleolithic</option>
            <option value="whole 30">Whole 30</option>
         </select>
         
         <select onChange={(event) => handleFilterCreated(event) }>Come from
            <option value="DEFAULT">Filter By Come From</option>
            <option value="createInDb">Created</option>
            <option value="Api">From API</option>
         </select>

         <select onChange={(event) => handleOrderName(event) }>Order By
            <option value="DEFAULT">Order By Name</option>
            <option value="ascendente">Ascendent</option>
            <option value="descendente">Descendent</option>
         </select>

         <select onChange={(event) => handleOrderScore(event) }>Order By
            <option value="DEFAULT">Order By Score</option>
            <option value="min">min Health Score</option>
            <option value="max">max Health Score</option>
         </select>
   </div>
   )

};

export default Filter;