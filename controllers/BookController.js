const express = require("express");
const mongoose = require("mongoose");
const BookModel=require('../models/BookModel')



const getallBooks=async(req,res)=>{
  try{
    const books=await BookModel.find();
    console.log(books);
    res.status(200).json(books);
  }catch(error){
    res.status(500).json({error:error.message});
  }
}
module.exports={
  getallBooks,
}
