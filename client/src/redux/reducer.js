import {
  FILTER_CREATED,
  FILTER_DIETS,
  GET_ALL_DIETS,
  GET_ALL_RECIPES,
  ORDER_BY_NAME,
  ORDER_SCORE,
  PAGINATION,
  GET_DETAIL,
  POST_RECIPE,
  GET_BY_NAME,
  CLEAR_RECIPES,
  CLEAR_DETAIL,
} from "./actions-types";

const initialState = {
  allRecipes: [],
  recipes: [],

  recipeDetail: [],

  allDiets: [],

  currentPage: 1,
  recipesPerPage: 9,
};

const reducer = (state = initialState, action) => {
  //const { type, payload } = action;
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: action.payload, //acá guardo todas las recetas de la API
        recipes: [...action.payload],
      };
    case GET_DETAIL:
      return {
        ...state,
        recipeDetail: action.payload,
      };
    case POST_RECIPE:
      return {
        ...state,
        allRecipes: [...state.allRecipes, action.payload],
      };
    case GET_ALL_DIETS:
      return {
        ...state,
        allDiets: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        allRecipes: action.payload,
        currentPage: 1,
      };

    case FILTER_DIETS:
      const recipes = state.recipes;
      if (action.payload === "all") {
        const allDiets = recipes;
        return {
          ...state,
          allRecipes: allDiets,
        };
      } else {
        const filterCardsByDiets = recipes.filter((recipe) =>
          recipe.diets?.some(
            (diet) => diet.toLowerCase() === action.payload.toLowerCase()
          )
        );
        return {
          ...state,
          allRecipes: filterCardsByDiets,
          currentPage: 1,
        };
      }

    case FILTER_CREATED:
      const recipesCopy = state.recipes;
      const createdFilter =
        action.payload === "createInDb"
          ? recipesCopy.filter((recipe) => recipe.createdInDb)
          : recipesCopy.filter((recipe) => !recipe.createdInDb);
      return {
        ...state,
        allRecipes: createdFilter,
      };

    case ORDER_BY_NAME:
      const recipesOrder = state.recipes;
      if (action.payload === "descendente") {
        recipesOrder.sort((a, b) => {
          if (b.name.toLowerCase() < a.name.toLowerCase()) {
            return -1;
          } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1;
          }
          return {
            allRecipes: recipesOrder,
            currentPage: 1,
          };
        });
      }
        if (action.payload === "ascendente") {
        recipesOrder.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          if (b.name.toLowerCase() < a.name.toLowerCase()) {
            return 1;
          }
          return {
            allRecipes: recipesOrder,
            currentPage: 1,
          };
        });
      }
      return {
        ...state,
        allRecipes: recipesOrder,
        currentPage: 1,
      };
    case ORDER_SCORE:
      const scoreOrder = state.recipes;
      if (action.payload === "min") {
        scoreOrder.sort((a, b) => {
          if (a.healthScore > b.healthScore) {
            return 1;
          }
          if (b.healthScore > a.healthScore) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      if (action.payload === "max") {
        scoreOrder.sort((a, b) => {
          if (b.healthScore > a.healthScore) {
            return 1;
          }
          if (a.healthScore > b.healthScore) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      return {
        ...state,
        allRecipes: scoreOrder,
        currentPage: 1,
      };
     case CLEAR_DETAIL:
      return {
        ...state,
        recipeDetail: [],
      };
    case CLEAR_RECIPES:
      return {
        ...state,
        allRecipes: [],
      };
    case PAGINATION:
      return {
        ...state,
        currentPage: Number(action.payload)
          ? parseInt(action.payload)
          : action.payload === "next"
          ? parseInt(state.currentPage + 1)
          : parseInt(state.currentPage - 1),
      };
    default:
      return { ...state };
  }
};

export default reducer;
