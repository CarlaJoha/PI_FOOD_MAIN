require('dotenv').config();// me traigo lo que está en .env, la info ahora la maneja process.env
const { API_KEY } = process.env;
const axios = require('axios');
const { Recipe, Diet } = require('../db')

// LA INFO QUE NECESITO DE LA API
//https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true
//https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100
//https://apimocha.com/n.s.recipes/allrecipes
//https://run.mocky.io/v3/0fc37af7-8b1a-482e-94af-0bf78c3bca8b
const getAllApi = async() => { 
   try{
     const apiUrl = await axios.get(`https://run.mocky.io/v3/0fc37af7-8b1a-482e-94af-0bf78c3bca8b`)

   let recipesApi = await Promise.all(apiUrl.data.results.map((element) => {
      return {
         id: element.id,
         name: element.title,
         image: element.image,
         healthScore: element.healthScore,
         summary: element.summary,
         diets: element.diets.map((diet) => diet),
         // diets: element.diets,
         instructions: element.analyzedInstructions.flatMap((element) => 
         element.steps.map((element) => element.step))
         
      }})
   )
   // console.log(recipesApi);
   return recipesApi;
   
   } catch(error){
      console.log('Error en getAllApi controller');
   }
};

// getAllApi()

//LA INFO DE LA BASE DE DATOS
const getDbInfo = async () => {
   try{
      const infoDb = await  Recipe.findAll({
            include: [
               {
                  model: Diet,
               }
            ]

      })
      return infoDb;
   }catch(error){
      console.log('Error en getDbInfo controller');
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

//........................................................
module.exports = {
   getAllApi,
   getDbInfo,
   getAllInfo
}