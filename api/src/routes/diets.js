const { Router } = require('express');
// const { Diet } = require('../db');
const { getAllDiets } = require('../controllers/getlAllDiets');


const router = Router();
//Traigo solo las DIETS
router.get('/', async (req, res) => {
   const { diets } = req.body;

   try{
        let response = await getAllDiets(diets);
        return res.status(200).json(response)
   }
      catch(error){
      return res.status(404).json({error: error.message});
   }
   
});


module.exports = router;