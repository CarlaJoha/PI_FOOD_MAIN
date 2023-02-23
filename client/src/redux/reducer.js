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
            recipeDetail: action.payload
         }
     
      default:
         return {...state}
   }
};

export default reducer;

