const express = require("express");
const Blog = require ('../models/blogsmodel.js')
const router =express.Router();
const {getBlogs,getBlog,createBlog,updateBlog,deleteBlog} =require ("../controller/blogController.js")

router.get("/",getBlogs)
router.get("/:id", getBlog);

router.post("/", createBlog);

// // update a Blogs
router.put("/:id", updateBlog);

// // delete a Blogs
router.delete("/:id", deleteBlog);
module.exports= router