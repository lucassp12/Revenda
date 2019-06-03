const express = require("express");
const routes = express.Router();
const multerConfig = require("./config/multer");
const upload = require("multer")(multerConfig);

const authMiddeware = require("./app/middlewares/auth");

const FileController = require("./app/controllers/FileController");
routes.get("/files/:file", FileController.show);

routes.get("/", function(req, res) {
  res.render("auth/signin");
});
/*--- User---*/
const UserController = require("./app/controllers/UserController");
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

/*--- Session ---*/
const SessionController = require("./app/controllers/SessionController");
routes.post("/login", SessionController.store);

routes.use(authMiddeware);
const CompanyController = require("./app/controllers/CompanyController");
/*-- DashBoard --*/
routes.get("/dashboard", CompanyController.index);

/*--- Company ---*/
routes.get("/company", function(req, res) {
  res.render("dashboard/company");
});
routes.post("/company", upload.single("logo"), CompanyController.update);
module.exports = routes;
