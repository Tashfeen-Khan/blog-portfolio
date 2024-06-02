"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogsApi } from "../../Redux/BlogSclice/blogsclice";

import BlogCard from "../_component/cards/BlogCard";
import Navbar from "../_component/navbar";

function BlogPost() {
  const dispatch = useDispatch();
  const blogs = useSelector((data) => data.blogs.allBlogs);

  useEffect(() => {
    dispatch(fetchBlogsApi());
  }, [dispatch]);
  

  return (
    <>
      <Navbar />
      <section className="text-gray-600">
      <div className="p-2 font-extrabold text-4xl sm:text-6xl"> 
          <h1>blogs.</h1>
        </div>
  <div className="gap-2 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
    {blogs && blogs.length > 0 &&
      [...blogs].reverse().map((blog) => (
        <>
        
        <BlogCard key={blog.id} blog={blog} />
        </>
      ))
    }
  </div>
</section>

    </>
  );
}

export default BlogPost;
