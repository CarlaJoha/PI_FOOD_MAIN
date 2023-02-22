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
   recipe: []
}

const reducer = (state = initialState, action) => {//const { type, payload } = action;
   switch (action.type) {
      case GET_ALL_RECIPES:
         return{
            ...state,
            allRecipes: action.payload,//a mi estado allRecipes todo lo que mande la action de allRecipes
            recipe: action.payload
         }
     
      default:
         return {...state}
   }
};

export default reducer;

