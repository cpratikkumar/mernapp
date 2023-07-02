const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  // avtar: {
  //   type: String,
  //   required: true,
  // },
});
module.exports = mongoose.model("employee_details", schema);
