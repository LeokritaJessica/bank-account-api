//import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//import routes
const {
  usersRouter,
  bankRouter,
  accountRouter,
  mutationRouter,
} = require("./routes");

//import data
const db = require("./config/database");

//express
const app = express();

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//morgan
app.use(morgan("dev"));

//routes
app.use("/api/v1/", usersRouter);
app.use("/api/v1/", bankRouter);
app.use("/api/v1/", accountRouter);
app.use("/api/v1/", mutationRouter);

//module export
module.exports = app;
