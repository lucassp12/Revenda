const Company = require("../models/Company");
const Vehicle = require("../models/Vehicle");
const Customer = require("../models/Customer");
const Saller = require("../models/Saller");
const Sale = require("../models/Sale");

class SaleController {
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

    return res.render("dashboard/Sale/stock", {
      company,
      vehicles: vehicle.docs,
      pages: {
        total: vehicle.totalPages,
        page: vehicle.page
      }
    });
  }
  async createView(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");
    const vehicle = await Vehicle.findById(req.params.id);
    const customers = await Customer.find();
    const sallers = await Saller.find();

    return res.render("dashboard/Sale/create", {
      company,
      vehicle,
      customers: customers,
      sallers: sallers
    });
  }
  async store(req, res) {
    const vehicle = await Vehicle.findById(req.params.id);
    const saller = await Saller.findOne({ name: req.body.saller });

    await Sale.create({ ...req.body, totals_sale: +1 });

    saller.number_sales = saller.number_sales + 1;
    vehicle.sold = true;
    await saller.save();
    await vehicle.save();

    return res.redirect("/sales");
  }
  async soldView(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");
    const filters = {};
    const options = {
      page: req.query.page || 1,
      limit: 8
    };
    const sales = await Sale.paginate(filters, options);

    return res.render("dashboard/Sale/sold", {
      company,
      sales: sales.docs,
      pages: {
        total: sales.totalPages,
        page: sales.page
      }
    });
  }
  async saleView(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");

    const sale = await Sale.findById(req.params.id);

    return res.render("dashboard/Sale/saleView", {
      company,
      sale
    });
  }
  async destroy(req, res) {
    await Sale.findByIdAndRemove(req.params.id);

    return res.json("ok");
  }
}

module.exports = new SaleController();
