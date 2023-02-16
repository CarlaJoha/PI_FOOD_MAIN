require('dotenv').config();// me traigo lo que está en .env, la info ahora la maneja process.env
const { API_KEY } = process.env;
const axios = require('axios');

//OBTENER LAS RECETAS POR NOMBRE
const getRecipesByName  = async (name) => {
   try{
   let response = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
   
   const search = response.data.results.filter((recipe) => recipe.title.toLowerCase().includes(name.toLowerCase()) === true)
   
   if(search.length > 0){
      
      let recipesMatchName = search.map((element) => {
         return {
            id: element.id,
            name: element.title,
            image: element.image,
            healthScore: element.healthScore,
            summary: element.summary,
            diets: element.diets.map((diet) => diet),
            instructions: element.analyzedInstructions.map((steps) => steps)
            }
      })
      return recipesMatchName;
      } else{
         throw new Error(`No recipe found with ${name}`)
      }
      } catch(error){
         return resp.status(404).send({ error: error.message })
      }
}

module.exports = {
     getRecipesByName,
}