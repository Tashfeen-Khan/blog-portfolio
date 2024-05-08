// const mongoose = require("mongoose");

// const BlogSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: [true, "please add title of blog"],
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   image: {
//     type: String,
//     required: false,
//   },
  
// });

// const Blog = mongoose.model("Blog", BlogSchema);

// module.exports = Blog;
const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title:String,
  author:String,
  content:String,
  image:String,
  slug:String,
  // title: {
  //   type: String,
  //   required: [true, "Please add a title for the blog post"],
  // },
  // content: {
  //   type: String,
  //   required: true,
  // },
  // author: {
  //   type: String,
  //   required: true,
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  // tags: [String],
  // categories: [String],
  // slug: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // image: {
  //   type: String,
  //   required: false,
  // },
  // status: {
  //   type: String,
  //   enum: ["draft", "published", "archived"],
  //   default: "draft",
  // },
  // meta: {
  //   views: {
  //     type: Number,
  //     default: 0,
  //   },
  //   likes: {
  //     type: Number,
  //     default: 0,
  //   },
  //   comments: {
  //     type: Number,
  //     default: 0,
  //   },
  // },
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
