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
  
     const apiDiets = await axios.get(`https://run.mocky.io/v3/0fc37af7-8b1a-482e-94af-0bf78c3bca8b`)

      const info = await apiDiets.data.results.map((element) => {
         return {
            vegetarian: element[0],//element[0] === true ? "vegetarian" : null;
            diets: element.diets,
         }
      })
 
    
      const filterR = info.map( (element) => element && element.diets)// todos los elementos diets de la API array de arrays

      const dietas = filterR.flat();//aplano el array de array en un solo array, donde cada elemento es una dieta

      let setdietas = new Set(dietas);//elimino los repetidos y los devuelve en un objeto {}

      const arreglo = Array.from(setdietas);//lo convierto en un array  


      arreglo.forEach((diet) => { Diet.findOrCreate({
         where: { name: diet }
         })
      });
      
   //retorno las dietas de la db
   let totalDietsDB = await Diet.findAll();
   let dietsTotalDB = totalDietsDB.map((diet) => diet.name)

  
   return dietsTotalDB;
   } catch(error){
      throw new Error('Error in getAllDiets controller')
   }
};

//..............................................................................

module.exports = {
   getAllDiets
}
