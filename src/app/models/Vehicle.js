const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

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
    type: String,
    required: true
  },
  year_model: {
    type: String,
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
    type: String,
    required: true
  },
  fuel: {
    type: String
  },
  category: {
    type: String,
    required: true
  },
  date_register: {
    type: String,
    required: true
  },
  date_buy: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  chassis: {
    type: String,
    required: true
  },
  km: {
    type: String,
    required: true
  },
  number_doors: {
    type: String,
    required: true
  },
  informations: {
    type: String,
    required: true
  },
  price_buy: {
    type: String,
    required: true
  },
  price_shell: {
    type: String,
    required: true
  },
  outgoing: {
    type: String,
    required: true
  },
  information_outgoing: {
    type: String,
    required: true
  }
});

Vehicle.plugin(mongoosePaginate);

module.exports = mongoose.model("Vehicle", Vehicle);
