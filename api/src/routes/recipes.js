const { Router } = require('express');
const { getAllInfo } = require('../controllers/controllers');

const router = Router();

//Obtener todas aquellas recetas que coincidan por el titulo, con el name recibido por query( /recipes/name?="...")
router.get('/recipes', async (req, res) => {
   try{
      const { name } = req.query;
      let info = await getAllInfo();

      if(name){
         let recipes = info.filter(recipe => recipe.title.toLowerCase().includes(name.toLowerCase()));
         recipes.length
         ? res.status(200).send(recipes)
         : res.status(404).send('No es posible encontrar esa receta');
      } else {
         res.status(200).send(info);
      }
   } catch(error){
      console.log('Error en la ruta get de recipes')
   }
});



//........................................................................
module.exports = router;
