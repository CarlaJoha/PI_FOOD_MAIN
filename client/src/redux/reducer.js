import { FILTER_CREATED, FILTER_DIETS, GET_ALL_DIETS, GET_ALL_RECIPES, ORDER_BY_NAME, ORDER_SCORE, PAGINATION } from "./actions-types"
import { GET_DETAIL } from "./actions-types"
import { CLEAR_RECIPES } from "./actions-types"
import { CLEAR_DETAIL } from "./actions-types"
import { POST_RECIPE } from "./actions-types"
import { GET_BY_NAME } from "./actions-types"


const initialState = {
   allRecipes : [],
   recipes: [],

   recipeDetail: {},

   allDiets:[],

   currentPage: 1,
   recipesPerPage: 9
}

const reducer = (state = initialState, action) => {//const { type, payload } = action;
   switch (action.type) {
      case GET_ALL_RECIPES:
         return{
            ...state,
            allRecipes: action.payload,//acá guardo todas las recetas de la API
            recipes: [...action.payload]
      }
      case GET_DETAIL:
         return{
            ...state,
            recipeDetail: action.payload
         }
      case POST_RECIPE:
         return{
            ...state,
            allRecipes: [...state.allRecipes, action.payload ]
         }
      case GET_ALL_DIETS:
         return{
            ...state,
            allDiets: action.payload,
      }
      case GET_BY_NAME:
         return{
            ...state,
            allRecipes: action.payload
         }

      case FILTER_DIETS:
         const cards = state.recipes;
         const filterCardsByDiets = cards.filter((recipe) => !cards.some((diet)=> !recipe.diets.includes(diet)) )
         return{
            ...state,
            allRecipes: filterCardsByDiets 
         }

      case FILTER_CREATED:
         const createdFilter = action.payload === "createdInDb"
            ? state.recipes.filter((recipe) => recipe.createdInDb)
            : state.recipes.filter((recipe) => !recipe.createdInDb)
         return{
            ...state,
            allRecipes: action.payload === 'all' 
            ? state.recipes
            : createdFilter
         }
      case ORDER_BY_NAME:
            const orderArr = action.payload === 'A-Z'
            ? state.allRecipes.sort((a, b) => {
               if(a.name < b.name){
                  return 1;
               }
               if(b.name < a.name){
                  return -1;
               } else {
                  return 0
               }
            })
               : state.allRecipes.sort((a, b) => {
               if(a.name < b.name){
                  return -1;
               }
               if(b.name < a.name){
                  return 1;
               } else {
                  return 0
               }
            })
            return{
               ...state,
               allRecipes: orderArr,
               currentPage: 1
            }
      case ORDER_SCORE:
         const orderScore = action.payload === 'max'
            ? state.allRecipes.sort((a, b) => {
               if(a.healthScore > b.healthScore){
                  return 1;
               }
               if(b.healthScore > a.healthScore){
                  return -1;
               } else {
                  return 0
               }
            })
               : state.allRecipes.sort((a, b) => {
               if(a.healthScore > b.healthScore){
                  return -1;
               }
               if(b.healthScore > a.healthScore){
                  return 1;
               } else {
                  return 0
               }
            })
         return{
            ...state,
            allRecipes: orderScore,
            currentPage: 1
         }
      case CLEAR_DETAIL:
         return{
            ...state,
            recipeDetail:[]
         }
      case CLEAR_RECIPES:
         return{
            ...state,
            allRecipes:[]
         }
      case PAGINATION:
         return {
            ...state,
            currentPage: Number(action.payload) 
            ? parseInt(action.payload) 
            : action.payload === 'next' 
            ? (parseInt(state.currentPage + 1)) 
            : (parseInt(state.currentPage -1))
         }
      default:
         return {...state}
   }
};

export default reducer;

