const mongoose = require("mongoose");
const WorkSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: [true, "Please add the Edu title"],
  },
  image: {
    type: String,
    required: false,
  },
  catagory:{
    type:String,
    required:[true,"Please add catagory"]
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  Visit: {
    type: String,
    required: [false, "Please add the visiting list"]
  },
});
const Work = mongoose.model("work", WorkSchema);
module.exports = Work;
