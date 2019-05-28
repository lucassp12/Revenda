const Company = require("../models/Company");

class CompanyController {
  async store(req, res) {
    console.log(req.body);
    const { filename: logo } = req.file;
    const company = await Company.create({ ...req.body, logo });

    return res.json(company);
  }
}

module.exports = new CompanyController();
