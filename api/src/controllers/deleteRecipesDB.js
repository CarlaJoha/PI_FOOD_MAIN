// const { Recipe } = require('../db');

// module.exports = async (req, res) => {
//    try {
//       const { id } = req.params;

//       const recipeDelete = await Recipe.findByPk(id);

//       await recipeDelete.destroy();

//       return res.send("The recipe was successfully deleted")

//    } catch(error){
      
//       return res.status(500).json({'error': 'error delete'})
//    }
// };