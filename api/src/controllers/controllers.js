// require('dotenv').config();// me traigo lo que está en .env, la info ahora la maneja process.env
// const { API_KEY } = process.env;
const axios = require('axios');
const { Recipe, Diet } = require('../db')

// LA INFO QUE NECESITO DE LA API
//https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true
//https://apimocha.com/n.s.recipes/allrecipes
//https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5
const getAllApi = async() => { 
   try{
     const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
    
     console.log(apiUrl)
   let recipesApi = apiUrl.data.results.map((element) => {
   return {
      id: element.id,
      name: element.title,
      image: element.image,
      summary: element.summary,
      healthScore: element.healthScore,
      diets: element.diets.map((diet) => diet),
      instructions: element.analyzedInstructions.map((steps) => steps)
      }
   })
   return recipesApi;
   } catch(error){
      console.log('Error en getAllApi controller');
   }
};



//LA INFO DE LA BASE DE DATOS
const getDbInfo = async () => {
   try{
   return await Recipe.findAll({
      include:{
         model: Diet,
         atributtes: ['name'],
         through: {
            atributtes: [],
         }
      }
   })
   }catch(error){
      console.log('Error en getDbInfo controller')
   }
};

//CONCATENO LAS DOS INFORMACIONES DE LA API Y DE LA DB
const getAllInfo = async () => {
   try{
   const apiInfo = await getAllApi();
   const dbInfo = await getDbInfo();
   // const totalInfo = apiInfo.concat(dbInfo);
   const totalInfo = [ ...apiInfo, ...dbInfo ]
   return totalInfo;
   } catch(error){
      console.log('Error en getAllInfo controller');
   }
};

//OBTENER TODAS LAS DIETS

// const getAllDiets = async() => {
//    try{
//       const 
//    } catch(error){

//    }
// }


module.exports = {
   getAllApi,
   getDbInfo,
   getAllInfo
}