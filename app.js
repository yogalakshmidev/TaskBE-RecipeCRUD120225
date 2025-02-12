// to install express 
const express = require('express');
const recipeRouter = require('./routes/recipeRoutes');
// to create app in express
const app=express();
// use is used and in this we give prefix for the url
app.use('/recipes',recipeRouter);

// to export
module.exports = app;