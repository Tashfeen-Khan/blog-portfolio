const mongoose = require("mongoose");
const EduSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: [true, "Please add the Edu title"],
  },
  Duration: {
    type: String,
    required: [true, "please add time duration"],
  },
  EduExperiance: {
    type: String,
    required: [true, "please add your eductiin experiance"],
  },
  From: {
    type: String,
    required: [true, "where from"],
  },
  catagory: {
    type: String,
    required: [true, "add catagory"],
  }
});
const Edu = mongoose.model("Edu", EduSchema);
module.exports = Edu;
