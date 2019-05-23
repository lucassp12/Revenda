const express = require("express");

const routes = express.Router();

/*--- User---*/
const UserController = require("./app/controllers/UserController");
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

/*--- Session ---*/
const SessionController = require("./app/controllers/SessionController");
routes.post("/session", SessionController.store);

module.exports = routes;
