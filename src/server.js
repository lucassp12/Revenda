require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const databaseConfig = require("./config/database");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.database();
    this.middlewares();
    this.views();
    this.routes();
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    });
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  views() {
    this.express.set("views", __dirname + "/app/views");
    this.express.set("view engine", "ejs");
    this.express.use(expressLayouts);

    this.express.use(express.static(__dirname + "/app/public"));
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
