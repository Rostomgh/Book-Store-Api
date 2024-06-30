const express=require("express");
const BookRoute=express.Router();
const {getallBooks}=require("../controllers/BookController")

BookRoute.get("/",getallBooks),
BookRoute.get("name",)
BookRoute.post("/",)

module.exports=BookRoute