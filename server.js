const mongoose = require('mongoose');
require('dotenv').config();
// to install express 
const express = require('express');
// to create app in express
const app=express();

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log("Connnect to MongoDB");
  app.listen(3001,()=>{
    console.log("Server started on http://localhost:3001");
  });
})
.catch(err=>{
  console.log("error in connection in mongodb",err);
})