const { Router } = require('express');
require('dotenv').config();// me traigo lo que está en .env, la info ahora la maneja process.env

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const diets = require('./diets');
const recipes = require('./recipes')


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/recipes', recipes); //todas las rutas de recipes
// router.use('/diets', diets);//todas las rutas de diets



module.exports = router;
