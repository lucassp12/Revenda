const Company = require("../models/Company");
const Vehicle = require("../models/Vehicle");
const Mark = require("../models/Mark");
const Category = require("../models/Category");

class VehicleController {
  async index(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");
    const filters = {
      sold: false
    };
    const options = {
      page: req.query.page || 1,
      limit: 8
    };
    const vehicle = await Vehicle.paginate(filters, options);

    return res.render("dashboard/Vehicle/Index", {
      company,
      vehicles: vehicle.docs,
      pages: {
        total: vehicle.totalPages,
        page: vehicle.page
      }
    });
  }

  async soldsView(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");
    const filters = {
      sold: true
    };
    const options = {
      page: req.query.page || 1,
      limit: 8
    };
    const vehicle = await Vehicle.paginate(filters, options);

    return res.render("dashboard/Vehicle/VehiclesSolds", {
      company,
      vehicles: vehicle.docs,
      pages: {
        total: vehicle.totalPages,
        page: vehicle.page
      }
    });
  }

  async viewEdit(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");
    const mark = await Mark.find();
    const category = await Category.find();

    const vehicle = await Vehicle.findById(req.params.id);
    return res.render("dashboard/Vehicle/VehicleEdit", {
      company,
      vehicle,
      marks: mark,
      categories: category
    });
  }
  async create(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");
    const mark = await Mark.find();
    const category = await Category.find();
    return res.render("dashboard/Vehicle/VehicleCreate", {
      company,
      marks: mark,
      categories: category
    });
  }

  async store(req, res) {
    await Vehicle.create(req.body);

    return res.redirect("/vehicles");
  }
  async update(req, res) {
    await Vehicle.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      {
        new: true
      }
    );
    return res.redirect("/vehicles");
  }
  async delete(req, res) {
    await Vehicle.findByIdAndRemove(req.params.id);

    return res.redirect("/vehicles");
  }

  async showView(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");

    const vehicle = await Vehicle.findById(req.params.id);

    return res.render("dashboard/Vehicle/VehicleView", { company, vehicle });
  }
}
module.exports = new VehicleController();
