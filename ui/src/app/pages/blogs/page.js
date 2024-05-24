"use client"
import React, { useState, useEffect } from 'react';

import Navbar from '../../component/navbar';
import { useRouter } from 'next/navigation';
import { useDispatch,useSelector } from 'react-redux';
import { fetchBlogsApi } from '../../Redux/BlogSclice/blogsclice';
function BlogPost() {
  const dispatch = useDispatch()
  const router = useRouter();
  const blogs = useSelector((data)=>data.blogs.allBlogs)

console.log("blogsdata",blogs)
  useEffect(() => {
   dispatch(fetchBlogsApi())
  }, [dispatch]);

  return (
    <>
    <Navbar/>
    <section className="text-gray-600">
      <div className="m-4 gap-2 sm:mx-4 lg:mx-6 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       
        {blogs && blogs.length > 0 && blogs.map(blog => (
          <div key={blog._id} className="shadow-md border border-gray-300 rounded-lg overflow-hidden w-full">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <img className="absolute top-0 left-0 w-full h-full object-cover" src={blog.image} alt="div image" />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-xl text-gray-900">{blog.title}</h4>
              <p className="text-sm uppercase font-bold text-gray-500">{blog.author}</p>
              <p className="text-gray-400 mt-2">{blog.content.substring(0, 126)}</p>
              <button type="button" className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => router.push(`/dynamicPages/blog/${blog._id}`)}>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
  );
}

export default BlogPost;
