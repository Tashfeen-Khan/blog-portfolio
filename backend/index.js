const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const Blog = require ("./models/blogsmodel.js")
// const blogRoutes =require ("./routes/blogRoutes.js")
const blogRoutes = require("./routes/blogRoutes");

const app = express();
//midellware
app.use(cors());
app.use(express.json())//this help to send data in j son formate
app.use(express.urlencoded({extended:false  }))
//rotes
app.use ("/api/blogs",blogRoutes)





// mongo db conection 
mongoose
  .connect(
    "mongodb+srv://tashfeenkhan:t96t7EbafOhs3Jri@cluster0.oeoyqai.mongodb.net/portfolio-api?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB Connected!");
    app.listen(4000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connectionfailed");
  });


  // app.get("/", (req, res) => {
//   res.send("Hello from Node API Server Updated");
// });
