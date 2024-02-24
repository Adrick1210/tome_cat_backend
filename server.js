// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT;
const BooksRouter = require("./controllers/Books");
const AboutRouter = require("./controllers/about");

// APP OBJECT
const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// ROUTERS
app.use("/books", BooksRouter);
app.use("/about", AboutRouter);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Hello Bookworm");
});

// LISTENER
app.listen(PORT, () => console.log(`Now reading on page: ${PORT}`));