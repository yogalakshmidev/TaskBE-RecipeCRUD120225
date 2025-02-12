const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log("Connnect to MongoDB");
})
.catch(err=>{
  console.log("error in connection in mongodb",err);
})