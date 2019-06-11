const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Saller = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  rg: {
    type: String,
    required: true
  },
  birth_date: {
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
  uf: {
    type: String,
    required: true
  },
  zip_code: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  number_sales: {
    type: Number
  }
});

Saller.plugin(mongoosePaginate);

module.exports = mongoose.model("Saller", Saller);
