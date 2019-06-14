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

/*--- Vehicles---*/
const VehicleController = require("./app/controllers/VehicleController");
routes.get("/vehicles", VehicleController.index);
routes.get("/vehicle", VehicleController.create);
routes.post("/vehicle", VehicleController.store);
routes.get("/vehicle/edit/:id", VehicleController.viewEdit);
routes.post("/vehicle/edit/:id", VehicleController.update);
routes.get("/vehicle/:id", VehicleController.showView);
routes.get("/vehicle/delete/:id", VehicleController.delete);

/*--- Saller--*/
const SallerController = require("./app/controllers/SallerController");
routes.get("/sallers", SallerController.index);
routes.get("/saller", SallerController.create);
routes.post("/saller", SallerController.store);
routes.get("/saller/edit/:id", SallerController.viewEdit);
routes.get("/saller/:id", SallerController.showView);
routes.post("/saller/edit/:id", SallerController.update);
routes.get("/saller/delete/:id", SallerController.delete);

/*--- Sale--*/
const SaleController = require("./app/controllers/SaleController");
routes.get("/sale", SaleController.index);
routes.get("/sale/vehicle/:id", SaleController.createView);
routes.post("/sale/vehicle/:id", SaleController.store);
routes.get("/sales", SaleController.soldView);
routes.get("/sale/:id", SaleController.saleView);
