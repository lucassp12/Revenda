const Company = require("../models/Company");

class CompanyController {
  async create(req, res) {
    const company = await Company.findOne();

    return res.render("dashboard/company", { company });
  }
  async update(req, res) {
    const id = req.params.id;
    const { filename: logo } = req.file;
    await Company.findByIdAndUpdate(
      id,
      { ...req.body, logo },
      {
        new: true
      }
    );

    return res.redirect("/dashboard");
  }
  async store(req, res) {
    const { filename: logo } = req.file;

    await Company.create({ ...req.body, logo });

    return res.redirect("/dashboard");
  }
  async destroy(req, res) {
    await Company.findByIdAndRemove(req.params.id);

    return res.json("ok");
  }
}

module.exports = new CompanyController();
