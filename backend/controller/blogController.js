const Blog = require ('../models/blogsmodel.js')

const getBlogs =async( re,res)=>{
    try {
        const blogs =await Blog.find({});
        res.status(200).json(blogs)
         
      } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
      }
}

// get single  blog 
const getBlog=async(req,res)=>{
    try {
     const {id}=req.params;
     const blog=await Blog.findById(id);
     res.status(200).json(blog);
       
    } catch (error) {
      console.error(error);
      res.status(500).json({message: error.message});
    }
  }
  // post a blog 
const createBlog=async (req, res) => {
    try {
      const blog=await Blog.create(req.body)
      res.status(200).json(blog)
    } catch (error) {
      console.error(error);
      res.status(500).json({message: error.message});
    }
  };
  // update blog 
const updateBlog= async (req, res) => {
    try {
      const { id } = req.params;
      const singleBlog = await Blog.findByIdAndUpdate(id, req.body);
      if (!singleBlog) {
        return res.status(400).json({ message: "Blog is not found" });
      }
      const updatedBlog = await Blog.findById(id);
      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  // delete the blog 
const deleteBlog =async (req, res) => {
    try {
      const { id } = req.params;
      const singleBlog = await Blog.findByIdAndDelete(id);
      if (!singleBlog) {
        return res.status(400).json({ message: "Blog is not found" });
      }
  
      res.status(200).json({message:"Blog was deleted"});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
module.exports={
    getBlogs ,getBlog,createBlog,updateBlog,deleteBlog
}
   