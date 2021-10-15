const express = require("express");
const logger = require("morgan");
const routers = require("./routes/index");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
routers(app);
app.use(logger("dev"));

module.exports = app;
