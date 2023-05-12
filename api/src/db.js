require('dotenv').config();// m etraigo lo que está en .env, la info ahora la maneja process.env
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;//, API_KEY


// CREACION DE LA BASE DE DATOS
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {//?api_key=${API_KEY}
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);

sequelize.models = Object.fromEntries(capsEntries);//ACA ESTAN MIS MODELOS

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
// const modelRecipe = require('./models/Recipe')
// const modelDiet = require('./models/Diet')

// modelRecipe(sequelize);
// modelDiet(sequelize);

const { Recipe, Diet } = sequelize.models;

// Aca vendrian las relaciones
//debe ser de muchos a muchos
Recipe.belongsToMany(Diet, { through:'Recipe_Diets' })
Diet.belongsToMany(Recipe, { through:'Recipe_Diets' })


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
};
