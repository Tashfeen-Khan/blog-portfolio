"use client"
import { fetchBlogsApi } from "@/Redux/BlogSclice/blogsclice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const LatestBlogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((data) => data.blogs.allBlogs);
  
    useEffect(() => {
      dispatch(fetchBlogsApi());
    }, [dispatch]);
  return (
    
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col  w-full mb-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Read Blogs
          </h1>
        </div>
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {blogs && blogs.length > 0 &&
         [...blogs].reverse().slice(0, 3).map((blog) => (
          <>
          
            <div className="flex relative ">
                <div className="w-fulls">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={blog.image}
              /></div>
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                {blog.category}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                 {blog.title}
                </h1>
                <p className="leading-relaxed">
                {blog.content.slice(0, 150)}{blog.content.length > 20 ? "..." : ""}
                </p>
              </div>
            </div>
         
          </>
        ))
      }
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
