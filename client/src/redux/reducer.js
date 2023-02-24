import { GET_ALL_RECIPES } from "./actions-types"
import { GET_DETAIL } from "./actions-types"
import { CLEAR_RECIPES } from "./actions-types"
import { CLEAR_DETAIL } from "./actions-types"
import { POST_RECIPE } from "./actions-types"
// import { GET_BY_NAME } from "./actions-types"
// import { GET_ALL_DIETS } from "./actions-types"
// import { PAGINATED } from "./actions-types"
// import { FILTER_DIETS } from "./actions-types"
// import { ORDER_BY_NAME } from "./actions-types"
// import { ORDER_SCORE } from "./actions-types"

const initialState = {
   allRecipes : [],
   recipeDetail: {}
}

const reducer = (state = initialState, action) => {//const { type, payload } = action;
   switch (action.type) {
      case GET_ALL_RECIPES:
         return{
            ...state,
            allRecipes: action.payload,//acá guardo todas las recetas de la API
      }
      case GET_DETAIL:
         return{
            ...state,
            recipeDetail: action.payload
         }
      case POST_RECIPE:
         return{
            ...state,
            allRecipes: [...state.allRecipes, action.payload]
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
      default:
         return {...state}
   }
};

export default reducer;

