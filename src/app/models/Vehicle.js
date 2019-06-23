const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const format = require("../helpers/format");

const Vehicle = new mongoose.Schema({
  mark: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year_manufacture: {
    type: Number,
    required: true
  },
  year_model: {
    type: Number,
    required: true
  },
  plate: {
    type: String,
    required: true
  },
  renavam: {
    type: String,
    required: true
  },
  nfe_buy: {
    type: String
  },
  date_buy: {
    type: Date,
    required: true
  },
  fuel: {
    type: String
  },
  category: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  total_expenses: {
    type: Number,
    required: true
  },
  km: {
    type: Number,
    required: true
  },
  number_doors: {
    type: Number,
    required: true
  },
  additional: {
    type: String,
    required: true
  },
  price_buy: {
    type: Number,
    required: true
  },
  price_sale: {
    type: Number,
    required: true
  },
  description_spend: {
    type: String
  },
  sold: {
    type: Boolean,
    default: false
  }
});

Vehicle.virtual("date_buy_formatted").get(function() {
  return this.date_buy !== null
    ? format.formatDateISOToBR(this.date_buy)
    : this.date_buy;
});

Vehicle.plugin(mongoosePaginate);

module.exports = mongoose.model("Vehicle", Vehicle);
