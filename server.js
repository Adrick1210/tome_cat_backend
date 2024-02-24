// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT;

// APP OBJECT
const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());

// ROUTER

// TEST ROUTE
app.get("/", (req, res) => {
  console.log("Hello Bookworm");
});

// LISTENER
app.listen(PORT, () => console.log(`Now reading on page: ${PORT}`));