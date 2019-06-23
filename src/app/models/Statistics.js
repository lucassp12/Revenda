const mongoose = require("mongoose");

const Statistics = new mongoose.Schema({
  total_purchases: {
    type: Number
  },
  total_expenses: {
    type: Number
  },
  total_sales: {
    type: Number
  },
  Profit: {
    type: Number
  }
});

module.exports = mongoose.model("Statistics", Statistics);
