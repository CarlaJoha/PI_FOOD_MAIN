import React from 'react';
import styles from "./Landing.module.css";
import { Link } from 'react-router-dom';
import landing from "../../assets/landing.jpg"


const Landing = () =>{
   return(
      <div className={styles.containerLanding} >
         <div className={styles.containerImage}>
         <img className={styles.image} src={landing} alt="" />
         </div>
         <div>
         <h1 className={styles.h1}>Food Recipes App</h1>
         </div>
         <div className={styles.linkContainer}>
         <Link className={styles.button} to='/recipes'>INGRESAR</Link>
         </div>
      </div>
   )
}
export default Landing;