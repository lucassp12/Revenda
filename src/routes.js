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

/*--- Category---*/
const CategoryController = require("./app/controllers/CategoryController");
routes.get("/categories", CategoryController.index);
routes.get("/category", CategoryController.create);
routes.post("/category", CategoryController.store);
routes.get("/category/edit/:id", CategoryController.viewEdit);
routes.post("/category/edit/:id", CategoryController.update);
routes.get("/category/:id", CategoryController.delete);

/*--- Mark---*/
const MarkController = require("./app/controllers/MarkController");
routes.get("/marks", MarkController.index);
routes.get("/mark", MarkController.create);
routes.post("/mark", MarkController.store);
routes.get("/mark/edit/:id", MarkController.viewEdit);
routes.post("/mark/edit/:id", MarkController.update);
routes.get("/mark/:id", MarkController.delete);
