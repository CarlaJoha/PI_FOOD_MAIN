// require('dotenv').config();// me traigo lo que está en .env, la info ahora la maneja process.env
// const { API_KEY } = process.env;
const axios = require('axios');

//OBTENER TODAS LAS DIETS

//https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true
//https://apimocha.com/n.s.recipes/allrecipes
//https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5
const getAllDiets = async() => { 
   try{
     const apiDiets = await axios.get(`https://apimocha.com/n.s.recipes/allrecipes`)
 
   let dietsApi = apiDiets.data.results.map((element) => {
      return {
         diets: element.diets.map((diet) => diet),
         // diets: element.diets,
         vegetarian: element.vegetarian,
         vegan: element.vegan,
         glutenFree : element.glutenFree
      }
   })
   return dietsApi;
   
   } catch(error){
      console.log('Error en getAllDiets controller');
   }
};



//..............................................................................

module.exports = {
   getAllDiets
   
 }



// const getAllDiets = async() => {
//    try{
//       //primero reviso si está en al db
//       const dbDiets = await Diet.findAll();
//       //verifico si me trae dietas, si hay que las retorne
//       if (dbDiets.length){
//          return dbDiets;
//       }
//     //en caso contrario, obtener el arreglo con los tipos de dieta existentes
//     const typesDiets = [
//       'gluten free',
//       'dairy free',
//       'ketogenic',
//       'vegetarian,',
//       'lacto-vegetarian',
//       'ovo-vegetarian',
//       'vegan',
//       'pescetarian',
//       'paleo',
//       'primal',
//       'low fodmap',
//       'whole 30'
//    ]
//    //comparo el array de tipos de dietas con el modelo, si está, no pasa nada, si no, la crea en la bd
//       typesDiets.forEach((diet) => { Diet.findOrCreate({
//          where: { name: diet }
//          })
//       });
//    //retorno las dietas de la db
//    let dietsDB = await Diet.findAll();
//    return dietsDB;

//    } catch(error){
//       console.log('Error in getAllDiets controller')
//    }
// };

