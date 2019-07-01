const Statistics = require("../models/Statistics");
const Vehicle = require("../models/Vehicle");
const Saller = require("../models/Saller");
const Company = require("../models/Company");

class StatisticsController {
  async index(req, res) {
    const company = await Company.findOne();
    const vehicles = await Vehicle.find();
    const statistics = await Statistics.findOne();

    let key;
    let totalBuy = 0;
    let totalSale = 0;
    let totalExpenses = 0;

    for (key in vehicles) {
      if (vehicles[key].sold == false) {
        totalBuy += vehicles[key].price_buy;
        totalSale += vehicles[key].price_sale;
        totalExpenses += vehicles[key].total_expenses;
      }
    }
    statistics.total_purchases = totalBuy;
    statistics.total_sales = totalSale;
    statistics.total_expenses = totalExpenses;
    statistics.profit = totalSale - (totalBuy + totalExpenses);

    await statistics.save();

    const saller = await Saller.findOne().sort([["number_sales", -1]]);
    const vehicleValuable = await Vehicle.findOne().sort([["price_sale", -1]]);

    return res.render("dashboard/Statistics/index", {
      company,
      statistics,
      saller,
      vehicleValuable
    });
  }
  async store(req, res) {
    await Statistics.create(req.body);

    return res.json("ok");
  }
}

module.exports = new StatisticsController();
