const Company = require("../models/Company");
const Vehicle = require("../models/Vehicle");
const Mark = require("../models/Mark");
const Category = require("../models/Category");
const format = require("../helpers/format");
const Statistics = require("../models/Statistics");

class VehicleController {
  async index(req, res) {
    const company = await Company.findOne();
    const filters = {
      sold: false
    };

    if (req.query.Marca) {
      filters.mark = new RegExp(req.query.Marca, "i");
    }

    if (req.query.Modelo) {
      filters.model = new RegExp(req.query.Modelo, "i");
    }

    if (req.query.Placa) {
      filters.plate = new RegExp(req.query.Placa, "i");
    }
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
    const company = await Company.findOne();
    const filters = {
      sold: true
    };

    if (req.query.Marca) {
      filters.mark = new RegExp(req.query.Marca, "i");
    }

    if (req.query.Modelo) {
      filters.model = new RegExp(req.query.Modelo, "i");
    }

    if (req.query.Placa) {
      filters.plate = new RegExp(req.query.Placa, "i");
    }
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
    const company = await Company.findOne();
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
    const company = await Company.findOne();
    const mark = await Mark.find();
    const category = await Category.find();
    return res.render("dashboard/Vehicle/VehicleCreate", {
      company,
      marks: mark,
      categories: category
    });
  }

  async store(req, res) {
    const vehicle = await Vehicle.findOne({ renavam: req.body.renavam });

    if (vehicle) {
      console.log("cadastrado");
      req.flash("error", "Veículo já Cadastrado!");
      return res.redirect("/vehicle");
    }

    let { price_sale, price_buy, total_expenses, date_buy } = req.body;
    const statistics = await Statistics.findOne();

    price_sale = parseInt(price_sale.replace(/[\D]+/g, ""));
    price_buy = parseInt(price_buy.replace(/[\D]+/g, ""));
    total_expenses = parseInt(total_expenses.replace(/[\D]+/g, ""));
    date_buy = format.formatDateBRToISO(date_buy);

    await Vehicle.create({
      ...req.body,
      price_sale,
      price_buy,
      total_expenses,
      date_buy
    });

    statistics.total_purchases += price_buy;
    statistics.total_expenses += price_sale;
    statistics.total_sales += total_expenses;

    await statistics.save();

    return res.redirect("/vehicles");
  }

  async update(req, res) {
    let { price_sale, price_buy, total_expenses, date_buy } = req.body;

    price_sale = parseInt(price_sale.replace(/[\D]+/g, ""));
    price_buy = parseInt(price_buy.replace(/[\D]+/g, ""));
    total_expenses = parseInt(total_expenses.replace(/[\D]+/g, ""));
    date_buy = format.formatDateBRToISO(date_buy);

    const data = {
      ...req.body,
      price_sale,
      price_buy,
      total_expenses,
      date_buy
    };

    await Vehicle.findByIdAndUpdate(req.params.id, data);

    return res.redirect("/vehicles");
  }

  async delete(req, res) {
    await Vehicle.findByIdAndRemove(req.params.id);

    return res.redirect("/vehicles");
  }

  async showView(req, res) {
    const company = await Company.findOne();

    const vehicle = await Vehicle.findById(req.params.id);

    return res.render("dashboard/Vehicle/VehicleView", { company, vehicle });
  }
}
module.exports = new VehicleController();
