const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   // defino el modelo
   sequelize.define('Diet', {
     id: {
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       allowNull: false, //estar vacía: no puede
       primaryKey: true
     },
 
     name: {
       type: DataTypes.STRING,
       allowNull: false,
       unique: true
     },
   },
   {
     timestamps: false
   })
 };
 