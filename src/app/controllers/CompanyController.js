const Company = require("../models/Company");

class CompanyController {
  async store(req, res) {
    const company = await Company.create(req.body);

    return res.json(company);
  }
}
module.exports = new CompanyController();
