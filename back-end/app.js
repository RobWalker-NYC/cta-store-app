// DEPENDENCIES
const cors = require("cors");
const express = require("express");

const donutController = require("./controllers/donutController.js")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); 
require('dotenv').config();

// ROUTES
app.get("/", (req, res) => {
  res.send("Buzz House Bakery: Doughnuts. Caffeinated. - We're not your parents bakery, or your kids! ... ")
})

app.use("/donuts", donutController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
})

// EXPORT
module.exports = app;

// .env
// PG_PASSWORD=""