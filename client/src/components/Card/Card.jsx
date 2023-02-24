import React from 'react';
import style from './Card.module.css'
import { Link } from 'react-router-dom';


const Card = ({ image, name, diets, id}) => {

   return(
      <div className={style.container}>
         <div>
            <img className={style.image} src={image} alt={name} />
         </div>
         <div className={style.informationCard}>
            <h2 className={style.name}>{name}</h2>
            <h3>{diets}</h3>
            <div>
               <Link to={`/detail/${id}`}>Ver más</Link>
            </div>
         </div>
      </div>
   )

}

export default Card;

/* 
FUNCIONA
return(
      <div className={style.container}>
         <div>
            <img className={style.image} src={image} alt={name} />
         </div>
         <div className={style.informationCard}>
            <h2 className={style.name}>{name}</h2>
            <h3>{diets}</h3>
            <div>
               <Link to={`/detail/${id}`}>Ver más</Link>
            </div>
         </div>
      </div>
   )
*/