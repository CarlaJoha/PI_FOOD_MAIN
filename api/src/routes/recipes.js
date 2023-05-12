const { Router } = require('express');
const { getAllInfo } = require('../controllers/getAllRecipes');
const { getRecipesByName } = require('../controllers/getRecipesByName')
const { getRecipesById } = require('../controllers/getRecipesById')
const { Diet, Recipe } = require("../db")
// const deleteRecipe = require('../controllers/deleteRecipesDB');

const router = Router();

//Obtener todas aquellas recetas que coincidan por el titulo, con el name recibido por query( /recipes/name?="...")
router.get('/', async (req, res) => {
   try{
      const { name } = req.query;
      const totalInfo =await getAllInfo();
      
      if(name){
      
        let response = await getRecipesByName(name);
        return res.status(200).json(response)
        
      } else {
         return res.status(200).json(totalInfo)
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
    
      let response = await getRecipesById(id);
      return res.status(200).json(response);
        
    
   } catch (error) {
      return res.status(404).json({error: error.message})
   }
});
//..........................................................................
// RUTA POST 
// Crea una NUEVA RECETA y la agrega a la DB
// la relaciona con los tipos de dieta solicitados
router.post('/', async(req, res) => {
   const { name, image, healthScore, summary, instructions, createdInDb, diets } = req.body;
   try {
     
         let newRecipe = await Recipe.create({
               name,
               summary,
               image,
               healthScore,
               instructions,
               diets,
               createdInDb
         });
         console.log(newRecipe);
         
      return res.status(200).json( newRecipe )

   
   
   } catch (error) {
       res.status(404).send({error: "We couldn't create the recipe"})  
   }
});

//...........................................................................

//ELIMINAR UNA RECETA DE LA BASE DE DATOS

// router.delete('/:id', deleteRecipe);

//........................................................................
module.exports = router;
