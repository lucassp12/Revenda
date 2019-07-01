const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Customer = new mongoose.Schema({
  name: {
    type: String,
    uppercase: true,
    required: true
  },
  address: {
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
  city: {
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
    required: true
  },
  email: {
    type: String,
    required: true
  },
  type: {
    type: String,
    uppercase: true,
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
    uppercase: true,
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
    type: String,
    uppercase: true
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
Customer.plugin(mongoosePaginate);
module.exports = mongoose.model("Customer", Customer);
