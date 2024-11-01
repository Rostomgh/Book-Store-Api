const express=require("express");
const BookRoute=express.Router();
const {getallBooks,createbook}=require("../controllers/BookController")

BookRoute.get("/",getallBooks),
//BookRoute.get("name",)
BookRoute.post("/",createbook)

module.exports=BookRoute