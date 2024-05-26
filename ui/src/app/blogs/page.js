"use client";
import React, { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogsApi } from "../../Redux/BlogSclice/blogsclice";
import Navbar from "../_component/navbar";
import { Button } from "flowbite-react";
function BlogPost() {
  const dispatch = useDispatch();
  const router = useRouter();
  const blogs = useSelector((data) => data.blogs.allBlogs);

  console.log("blogsdata", blogs);
  useEffect(() => {
    dispatch(fetchBlogsApi());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <section className="text-gray-600">
        <div className="m-4 gap-2 sm:mx-4 lg:mx-6 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  p-2">
          {blogs &&
            blogs.length > 0 &&
            blogs.map((blog) => (
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src={blog.image} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {blog.title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <Button  type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={() => router.push(`/dynamicPages/blog/${blog._id}`)}>Read More</Button>

                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default BlogPost;
