// to create router use express

const express = require('express');

// create a new router

const recipeRouter = express.Router();


recipeRouter.get('/',(req,res)=>{
  res.json({message : "Tasty Recipeess"});
});

module.exports = recipeRouter;