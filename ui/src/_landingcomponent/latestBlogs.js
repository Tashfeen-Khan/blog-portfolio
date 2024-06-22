"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { fetchBlogsApi } from "../Redux/BlogSclice/blogsclice";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoShareAndroid } from "react-icons/go";
const LatestBlogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((data) => data.blogs.allBlogs);

  useEffect(() => {
    dispatch(fetchBlogsApi());
  }, [dispatch]);
  const formattedDate = dayjs(blogs.createdAt).format("MMM DD, YYYY");
  return (
    <section className="text-gray-600 body-font">
      <div className="px-5 py-12 sm:px-12 mx-auto">
        <div className="flex flex-col  w-full mb-5 justify-center sm:items-center">
          <h1 className=" sm:text-3xl text-2xl font-medium   mb-4 text-gray-900">
            Latest Articles
          </h1>
          <p className="text-xl">
            Discover the most outstanding articles in all topics of tech.
          </p>
        </div>
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {blogs &&
            blogs.length > 0 &&
            [...blogs]
              .reverse()
              .slice(0, 4)
              .map((blog) => (
                <>
                  <div className="relative bg-black rounded-md h-full w-full cursor-pointer group">
                    <img
                      className="h-full w-full rounded-md"
                      src={blog.image}
                      alt="Blog image"
                    />
                    <div className="absolute top-0 left-0 right-0 p-2 hidden group-hover:flex justify-between">
                      <div className="bg-light-Accent shadow-md shadow-light-Muted flex justify-center items-center w-16 h-8 text-lg rounded-xl">
                        <IoIosHeartEmpty />
                        35
                      </div>
                      <div className="text-lg bg-slate-50 hover:bg-slate-200 w-10 h-10 flex justify-center items-center rounded-md">
                        <GoShareAndroid />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-4 right-4  text-white p-2 rounded-b-md ">
                      <p className="w-fit px-2 rounded-md bg-red-100 text-red-400 ">
                        {blog.category}
                      </p>
                      <p className="font-bold">{blog.title}</p>
                      <div className="flex gap-2">
                        <p className=" font-light text-sm">{blog.author}.</p>
                        <p className="font-light text-sm">{formattedDate}</p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="card border-solid border-2 border-gray-200 rounded-md shadow-md">
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
              </div> */}
                </>
              ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
