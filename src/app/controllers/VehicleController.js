const Company = require("../models/Company");
const Vehicle = require("../models/Vehicle");

class VehicleController {
  async index(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");
    const filters = {};
    const options = {
      page: req.query.page || 1,
      limit: 8
    };
    const vehicle = await Vehicle.paginate(filters, options);

    return res.render("dashboard/Mark/Index", {
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

    const vehicle = await Vehicle.findById(req.params.id);
    return res.render("dashboard/Mark/MarkEdit", {
      company,
      vehicle
    });
  }
  async create(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");
    return res.render("dashboard/Mark/MarkCreate", {
      company
    });
  }

  async store(req, res) {
    await Vehicle.create(req.body);

    return res.redirect("/marks");
  }
  async update(req, res) {
    await Vehicle.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      {
        new: true
      }
    );
    return res.redirect("/marks");
  }
  async delete(req, res) {
    await Vehicle.findByIdAndRemove(req.params.id);

    return res.redirect("/marks");
  }
}
module.exports = new VehicleController();
