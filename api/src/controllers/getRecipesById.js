require('dotenv').config();// me traigo lo que está en .env, la info ahora la maneja process.env
const { API_KEY } = process.env;
const axios = require('axios');
const { Recipe } = require('../db')


//OBTENER TODAS LAS DIETS

//https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true
//https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100
//https://run.mocky.io/v3/0fc37af7-8b1a-482e-94af-0bf78c3bca8b
const getRecipesById = async(id) => { 
   
   if(id.length >= 36){
      const findInDB = await Recipe.findByPk(id);
      
      if(findInDB) return findInDB;

   } else {

     const apiRecipesId = await axios.get(`https://run.mocky.io/v3/0fc37af7-8b1a-482e-94af-0bf78c3bca8b`);
 
     let search = apiRecipesId.data.results.find((element) => element.id === Number(id));
     if(search){
      //   console.log("acá",search);

        let recipesId = {
           
           id: search.id,
           name: search.title,
           image: search.image,
           healthScore: search.healthScore,
           summary: search.summary,
           diets: search.diets.map((diet) => diet),
           instructions: search.analyzedInstructions.flatMap((element) => 
           element.steps.map((element) => element.step)),
         }
      // console.log(recipesId.instructions);
      return recipesId;

   }
    
   throw new Error(`we dont have a recipe with id ${id}`);
}
};


module.exports = {
   getRecipesById   
}
