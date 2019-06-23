const Company = require("../models/Company");
const Saller = require("../models/Saller");

class SallerController {
  async index(req, res) {
    const company = await Company.findOne();
    const filters = {};
    const options = {
      page: req.query.page || 1,
      limit: 8
    };
    const sallers = await Saller.paginate(filters, options);

    return res.render("dashboard/Saller/Index", {
      company,
      sallers: sallers.docs,
      pages: {
        total: sallers.totalPages,
        page: sallers.page
      }
    });
  }
  async viewEdit(req, res) {
    const company = await Company.findOne();

    const saller = await Saller.findById(req.params.id);
    return res.render("dashboard/Saller/SallerEdit", {
      company,
      saller
    });
  }
  async create(req, res) {
    const company = await Company.findOne();
    return res.render("dashboard/Saller/SallerCreate", {
      company
    });
  }

  async store(req, res) {
    await Saller.create({ ...req.body, number_sales: 0 });

    return res.redirect("/sallers");
  }
  async update(req, res) {
    await Saller.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      {
        new: true
      }
    );
    return res.redirect("/sallers");
  }
  async delete(req, res) {
    await Saller.findByIdAndRemove(req.params.id);

    return res.redirect("/sallers");
  }
  async showView(req, res) {
    const company = await Company.findOne();

    const saller = await Saller.findById(req.params.id);

    return res.render("dashboard/Saller/SallerView", { company, saller });
  }
}
module.exports = new SallerController();
