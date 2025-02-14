// to create router use express
const express = require("express");


//  import from Controller

// const recipeController= require("../controllers/recipeController");

const {createRecipe }=  require('../controllers/recipeController');

// create a new router
const recipesRouter = express.Router();

// recipesRouter.post('/',recipeController.createRecipe );
recipesRouter.post('/',createRecipe);

module.exports = recipesRouter;
