import axios from 'axios';
import { CLEAR_DETAIL, GET_ALL_RECIPES, PAGINATION } from "./actions-types"
import { CLEAR_RECIPES } from "./actions-types"
import { GET_DETAIL } from "./actions-types"
import { POST_RECIPE } from "./actions-types"
import { GET_ALL_DIETS } from "./actions-types"
import { GET_BY_NAME } from "./actions-types"
import { FILTER_DIETS } from "./actions-types"
import { ORDER_BY_NAME } from "./actions-types"
import { ORDER_SCORE } from "./actions-types"



//1. TRAER ALL RECETAS DEL BACK(conectamos front y back)
export const getAllRecipes = () => {
   return async (dispatch) => {
      try{
      let response = await axios.get('http://localhost:3001/recipes')//http://localhost:3001/recipes  response.data
      return dispatch({ type: GET_ALL_RECIPES, payload: response.data })//revisar esto cuando me traiga la el back
      } catch(error){
         console.log("Error en getAllRecipes action")
      }
   }
}

//2. TRAER RECETAS POR SU NOMBRE
export const getRecipesByName = (name) => {
   return async (dispatch) => {
      try{
      let response = await axios.get(`http://localhost:3001/recipes?name=${name}`)//http://localhost:3001/recipes  response.data
      return dispatch({ type: GET_BY_NAME, payload: response.data })//revisar esto cuando me traiga la el back
      } catch(error){
         console.log("Error en getRecipesByName action")
      }
   }

}

//3. TRAER RECETAS POR ID PARA EL DETAIL
export const getRecipesDetail = (id) => {
   return async (dispatch) => {
      try{
      let response = await axios.get(`http://localhost:3001/recipes/${id}`)// /recipes/${id}   
      return dispatch({ type: GET_DETAIL, payload: response.data })//QUITAR .results cuando venga de la Api
      } catch(error){
         console.log("Error en getRecipesDetail action")
      }
   }
}

//4. POST RECETA DESDE LOS DATOS DEL PAYLOAD (FORM)
export const postRecipe = (payload ) => {
   return async (dispatch) => {
   try{
      let infoPost = await axios.post('http://localhost:3001/recipes', payload)
      return dispatch({ type: POST_RECIPE, payload: infoPost.data })//QUITAR .results cuando venga de la Api
   } catch(error){
      console.log("Error en postRecipe action")
   }
   }
}

//5. TRAER ALL DIETS
export const getAllDiets = () => {
   return async (dispatch) => {
      try{
         let infoDiets = await axios.get('http://localhost:3001/diets')
         return dispatch({ type: GET_ALL_DIETS, payload: infoDiets.data })//QUITAR .results cuando venga de la Api
      } catch(error){
         console.log("Error en getAllDiets action")
      }
      }
}

//6. PAGINADO
export const pagination = (payload) => {
   return { type: PAGINATION, payload }
}

//7. FILTRAR POR DIETS
export const filterDiets = (payload) => {
   return { type: FILTER_DIETS, payload }
}

//8. ORDENAR POR NAME
export const orderName = (payload) => {
   return { type: ORDER_BY_NAME, payload }
}

//9. ORDENAR POR HEALTHSCORE
export const orderHealthScore = (payload) => {
   return { type: ORDER_SCORE, payload }
}

//10.LIMPIAR FILTRADOS Y ORDENAMIENTOS
export const clearRecipes = () => {
   return {
      type: CLEAR_RECIPES
   }
}

//11. LIMPIAR DETAIL
export const clearDetail = (payload) => {
   return {
      type: CLEAR_DETAIL
   }
};