//import dependencies
const express = require("express");
const about = require("../models/about.json");

//create the router
const router = express.Router();

//Index route
router.get("/", (req, res) => {
  res.json(about);
});

//export the router
module.exports = router;
