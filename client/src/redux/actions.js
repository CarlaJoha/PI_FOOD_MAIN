import axios from "axios";
import {
  GET_ALL_RECIPES,
  GET_BY_NAME,
  GET_DETAIL,
  POST_RECIPE,
  GET_ALL_DIETS,
  PAGINATION,
  FILTER_DIETS,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_SCORE,
  CLEAR_RECIPES,
  CLEAR_DETAIL,
} from "./actions-types";

//1. TRAER ALL RECETAS DEL BACK(conectamos front y back)
export const getAllRecipes = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get("http://localhost:3001/recipes"); //http://localhost:3001/recipes
      // console.log(response?.data[0].healthScore);
      return dispatch({ type: GET_ALL_RECIPES, payload: response?.data }); //revisar esto cuando me traiga la el back
    } catch (error) {
      console.log("Error en getAllRecipes action");
    }
  };
};

//2. TRAER RECETAS POR SU NOMBRE
export const getRecipesByName = (name) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `http://localhost:3001/recipes?name=${name}`
      ); //http://localhost:3001/recipes
      let infoByName = await response.data;
      return dispatch({ type: GET_BY_NAME, payload: infoByName });
    } catch (error) {
      alert(`No recipe found with name ${name}`);
      console.log("Error en getRecipesByName action");
    }
  };
};

//3. TRAER RECETAS POR ID PARA EL DETAIL
export const getRecipesDetail = (id) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`http://localhost:3001/recipes/${id}`);
      // console.log("Esto es desde las actions", response.data);
      return dispatch({ type: GET_DETAIL, payload: response.data });
    } catch (error) {
      console.log("Error en getRecipesDetail action");
    }
  };
};

//4. POST RECETA DESDE LOS DATOS DEL PAYLOAD (FORM)
export const postRecipe = (
  name,
  healthScore,
  summary,
  instructions,
  image,
  diets
) => {
  return async (dispatch) => {
    try {
      let infoPost = await axios.post("http://localhost:3001/recipes", {
        name,
        healthScore,
        summary,
        instructions,
        image,
        diets,
      });
      console.log(dispatch);
      alert("Recipe created successfully");
      return dispatch({ type: POST_RECIPE, payload: infoPost.data });
    } catch (error) {
      alert("We couldn't create the recipe");
      console.log("Error en postRecipe action");
    }
  };
};

//5. TRAER ALL DIETS
export const getAllDiets = () => {
  return async (dispatch) => {
    try {
      let infoDiets = await axios.get("http://localhost:3001/diets");
      // console.log(infoDiets.data)
      return dispatch({ type: GET_ALL_DIETS, payload: infoDiets.data }); //QUITAR .results cuando venga de la Api
    } catch (error) {
      console.log("Error en getAllDiets action");
    }
  };
};

//6. PAGINADO
export const pagination = (payload) => {
  return { type: PAGINATION, payload };
};

//7. FILTRAR POR DIETS
export const filterDiets = (payload) => {
  return { type: FILTER_DIETS, payload };
};

//8. FILTRAR DE DONDE PROVIENE
export const filterCreated = (payload) => {
  return { type: FILTER_CREATED, payload };
};

//9. ORDENAR ASCENDENTE Y DESCENDENTE POR NAME
export const orderByName = (value) => {
  return { type: ORDER_BY_NAME, payload: value };
};

//10. ORDENAR POR HEALTHSCORE
export const orderScore = (payload) => {
  return { type: ORDER_SCORE, payload };
};

//11.LIMPIAR FILTRADOS Y ORDENAMIENTOS
export const clearRecipes = () => {
  return {
    type: CLEAR_RECIPES,
  };
};

//12. LIMPIAR DETAIL
export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
  };
};
