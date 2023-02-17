require('dotenv').config();// me traigo lo que está en .env, la info ahora la maneja process.env
const { API_KEY } = process.env;
const axios = require('axios');
const { Recipe } = require('../db')

//OBTENER TODAS LAS DIETS

//https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true
//https://apimocha.com/n.s.recipes/allrecipes
//https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5
const getRecipesById = async(id) => { 
   
   if(id.length === 36){
      const findInDB = await Recipe.findByPk(id);
      
      if(findInDB) return findInDB;

   } else {

     const apiRecipesId = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`);
 
     let search = apiRecipesId.data.results.find((element) => element.id === Number(id));
    
     if(search){
      
      let recipesId = {
         
            id: search.id,
            name: search.title,
            image: search.image,
            healthScore: search.healthScore,
            summary: search.summary,
            // diets: element.diets.map((diet) => diet),
            // diets: element.diets,
            instructions: search.analyzedInstructions.map((steps) => steps)
      }
      return recipesId;

      } else{
         throw new Error(`we dont have a recipe with id ${id}`);
      }
   }
    
};

module.exports = {
   getRecipesById   
}