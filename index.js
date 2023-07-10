const express= require('express');
const dotenv=require("dotenv").config();
const connectDB=require("./config/db");
const app=express();
connectDB();
const port=process.env.PORT || 6000;
app.listen(port,()=>{
console.log(`Server running at port ${port}`)
})