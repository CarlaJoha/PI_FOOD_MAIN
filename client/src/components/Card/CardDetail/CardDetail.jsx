import React from "react";
import style from "./CardDetail.module.css";

const CardDetail = ({
  id,
  name,
  healthScore,
  diets,
  summary,
  instructions,
  image,
}) => {

  return (
    <div className={style.totalContainer}>
      <div className={style.containerImage}>
        <h1 className={style.title}>{name}</h1>
        <img className={style.image} src={image} alt={name} />
      </div>
      <div className={style.textContainer}>
        <h2 className={style.h2}>ID: {id}</h2>
        <h2 className={style.h2}>Health Score: {healthScore}</h2>
        <h2 className={style.h2}>Diets:</h2>
        <p className={style.p}>{diets}</p>
        <h2 className={style.h2}>Summary: </h2>
        <p className={style.p} dangerouslySetInnerHTML={{ __html: summary }} />
        <h2 className={style.h2}>Steps by Steps: </h2>
        <p className={style.p}>{instructions}</p>
      </div>
    </div>
  );
};
export default CardDetail;
