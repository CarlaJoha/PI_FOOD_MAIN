import React, { useState } from 'react';
import style from './SearchBar.module.css';
import { getRecipesByName } from '../../redux/actions';
import { useDispatch } from 'react-redux';


const SearchBar = () => {

const dispatch = useDispatch();
const [ name, setName ] = useState("")



const handleInputChange = (event) => {
   event.preventDefault();
   setName(event.target.value)
   console.log(name)
}

const handleSubmit = (event) => {
   event.preventDefault();
   dispatch(getRecipesByName(name))
   setName("");
}

   return(
      <div className={style.container}>
         
         <input 
            className={style.input} 
            value={name} 
            placeholder="Search..." 
            type="search"
            onChange={(event) => handleInputChange(event)}
            />

         <button 
            className={style.button}
            type="submit"
            onClick={(event) => handleSubmit(event) } >SEARCH</button>

      </div>
   )

}

export default SearchBar;