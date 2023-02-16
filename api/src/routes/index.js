const { Router } = require('express');
const recipes = require('./recipes');
const diets = require('./diets');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: routes.use('/auth', authRouter);

router.use('/recipes', recipes); //todas las rutas de recipes
router.use('/diets', diets);//todas las rutas de diets



module.exports = router;
