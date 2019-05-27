const express = require("express");
const routes = express.Router();

const authMiddeware = require("./app/middlewares/auth");

routes.get("/", function(req, res) {
  res.render("layout");
});
routes.get("/login", function(req, res) {
  res.render("pages/login");
});
/*--- User---*/
const UserController = require("./app/controllers/UserController");
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

/*--- Session ---*/
const SessionController = require("./app/controllers/SessionController");
routes.post("/login", SessionController.store);

routes.use(authMiddeware);
/*--- Company ---*/

const CompanyController = require("./app/controllers/CompanyController");
routes.post("/company", CompanyController.store);

module.exports = routes;
