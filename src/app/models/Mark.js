const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Mark = new mongoose.Schema({
  name: {
    type: String,
    uppercase: true,
    required: true
  }
});

Mark.plugin(mongoosePaginate);

module.exports = mongoose.model("Mark", Mark);
