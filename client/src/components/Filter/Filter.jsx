import React from 'react';
import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllDiets, 
         filterDiets, 
         filterCreated, 
         orderByName, 
         clearRecipes, 
         getAllRecipes, 
         orderScore} from '../../redux/actions';

function Filter() {

   const dispatch = useDispatch();
   const allDiets = useSelector((state) => state.allDiets)
   const currentPage = useSelector( (state) => state.currentPage  )

   // eslint-disable-next-line no-unused-vars
   const [ order, setOrder ] = useState('');

   //FILTER
   const handleDietsFilter = (event) => {
      event.preventDefault();
      dispatch(filterDiets(event.target.value))
   }

   const handleFilterCreated = (event) => {
      event.preventDefault();
      dispatch(filterCreated(event.target.value))
   }
   //ORDER
   const handleOrderName = (event) => {
      event.preventDefault();
      dispatch(orderByName(event.target.value))
      currentPage(1)
      setOrder(event.target.value)
   }

   const handleOrderScore = (event) => {
      event.preventDefault();
      dispatch(orderScore(event.target.value))
      setOrder(event.target.value)
   }
   //CLEAN
   const handleClean = (event) => {
      event.preventDefault();
      dispatch(clearRecipes());
      dispatch(getAllRecipes())
   }

   useEffect(() => {
      dispatch(getAllDiets())
   }, [dispatch])


   return(
      <div className={style.container}>
         <button 
            onClick={(event) => handleClean(event)}
         >Clear
         </button>
   
         <select onChange={(event) => handleDietsFilter(event)}>Filter By Diets
            <option value='all'>AllDiets</option>
            { 
               allDiets.map((diet) => {
                  return (
                     <option 
                        key={diet.id} 
                        id={diet.id}
                        value={diet.name}>
                           {diet.name}
                     </option>
                  )
               })
            }
         </select>
         
         <select onChange={(event) => handleFilterCreated(event) }>Come from
            <option value="all">All</option>
            <option value="createInDb">Created</option>
            <option value="Api">From API</option>
         </select>

         <select onChange={(event) => handleOrderName(event) }>Order By
             <option value="all">All</option>
            <option value="A-Z">Ascendent</option>
            <option value="Z-A">Descendent</option>
         </select>

         <select onChange={(event) => handleOrderScore(event) }>Order By
            <option value="all">All</option>
            <option value="min">min Health Score</option>
            <option value="max">max Health Score</option>
         </select>
   </div>
   )

};

export default Filter;