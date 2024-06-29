const express = require("express");
const app=express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

app.use(express.json());
app.use("/api/v1/user",UserRoute);
Port=3000;
app.listen(Port,()=>{
  console.log(`http://localhost:${Port}`)
})