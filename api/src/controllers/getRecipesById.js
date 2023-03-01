require('dotenv').config();// me traigo lo que está en .env, la info ahora la maneja process.env
const { API_KEY } = process.env;
// const axios = require('axios');
// const { Recipe } = require('../db')
const { getAllInfo } = require("./controllers")

//OBTENER TODAS LAS DIETS

//https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true
//https://apimocha.com/n.s.recipes/allrecipes
//https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5
const getRecipesById = async(id) => { 
   
    if(id){
      const getInfo = await getAllInfo();
  
      let searchById = getInfo.find((element) => Number(element.id) === Number(id));

      return searchById
    }   
    
    else {
         throw new Error(`we dont have a recipe with id ${id}`);
      }
};


module.exports = {
   getRecipesById   
}














// const getRecipesById = async(id) => { 
   
//    const recipeTotal= await getAllInfo()
//   if(id){
//     let recipeId= recipeTotal.filter(el => Number(el.id) === Number(id))
//     return recipeId
//   }
// };

// module.exports = {
//    getRecipesById   
// }





// const getRecipesById = async(id) => { 
   
//    if(id.length === 36){
//       const findInDB = await Recipe.findByPk(id);
      
//       if(findInDB) return findInDB;

//    } else {

//      const apiRecipesId = await axios.get(`https://run.mocky.io/v3/0fc37af7-8b1a-482e-94af-0bf78c3bca8b/recipes/${id}`);
//      let search = apiRecipesId.data.results.find((element) => element.id === Number(id));
    
//      if(search){
//       const instructionsSteps = []
//       search.analyzedInstructions.map((el) => el.steps.map((elem) => instructionsSteps.push(elem.step)) )
      
//       let recipesId = {
         
//             id: search.id,
//             name: search.title,
//             image: search.image,
//             healthScore: search.healthScore,
//             summary: search.summary,
//             // diets: element.diets.map((diet) => diet),
//             diets: search.diets,
//             instructions: instructionsSteps 
            
//       } 
//       return recipesId;

//       } else{
//          throw new Error(`we dont have a recipe with id ${id}`);
//       }
//    }
    
// };