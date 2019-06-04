const mongoose = require("mongoose");

const Customer = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  neighborhood: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip_code: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  cpf_cnpj: {
    type: String,
    required: true
  },
  rg: {
    type: String,
    required: true
  },
  o_rg: {
    type: String,
    required: true
  },
  birth_date: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  information: {
    type: String
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

module.exports = mongoose.model("Customer", Customer);
