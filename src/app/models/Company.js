const mongoose = require("mongoose");

const Company = new mongoose.Schema({
  logo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    uppercase: true,
    required: true
  },
  cnpj: {
    type: String,
    required: true
  },
  ie: {
    type: String,
    required: true
  },
  street: {
    type: String,
    uppercase: true,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  neighborhood: {
    type: String,
    uppercase: true,
    required: true
  },
  state: {
    type: String,
    uppercase: true,
    required: true
  },
  zip_code: {
    type: String,
    uppercase: true,
    required: true
  },
  city: {
    type: String,
    uppercase: true,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  total_purchases: {
    type: Number
  },
  total_expenses: {
    type: Number
  },
  total_sales: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Company", Company);
