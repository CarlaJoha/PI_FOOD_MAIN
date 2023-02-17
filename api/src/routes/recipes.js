const { Router } = require('express');
const { getAllInfo } = require('../controllers/controllers');
const { getRecipesByName } = require('../controllers/getRecipesByName')
const { getRecipesById } = require('../controllers/getRecipesById')
const { postRecipes } = require('../controllers/postRecipe-Diet');
const deleteRecipe = require('../controllers/deleteRecipesDB');

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
//..........................................................................

//Obtiene el detalle de una receta solicitada por id
router.get('/:id', async(req, res) => {
   try {
      const { id } = req.params;

      if(id) {
         let response = await getRecipesById(id);
           return res.status(200).json(response);
         } 
    
   } catch (error) {
      return res.status(404).json({error: error.message})
   }
});
//..........................................................................
// RUTA POST 
// Crea una NUEVA RECETA y la agrega a la DB
// la relaciona con los tipos de dieta solicitados
router.post('/', async(req, res) => {
   const { name, image, healthScore, summary, instructions, diets } = req.body;
   try {
     let response = await postRecipes( 
         name.toLowerCase(), 
         image, 
         healthScore, 
         summary, 
         instructions, 
         diets 
      )
      return res.status(200).json( { "message" : "New recipe created successfully" } )
   
   } catch (error) {
       res.status(404).send({"error": "sorry, the recipe was not created"})  
   }
});

//...........................................................................

//ELIMINAR UNA RECETA DE LA BASE DE DATOS

router.delete('/:id', deleteRecipe);

//........................................................................
module.exports = router;
