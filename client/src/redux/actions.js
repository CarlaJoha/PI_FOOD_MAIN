import axios from 'axios';
import { GET_ALL_RECIPES } from "./actions-types"
// import { GET_BY_NAME } from "./actions-types"
// import { GET_DETAIL } from "./actions-types"
// import { POST_RECIPE } from "./actions-types"
// import { GET_ALL_DIETS } from "./actions-types"
// import { PAGINATED } from "./actions-types"
// import { FILTER_DIETS } from "./actions-types"
// import { ORDER_BY_NAME } from "./actions-types"
// import { ORDER_SCORE } from "./actions-types"
// import { CLEAR_RECIPES } from "./actions-types"
// import { CLEAR_DETAIL } from "./actions-types"


//1. TRAER ALL RECETAS DEL BACK(conectamos front y back)
export const getAllRecipes = () => {
   return async (dispatch) => {
      let infoJson = await axios.get('/recipes')
      return dispatch({ type: GET_ALL_RECIPES, payload: infoJson.data })
   }
}

//2. TRAER RECETAS POR SU NOMBRE
export const getRecipesByName = () => {

}

//3. TRAER RECETAS POR ID PARA EL DETAIL
export const getRecipesDetail = () => {

}

//4. POST RECETA DESDE LOS DATOS DEL PAYLOAD
export const postRecipe = () => {

}

//5. TRAER ALL DIETS
export const getAllDiets = () => {

}

//6. PAGINADO
export const paginated = () => {

}

//7. FILTRAR POR DIETS
export const filterDiets = () => {

}

//8. ORDENAR POR NAME
export const orderName = () => {

}

//9. ORDENAR POR HEALTHSCORE
export const orderHealthScore = () => {

}

//10.LIMPIAR FILTRADOS Y ORDENAMIENTOS
export const clearRecipes = () => {

}

//11. LIMPIAR DETAIL
export const clearDetail = () => {

}