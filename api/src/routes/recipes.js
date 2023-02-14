const { Router } = require('express');
const { getAllInfo } = require('../controllers/getAllInf');

const router = Router();

//Obtener todas aquellas recetas que coincidan por el nombre, recibido por query(no tiene que ser exacto)
router.get('/', (req, res) => {
   
   const { name } = req.query.name; 
   // try{
   //   if(name) {res.status(200).json( getAllInfo() )
   
   // } catch (error){
   //    res.status(404).json("No se encontró ninguna receta");
   // }
})


module.exports = router;