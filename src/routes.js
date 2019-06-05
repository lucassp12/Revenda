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
routes.get("/company", CompanyController.create);
routes.post("/company", upload.single("logo"), CompanyController.update);
module.exports = routes;

/*--- Customer ---*/
const CustomerController = require("./app/controllers/CustomerController");
routes.get("/customer", CustomerController.index);
routes.post("/customer", CustomerController.store);
routes.get("/customers", CustomerController.show);
routes.get("/customer/:id", CustomerController.showView);
routes.get("/customer/edit/:id", CustomerController.viewEdit);
routes.get("/customer/ex/:id", CustomerController.delete);
routes.post("/customer/edit/:id", CustomerController.update);
