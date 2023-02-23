import axios from 'axios';
import { CLEAR_DETAIL, GET_ALL_RECIPES } from "./actions-types"
// import { GET_BY_NAME } from "./actions-types"
import { GET_DETAIL } from "./actions-types"
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
      let response = await axios.get('https://run.mocky.io/v3/0fc37af7-8b1a-482e-94af-0bf78c3bca8b')//'http://localhost:3001/recipes'
      return dispatch({ type: GET_ALL_RECIPES, payload: response.data.results })//revisar esto cuando me traiga la el back
   }
}

//2. TRAER RECETAS POR SU NOMBRE
export const getRecipesByName = (name) => {

}

//3. TRAER RECETAS POR ID PARA EL DETAIL
export const getRecipesDetail = (id) => {
   return async (dispatch) => {
      let response = await axios.get(`https://run.mocky.io/v3/0fc37af7-8b1a-482e-94af-0bf78c3bca8b/${id}`)///detail/${id}   
      return dispatch({ type: GET_DETAIL, payload: response.data.results })
   }
}

//4. POST RECETA DESDE LOS DATOS DEL PAYLOAD
export const postRecipe = () => {

}

//5. TRAER ALL DIETS
export const getAllDiets = () => {
   
}

//6. PAGINADO
export const pagination = (payload) => {
   
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
export const clearDetail = (payload) => {
   return {
      type: CLEAR_DETAIL,
      payload
   }
};