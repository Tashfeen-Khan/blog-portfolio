"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from 'dayjs';
import { fetchBlogsApi } from "../Redux/BlogSclice/blogsclice";
const LatestBlogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((data) => data.blogs.allBlogs);
  
    useEffect(() => {
      dispatch(fetchBlogsApi());
    }, [dispatch]);
    const formattedDate = dayjs(blogs.createdAt).format('MMM DD, YYYY');
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
          
          <div className="card border-solid border-2 border-gray-200 rounded-md shadow-md">
            <div className="image  ">
              <img className="rounded-t-md w-full h-2/4 object-cover" src={blog.image}/>
            </div>
          <div className="card-content mt-2 p-4">
            <div className="content-publiser gap-2  flex  text-center ">
              <div className="publisher-image  flex items-center ">
                <img className="rounded-full h-9 w-9 " src={blog.image}/>
                </div>
                <div className="publisher-detail flex flex-col  text-left ">
            <p className="text-sm text-black ">{blog.author}</p>
            <p className="text-sm">{formattedDate}</p>
                  </div> 
            </div>
              <p className="text-black font-bold text-2xl">
            
                {blog.title}
              </p>
              <p className="leading-relaxed hover:text-green-500 transition-colors duration-500 ease-in-out">
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
