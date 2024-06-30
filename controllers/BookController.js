const express = require("express");
const mongoose = require("mongoose");
const BookModel = require("../models/BookModel");

const getallBooks = async (req, res) => {
  try {
    const books = await BookModel.find();
    console.log(books);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const createbook = async (req, res) => {
  try {
    const books = new BookModel({
      name: req.body.name,
      author: req.body.author,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      language: req.body.language,
      pages: req.body.pages,
      category: req.body.category,
    });
    books.save();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getallBooks,
  createbook,
};
