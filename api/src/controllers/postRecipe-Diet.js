// const { Recipe, Diet } = require('../db')


// const postRecipes = async(  name, image, healthScore, summary, instructions, diets  ) => {
//    try {

//      let newRecipe = await Recipe.create({
//          name,
//          summary,
//          image,
//          healthScore,
//          diets,
//          instructions,
//    });
//       await newRecipe.save();
      
//       return newRecipe;
//    }
//     catch (error) {
//       throw new Error('We could not create the recipe, please try again')
//    }
// };

// module.exports = {
//    postRecipes,
// }