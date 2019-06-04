const Customer = require("../models/Customer");
const Company = require("../models/Company");

class CustomerController {
  async index(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");
    res.render("dashboard/CustomerCreate", { company });
  }
  async store(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");
    const customer = Customer.create(req.body);
    res.redirect("dashboard/customerslist", { company, customers: customer });
  }
}

module.exports = new CustomerController();
