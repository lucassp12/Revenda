const Customer = require("../models/Customer");
const Company = require("../models/Company");

class CustomerController {
  async index(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");
    res.render("dashboard/CustomerCreate", { company });
  }
  async show(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");
    if (req.params.id === undefined) {
      const customer = await Customer.find();
      res.render("dashboard/CustomerList", { company, customers: customer });
    } else {
      const customer = await Customer.findById(req.params.id);
      res.render("dashboard/CustomerView", { company, customer });
    }
  }
  async store(req, res) {
    await Customer.create(req.body);

    res.redirect("/customers");
  }
  async viewEdit(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");

    const customer = await Customer.findById(req.params.id);
    console.log(customer);

    res.render("dashboard/CustomerEdit", { company, customer });
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
