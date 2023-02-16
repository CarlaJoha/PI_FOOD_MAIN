const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   // defino el modelo
   sequelize.define('Diet', {
    name: {
       type: DataTypes.STRING,
       allowNull: false,//estar vacía: no puede
    },
   },
   {
     timestamps: false
   })
 };
 