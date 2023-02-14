const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a la instancia de Sequelize que se creó en db, que se llama sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,//NO es obligatoria - EST
    },

    summary: {
      type: DataTypes.TEXT,
      allowNull: false,//SI es obligatorio
    },

    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },

    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    createdInDb: {//esta me sirve para la creación de recetas, que estarán en DB
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  {
    timestamps: false
  })
};


