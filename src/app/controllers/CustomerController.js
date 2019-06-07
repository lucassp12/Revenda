const Customer = require("../models/Customer");
const Company = require("../models/Company");

class CustomerController {
  async index(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");

    return res.render("dashboard/Customer/CustomerCreate", { company });
  }
  async show(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");
    const filters = {};
    const options = {
      page: req.query.page || 1,
      limit: 8
    };
    const customer = await Customer.paginate(filters, options);

    return res.render("dashboard/Customer/CustomerList", {
      company,
      customers: customer.docs,
      pages: {
        total: customer.totalPages,
        page: customer.page
      }
    });
  }
  async showView(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");

    const customer = await Customer.findById(req.params.id);

    return res.render("dashboard/Customer/CustomerView", { company, customer });
  }
  async store(req, res) {
    await Customer.create(req.body);

    res.redirect("/customers");
  }
  async viewEdit(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");

    const customer = await Customer.findById(req.params.id);

    return res.render("dashboard/Customer/CustomerEdit", { company, customer });
  }
  async update(req, res) {
    await Customer.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      {
        new: true
      }
    );
    return res.redirect("/customers");
  }
  async delete(req, res) {
    await Customer.findByIdAndRemove(req.params.id);

    return res.redirect("/customers");
  }
}

module.exports = new CustomerController();