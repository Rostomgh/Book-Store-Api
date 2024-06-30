const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/Db"); // Ensure the path is correct

dotenv.config();
const app = express();
const Port =  3000; // Correct variable declaration

// Path Route
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

const MONGOO_URI = process.env.MONGOO_URI || 'mongodb+srv://aristoo:aristoo@cluster0.n0vbpko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Correct variable declaration

const start = async () => {
  try {
    await connectDB(MONGOO_URI); // Ensure the connectDB function is called with the correct URI
    app.listen(Port, () => {
      console.log(`http://localhost:${Port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

start();
