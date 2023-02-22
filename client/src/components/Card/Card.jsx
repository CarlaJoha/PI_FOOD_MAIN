import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ image, name, diets }) => {

   return(
      <div>
         <img src={image} alt={name} />
         <h2>{name}</h2>
         <Link to='/detail'>Ver más</Link>
      </div>
   )

}

export default Card;