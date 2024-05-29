"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogsApi } from "../../Redux/BlogSclice/blogsclice";
import Navbar from "../_component/navbar";
import BlogCard from "../_component/cards/BlogCard";
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
        <div className=" gap-3 p-2 lg:mx-6 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  ">
          {blogs &&
            blogs.length > 0 &&
            blogs.map((blog) => (
              <BlogCard className="w-400px" blog={blog} />
             
            ))}
        </div>
      </section>
    </>
  );
}

export default BlogPost;
