const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Sale = new mongoose.Schema({
  vehicle: {
    type: String,
    uppercase: true,
    required: true
  },
  customer: {
    type: String,
    uppercase: true,
    required: true
  },
  saller: {
    type: String,
    uppercase: true,
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
    type: String,
    uppercase: true
  },
  totals_sale: {
    type: Number
  }
});

Sale.plugin(mongoosePaginate);

module.exports = mongoose.model("Sale", Sale);
