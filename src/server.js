require("dotenv").config();
const express = require("express");
const nunjucks = require("nunjucks");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const mongoose = require("mongoose");
const databaseConfig = require("./config/database");
const path = require("path");
const helmet = require("helmet");
const flash = require("connect-flash");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.database();
    this.security();
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

  security() {
    this.express.use(helmet());
    this.express.disable("x-powered-by");
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(flash());
    this.express.use(
      session({
        name: "root",
        secret: "MyAppSecret",
        store: new FileStore({
          path: path.resolve(__dirname, "..", "tmp", "sessions")
        }),
        resave: true,
        saveUninitialized: true
      })
    );
  }

  views() {
    nunjucks.configure(path.resolve(__dirname, "app", "views"), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    });

    this.express.use(express.static(path.resolve(__dirname, "public")));
    this.express.set("view engine", "njk");
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
