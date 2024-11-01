const express = require("express");
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema;
const userSchema = new UserSchema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("users", userSchema);
module.exports = User;
