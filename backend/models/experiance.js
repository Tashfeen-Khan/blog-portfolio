const mongoose = require("mongoose");
const ExperianceSchema = new mongoose.Schema({
  Post: {
    type: String,
    required: [true, "Please add the Post"],
  },
  From: {
    type: String,
    required: [true, "Please add the Post"],
  },
  Duration: {
    type: String,
    required: [true, "Please add the Post"],
  },
  Experiance: {
    type: String,
    required: [true, "Please add the Post"],
  }
  
});
const Experiance = mongoose.model("Experisnce", ExperianceSchema);
module.exports = Experiance;
