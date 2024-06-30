const express = require("express");

const UserRoute=  express.Router();
const {signup,login}=require('../controllers/UserController')

UserRoute.post("/signup",signup)
UserRoute.post("/login",login)

module.exports = UserRoute