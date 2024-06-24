"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogsApi } from "../../Redux/BlogSclice/blogsclice";

import BlogCard from "../_component/cards/BlogCard";
import Navbar from "../_component/navbar";
import Filterbtn from "../_component/Buttons/filterbtn";

function BlogPost() {
  const dispatch = useDispatch();
  const blogs = useSelector((data) => data.blogs.allBlogs);

  useEffect(() => {
    dispatch(fetchBlogsApi());
  }, [dispatch]);
  

  return (
    <>
      <Navbar />
      <section className="bg-light-Bg dark:bg-dark-bg">
        <div className="p-4 sm:px-12">
    <Filterbtn title="Categories" />
    </div>
  <div className="gap-4 p-4 sm:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   ">
    {blogs && blogs.length > 0 &&
      [...blogs].reverse().map((blog) => (
        <>
        
        <BlogCard  key={blog.id} blog={blog} />
        </>
      ))
    }
  </div>
</section>

    </>
  );
}

export default BlogPost;
