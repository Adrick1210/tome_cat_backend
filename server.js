// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT;

// APP OBJECT
const app = express();

// MIDDLE WARE
app.use(morgan("dev"));
app.use(cors());

// ROUTER

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("lets go team!");
});

// LISTENER
app.listen(PORT, () => console.log(`back at it again on Port ${PORT}`));