const Company = require("../models/Company");
const Vehicle = require("../models/Vehicle");
const Customer = require("../models/Customer");
const Saller = require("../models/Saller");
const Sale = require("../models/Sale");

class SaleController {
  async index(req, res) {
    const company = await Company.findOne();
    const filters = {
      sold: false
    };

    if (req.query.Marca) {
      filters.mark = new RegExp(req.query.Marca, "i");
    }

    if (req.query.model) {
      filters.model = new RegExp(req.query.model, "i");
    }

    if (req.query.Placa) {
      filters.plate = new RegExp(req.query.Placa, "i");
    }

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
    const company = await Company.findOne();
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
    const company = await Company.findOne();
    const filters = {};

    if (req.query.Data) {
      filters.date = new RegExp(req.query.Data, "i");
    }

    if (req.query.Veículo) {
      filters.vehicle = new RegExp(req.query.Veículo, "i");
    }

    if (req.query.Cliente) {
      filters.customer = new RegExp(req.query.Cliente, "i");
    }

    if (req.query.Vendedor) {
      filters.saller = new RegExp(req.query.Vendedor, "i");
    }

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
    const company = await Company.findOne();

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
