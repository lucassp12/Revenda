const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Category = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true
  }
});

Category.plugin(mongoosePaginate);
module.exports = mongoose.model("Category", Category);
