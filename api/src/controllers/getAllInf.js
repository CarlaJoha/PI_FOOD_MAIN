require('dotenv').config();// me traigo lo que está en .env, la info ahora la maneja process.env
const { API_KEY } = process.env;
const axios = require('axios');

//ME TRAIGO TODA LA INFO QUE NECESITO DE LA API
const getAllApi = async() => {
   const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
   const getInfo = await apiUrl.data.map((element) => {
      return {
         name: element.title,
         image: element.image,
         summary: element.summary,
         healthScore: element.healthScore,
         diets: element.diets.map((diet) => diet),
         instructions: element.analyzedInstructions.map((steps) => steps)
      }
   })
   return getInfo;
};

//ME TRAE LA INFO DE LA BASE DE DATOS
const getDbInfo = async () => {
   return await Recipes.findAll({
      include:{
         model: Diet,
         atributtes: ['name'],
         through: {
            atributtes: [],
         }
      }
   })
};

//CONCATENO LAS DOS INFORMACIONES DE LA API Y DE LA DB
const getAllInfo = async () => {
   const apiInfo = await getAllApi();
   const dbInfo = await getDbInfo();
   const totalInfo = apiInfo.concat(dbInfo);
   return totalInfo;
};



module.exports = {
   getAllApi,
   getDbInfo,
   getAllInfo
}