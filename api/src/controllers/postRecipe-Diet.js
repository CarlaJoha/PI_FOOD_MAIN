const { Recipe, Diet } = require('../db')


const postRecipes = async(  name, image, healthScore, summary, instructions, diets  ) => {
   try {
   // if(!name) throw new Error('The recipe must have a title');
   // if(!summary) throw new Error('The recipe must have a summary');
   // if(!instructions) throw new Error('The recipe must have a instructions');

      let newRecipe = await Recipe.create({
         name,
         summary,
         image,
         healthScore,
         instructions
      });
      await newRecipe.save();
      //  // tengo que encontrar la diets en la DB, en el modelo Diet(name),
      // // todas las diets que coincidan con diets que trae por body
      // const dietsDB = await Diet.findAll({
      //    where: { name : diets}
      // })
      // //a la nueva receta la agrega la dieta, acá hago la relación
      // newRecipe.addDiet(dietsDB)
   
   }
    catch (error) {
      throw new Error( { error: 'We could not create the recipe, please try again' })
   }
};

module.exports = {
   postRecipes,
}