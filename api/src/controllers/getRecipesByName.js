require('dotenv').config();// me traigo lo que está en .env, la info ahora la maneja process.env
const { API_KEY } = process.env;
const axios = require('axios');
const { Recipe } = require('../db')
const { Op } = require('sequelize')

//OBTENER LAS RECETAS POR NOMBRE
const getRecipesByName  = async (name) => {
 
   let findNameDB = await Recipe.findAll({
      where : { name: { [Op.iLike]:`%${name}%`} }//devuelve un resultado con todas las combinaciones posibles
   });

   let response = await axios(`https://run.mocky.io/v3/0fc37af7-8b1a-482e-94af-0bf78c3bca8b`)
   
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
            instructions: element.analyzedInstructions.flatMap((element) => 
            element.steps.map((element) => element.step))
            }
      })
      return recipesMatchName.concat(findNameDB);
      
      } else{
         throw new Error(`No recipe found with ${name}`)
      }
    
}

module.exports = {
     getRecipesByName,
}