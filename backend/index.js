// Import the necessary modules
const express = require("express"); // Express is a web framework for Node.js
const cors = require('cors'); // CORS is middleware to enable Cross-Origin Resource Sharing
const mongoose = require("mongoose"); // Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js

const blogRoutes = require("./routes/blogRoutes"); // Import the blog routes (assuming they are defined in the specified path)
// const selfRoutes =require("./routes/selfRoutes")
const selfRoutes= require ("./routes/selfRoutes")
// Initialize the Express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes, allowing cross-origin requests
app.use(express.json()); // Parse incoming JSON requests and put the parsed data in req.body
app.use(express.urlencoded({ extended: false })); // Parse incoming URL-encoded requests and put the parsed data in req.body

// Routes
app.use("/admin/api/blogs", blogRoutes); // Use the blog routes for any requests to /admin/api/blogs
app.use("/admin/api/self",selfRoutes)
// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://tashfeenkhan:t96t7EbafOhs3Jri@cluster0.oeoyqai.mongodb.net/portfolio-api?retryWrites=true&w=majority&appName=Cluster0" // Connection string for MongoDB Atlas
  )
  .then(() => {
    console.log("DB Connected!"); // Log message indicating successful connection to the database
    // Start the server and listen on port 4000
    app.listen(4000, () => {
      console.log("Server is running on port 4000"); // Log message indicating the server is running
    });
  })
  .catch(() => {
    console.log("Connection failed"); // Log message indicating the database connection failed
  });
