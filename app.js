const express = require("express");
const cors = require("cors");

const snacksController = require("./Controllers/snacksController");


//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json()); //parses incoming json request

// routes
app.get("/", (req, res) => {
  res.send("Welcome to our Snack App");
});

//localhost://3345/albums
app.use("/snacks", snacksController);





app.get("*", (req, res) => {
  res.status(404).send("Page not Found");
});

module.exports = app;