const express = require("express");
const app=express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

app.use(express.json());
Port=3000;
app.listen(Port,()=>{
  console.log(`http://localhost:${Port}`)
})