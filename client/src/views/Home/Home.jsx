import React, { Fragment } from "react";
import style from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllRecipes } from "../../redux/actions";
import RecipesContainer from "../../components/RecipesContainer/RecipesContainer";
import Paginated from "../../components/Paginated/Paginated";
import Filter from "../../components/Filter/Filter";
import PulseLoader from "react-spinners/PulseLoader";

const Home = () => {
  const dispatch = useDispatch();

  const allRecipes = useSelector((state) => state.allRecipes);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  const recipesPerPage = useSelector((state) => state.recipesPerPage);
  const currentPage = useSelector((state) => state.currentPage);

  const indexLastRecipe = currentPage * recipesPerPage; //9
  const indexFirstRecipe = indexLastRecipe - recipesPerPage; //0
  const currentRecipes = allRecipes.slice(indexFirstRecipe, indexLastRecipe);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <Fragment>
      <div className={style.containerHome}>
        <NavBar />
        <Filter />
        {loading ? (
          <PulseLoader
            className={style.spinnerLoader}
            color={"#b90000"}
            loading={loading}
            size={30}
            speedMultiplier={1}
          />
        ) : (
          <>
            <Paginated />
            <RecipesContainer currentRecipes={currentRecipes} />
            <Paginated />
          </>
        )}
      </div>
    </Fragment>
  );
};
export default Home;

// Página de renderizado 9 recetas por página
// Se muestra las opciones de filtrado y ordenamiento
// opciones de búsqueda por nombre y por ID
// el navBar
//botón para refrescar las recetas
