const mongoose = require("mongoose");

const SelfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add the Self's name"],
  },
  email: {
    type: String,
    required: [true, "Please add the Self's email"],
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  shortBio: {
    type: String,
    required: [true, "Please add the Self's bio"],
  },
  bio: {
    type: String,
    required: [true, "Please add the Self's bio"],
  },
  image: {
    type: String,
    required: [true, "Please add the Self's profile image"],
  },
  social: {
    twitter: {
      type: String,
      required: [false, "Please add the Self's Twitter profile"],
    },
    linkedin: {
      type: String,
      required: [false, "Please add the Self's LinkedIn profile"],
    },
    github: {
      type: String,
      required: [false, "Please add the Self's GitHub profile"],
    },
    facebook: {
      type: String,
      required: [false, "Please add the Self's Facebook profile"],
    },
    instagram: {
      type: String,
      required: [false, "Please add the Self's Instagram profile"],
    },
   
  },
  workField: {
    type: String,
    required: [true, "Please add the Self's work field"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please add the Self's phone number"],
    match: [
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      "Please add a valid phone number",
    ],
  },
  address: {
    type: String,
    required: [true, "Please add the Self's address"],
  },
  age: {
    type: Number,
    required: [true, "Please add the Self's age"],
    min: [0, "Age cannot be negative"],
  },
  birthday: {
    type: String,
    required: [true, "Please add the birthday"],

  },
  degree: {
    type: String,
    required: [true, "Please add the Self's degree"],
  },
  openTowork: {
    type: String,
    required: [true, "Please add the openTowork"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Self = mongoose.model("Self", SelfSchema);

module.exports = Self;
