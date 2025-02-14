// import model here
const Recipe = require('../models/recipe');


const recipeController={
createRecipe:async (req, res) => {
  // console.log(req.body);
  // req.json({ message: "Tasty Recipe World" });
  try {
    const { Title , Ingredients , Content } = req.body;
    // Create a new Recipe
    const newRecipe = new Recipe({
      Title ,
      Ingredients ,
      Content 
    });

    // Save the post in the database
    await newRecipe.save();

    // send the response to the frontend
    res.status(201).json({ message : 'Recipe created successfully.'});
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
},
getRecipes: async(req,res) => {
try{
  // get all the recipes from the database
  const recipes = await Recipe.find().select('-__v');

  // send a response
  res.status(200).json(recipes);
}catch(error){
  res.status(500).json({message: error.message});
}
},
getRecipe: async(req,res) => {
  try{
  
  }catch(error){
    res.status(500).json({message: error.message});
  }
  },
  updateRecipe: async(req,res) => {
    try{
    
    }catch(error){
      res.status(500).json({message: error.message});
    }
    },
    deleteRecipe: async(req,res) => {
      try{
      
      }catch(error){
        res.status(500).json({message: error.message});
      }
      }
}
module.exports = recipeController;