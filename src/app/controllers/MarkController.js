const Company = require("../models/Company");
const Mark = require("../models/Mark");

class MarkController {
  async index(req, res) {
    const company = await Company.findOne();
    const filters = {};
    const options = {
      page: req.query.page || 1,
      limit: 8
    };
    const mark = await Mark.paginate(filters, options);

    return res.render("dashboard/Mark/Index", {
      company,
      marks: mark.docs,
      pages: {
        total: mark.totalPages,
        page: mark.page
      }
    });
  }
  async viewEdit(req, res) {
    const company = await Company.findOne();

    const mark = await Mark.findById(req.params.id);
    return res.render("dashboard/Mark/MarkEdit", {
      company,
      mark
    });
  }
  async create(req, res) {
    const company = await Company.findOne();
    return res.render("dashboard/Mark/MarkCreate", {
      company
    });
  }

  async store(req, res) {
    await Mark.create(req.body);

    return res.redirect("/marks");
  }
  async update(req, res) {
    await Mark.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      {
        new: true
      }
    );
    return res.redirect("/marks");
  }
  async delete(req, res) {
    await Mark.findByIdAndRemove(req.params.id);

    return res.redirect("/marks");
  }
}
module.exports = new MarkController();
