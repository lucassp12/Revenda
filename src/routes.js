const express = require("express");

const routes = express.Router();

const UserController = require("./app/controllers/UserController");
routes.post("/user", UserController.store);

module.exports = routes;
