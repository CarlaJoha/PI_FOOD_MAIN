const { Router } = require('express');
const { getAllInfo, getRecipesByName } = require('../controllers/controllers');
const { Recipe } = require('../db')

const router = Router();



//Obtener todas aquellas recetas que coincidan por el titulo, con el name recibido por query( /recipes/name?="...")
router.get('/', async (req, res) => {
   const { name } = req.query;
   try{
      if(name){
        let response = await getRecipesByName(name);
        return res.status(200).json(response)
      } else {
         let resp = await getAllInfo();
         return res.status(200).json(resp)
      }
   }
      catch(error){
      return res.status(404).json({error: error.message});
   }
   
});

//Obtiene el detalle de una receta solicitada por id

router.get('/recipes/:id', async(req, res) => {
   try {
      const { id } = req.params;

      let info = await getAllInfo();
     
      if(id) {
         let recipeById = info.filter((recipe) => recipe.id === Number(id));
         console.log(recipeById);
         if(recipeById.length){
           return res.status(200).json(recipeById);
         } else {
            throw new Error('No se encontró receta con ese Id')
         }
      }
   } catch (error) {
      return res.status(404).json({error: error.message})
   }
});

//RUTA POST Crea una nueva receta y la agrega a la db
router.post('/', async(req, res) => {
   const { name, image, healthScore, summary, instructions, diets, createdInDb } = req.body;
   try {
      const newRecipe = await Recipe.create({
         name,
         summary,
         image,
         healthScore,
         instructions
      });
      
      
   } catch (error) {
      
   }
})

//........................................................................
module.exports = router;
