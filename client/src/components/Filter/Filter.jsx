import React from "react";
import style from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  filterDiets,
  filterCreated,
  orderByName,
  getAllRecipes,
  orderScore,
} from "../../redux/actions";

function Filter() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [order, setOrder] = useState(" ");
  const [page, SetcurrentPage] = useState(1);

  useEffect(() => {
    // console.log("useEfffec", order);
    setOrder(order);
  }, [dispatch, page, order]);

  //FILTER DIETS
  const handleDietsFilter = (event) => {
    dispatch(filterDiets(event.target.value));
    SetcurrentPage(1);
  };
  //FILTER COME FROM
  const handleFilterCreated = (event) => {
    dispatch(filterCreated(event.target.value));
  };
  //ORDER ASCENDENTE y DESCENDENTE
  const handleOrderName = (event) => {
    let order = event.target.value;
    if (order === "ascendente") {
      dispatch(orderByName(order));
    }
    if (order === "descendente") {
      dispatch(orderByName(order));
    }
    if (order === "DEFAULT") {
      dispatch(getAllRecipes());
    } else {
      setOrder("");
      SetcurrentPage(1);
    }
  };
  //ORDER HEALTH
  const handleOrderScore = (event) => {
    const order = event.target.value;
    if (order === "min" || order === "max") {
      dispatch(orderScore(order));
      SetcurrentPage(1);
    } else {
      dispatch(getAllRecipes());
      SetcurrentPage(1);
    }
    setOrder("DEFAULT");
    SetcurrentPage(1);
  };
  //CLEAN
  const handleClean = () => {
    dispatch(getAllRecipes());
  };

  return (
    <div className={style.container}>
      <button
        className={style.buttonReload}
        onClick={(event) => handleClean(event)}
      >
        RELOAD
      </button>

      <select
        className={style.selectDiets}
        onChange={(event) => handleDietsFilter(event)}
      >
        Filter Diets
        <option value="all">Filter By Diets</option>
        <option value="all">AllDiets</option>
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

      <select
        className={style.selectCreate}
        onChange={(event) => handleFilterCreated(event)}
      >
        Come from
        <option value="DEFAULT">Filter By Come From</option>
        <option value="createInDb">Created</option>
        <option value="Api">From API</option>
      </select>

      <select
        className={style.selectOrderName}
        onChange={(event) => handleOrderName(event)}
      >
        Order Name
        <option value="DEFAULT">Order By Name</option>
        <option value="ascendente">Ascendent</option>
        <option value="descendente">Descendent</option>
      </select>

      <select
        className={style.selectScore}
        onChange={(event) => handleOrderScore(event)}
      >
        Order By
        <option value="DEFAULT">Order By Score</option>
        <option value="min">min Health Score</option>
        <option value="max">max Health Score</option>
      </select>
    </div>
  );
}

export default Filter;
