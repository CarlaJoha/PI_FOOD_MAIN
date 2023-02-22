import React from 'react';
import styles from "./Landing.module.css";
import { Link } from 'react-router-dom';

const Landing = () =>{
   return(
      <div className={styles.container} >
         <h1 >Welcome to my food app</h1>
         <Link to='/recipes'>
            <button className={styles.button}>INGRESAR</button>
         </Link>
      </div>
   )
}
export default Landing;