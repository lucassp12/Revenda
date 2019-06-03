const Company = require("../models/Company");

class CompanyController {
  async create(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");
    return res.render("dashboard/company", { company });
  }
  async index(req, res) {
    const company = await Company.findById("5cf56c52e446d37414c7204e");

    return res.render("_layouts/dashboard", { company });
  }
  async update(req, res) {
    const { filename: logo } = req.file;
    const id = "5cf56c52e446d37414c7204e";

    await Company.findByIdAndUpdate(
      id,
      { ...req.body, logo },
      {
        new: true
      }
    );

    return res.redirect("/dashboard");
  }
}

module.exports = new CompanyController();
