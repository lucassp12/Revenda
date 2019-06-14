const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Sale = new mongoose.Schema({
  vehicle: {
    type: String,
    required: true
  },
  customer: {
    type: String,
    required: true
  },
  saller: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  information: {
    type: String
  },
  totals_sale: {
    type: Number
  }
});

Sale.plugin(mongoosePaginate);

module.exports = mongoose.model("Sale", Sale);
