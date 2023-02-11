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
    },

    brief: {
      type: DataTypes.TEXT,
    },

    healtyScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },

    directions: {
      type: DataTypes.TEXT,
    }
  },
  {
    timestamps: false
  })
};


