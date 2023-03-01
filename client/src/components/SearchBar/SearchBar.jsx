import React, { useState } from 'react';
import style from './SearchBar.module.css';
import { getRecipesByName } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


const SearchBar = () => {

const dispatch = useDispatch();
const [ name, setName ] = useState("")
const currentPage = useSelector((state) => state.currentPage)


const handleInputChange = (event) => {
   event.preventDefault();
   setName(event.target.value)
   console.log(name)
}

const handleSubmit = (event) => {
   event.preventDefault();
   dispatch(getRecipesByName(name))
   setName("");
   dispatch(currentPage)
   
}

   return(
      <div className={style.container}>
         <span className={style.icon} ><i className={style.icon} ></i></span>
         <button 
            className={style.button}
            type="submit"
            onClick={(event) => handleSubmit(event) } >SEARCH</button>
         
         <input 
            className={style.input} 
            value={name} 
            placeholder="Search..." 
            type="search"
            onChange={(event) => handleInputChange(event)}
            />
        

      </div>
   )

}

export default SearchBar;