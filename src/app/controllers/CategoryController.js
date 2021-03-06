const Company = require("../models/Company");
const Category = require("../models/Category");

class CategoryController {
  async index(req, res) {
    const company = await Company.findOne();
    const filters = {};

    if (req.query.pesquisa) {
      filters.name = new RegExp(req.query.pesquisa, "i");
    }

    const options = {
      page: req.query.page || 1,
      limit: 8
    };
    const category = await Category.paginate(filters, options);

    return res.render("dashboard/Category/Index", {
      company,
      categories: category.docs,
      pages: {
        total: category.totalPages,
        page: category.page
      }
    });
  }
  async viewEdit(req, res) {
    const company = await Company.findOne();

    const category = await Category.findById(req.params.id);
    return res.render("dashboard/Category/CategoryEdit", {
      company,
      category
    });
  }
  async create(req, res) {
    const company = await Company.findOne();
    return res.render("dashboard/Category/CategoryCreate", {
      company
    });
  }

  async store(req, res) {
    const category = await Category.findOne({ where: req.body.name });
    if (category) {
      return res.json("Categoria já existe");
    }
    await Category.create(req.body);

    return res.redirect("/categories");
  }
  async update(req, res) {
    await Category.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      {
        new: true
      }
    );
    return res.redirect("/categories");
  }
  async delete(req, res) {
    await Category.findByIdAndRemove(req.params.id);

    return res.redirect("/categories");
  }
}
module.exports = new CategoryController();
