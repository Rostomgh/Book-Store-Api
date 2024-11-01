const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/Db"); // Ensure the path is correct

dotenv.config();
const app = express();
const Port =  3000; 

// Path Route
const UserRoute = require("./src/Router/UserRoute");
const BookRoute = require("./src/Router/BookRoute");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/v1/user", UserRoute);
app.use("/api/v1/book", BookRoute);

const MONGOO_URI = process.env.MONGOO_URI 

const start = async () => {
  try {
    await connectDB(MONGOO_URI);
    app.listen(Port, () => {
      console.log(`http://localhost:${Port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

start();
