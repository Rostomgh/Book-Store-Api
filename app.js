const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
//path Route
const UserRoute = require("./Router/UserRoute");
const BookRoute = require("./Router/BookRoute");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/v1/user", UserRoute);
app.use("/api/v1/book", BookRoute);

//mongoose.connect(process.env.DATABASE_URL);
Port = 3000;
app.listen(Port, () => {
  console.log(`http://localhost:${Port}`);
});
