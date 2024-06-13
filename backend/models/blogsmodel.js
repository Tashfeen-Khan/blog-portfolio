const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please add title of blog"],
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  authorimg: {
    type: String,
    required: true,
  },
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Self',
  //   required: true,
  // },
  category: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ["draft", "published", "archived"],
    default: "draft",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: false,
  },
  meta: {
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
  },
});



const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
