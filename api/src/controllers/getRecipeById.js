require('dotenv').config();// me traigo lo que está en .env, la info ahora la maneja process.env
const { API_KEY } = process.env;
const axios = require('axios');

//PARA OBTENER EL DETALLE POR ID DE UNA RECETA ESPECÍFICA


const getRecipeById = async (req, res) => {

}