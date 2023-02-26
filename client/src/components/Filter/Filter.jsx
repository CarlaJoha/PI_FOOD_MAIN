import React from 'react';
import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllDiets, filterDiets } from '../../redux/actions';

const Filter = () => {

const dispatch = useDispatch();
const allDiets = useSelector((state) => state.allDiets)


useEffect(() => {
   dispatch(getAllDiets())
}, [dispatch])

const handleDietsFilter = (event) =>{
 event.preventDefault();
 dispatch(filterDiets(event.target.value))
}

return(
   <div className={style.container}>
  
      <select name="filterDiets" onChange={(event) => handleDietsFilter(event)}>Filter By Diets
         <option value='All'>AllDiets</option>
         { 
            allDiets.map((diet, index) => {
               return (
                  <option 
                     key={index} 
                     value={diet.name}>{diet.name}
                  </option>
               )
            })
         }
      </select>
      
      <select name="filterFrom">Come from
         <option value="All">All</option>
         <option value="Created">Created</option>
         <option value="Api">From API</option>
      </select>

      <select name="order">Order By
      <option value="All">All</option>
         <option value="A-Z">Ascendent</option>
         <option value="Z-A">Descendent</option>
      </select>

</div>
)

}
export default Filter;