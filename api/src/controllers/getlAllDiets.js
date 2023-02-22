require('dotenv').config();// me traigo lo que está en .env, la info ahora la maneja process.env
const { API_KEY } = process.env;
const axios = require('axios');
const { Diet } = require('../db');

//OBTENER TODAS LAS DIETS

//https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true
//https://apimocha.com/n.s.recipes/allrecipes
//https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5
const getAllDiets = async() => { 
    
   const dietsDB = await Diet.findAll()
   try{
    if(dietsDB.length){
      return dietsDB
    }
  
     const apiDiets = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)

      const info = await apiDiets.data.results.map((element) => {
         return {
            vegetarian: element[0],
            diets: element.diets,
         }
      })
 
    
      const filterR = info.map( (element) => element && element.diets)

      const dietas = filterR.flat();

      let setdietas = new Set(dietas);

      const arreglo = Array.from(setdietas) ;  


   
      arreglo.forEach((diet) => { Diet.findOrCreate({
         where: { name: diet }
         })
      });
   //retorno las dietas de la db
   let totalDietsDB = await Diet.findAll();

   return totalDietsDB;
   } catch(error){
      throw new Error('Error in getAllDiets controller')
   }

};



//..............................................................................

module.exports = {
   getAllDiets
}
