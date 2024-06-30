const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
Port=3000;
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
MONGOO_URI=process.env.MONGOO_URI
const start = () => {
  connectDB(MONGOO_URI)
      .then(() => {
          app.listen(port, () => {
              console.log(`Server is listening to the port ${Port}`)
          })
      })
      .catch((err) => {
          console.log(err)
      })
}

start()
