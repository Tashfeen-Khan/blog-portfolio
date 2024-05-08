"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../component/navbar';
import Link from 'next/link'
function BlogPost() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/blogs")
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  
  return (
    <>
    <Navbar/>
    <section className="text-gray-600">
  <div className=" gap-2 sm:mx-4 lg:mx-6 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {blogs.map(blog => (
      <div key={blog.slug}>
      <div className="m-2  rounded overflow-hidden shadow-lg">
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0, maxWidth: '720px', maxHeight: '400px', overflow: 'hidden' }}>
          <img className="absolute top-0 left-0 w-full h-full object-cover" src={blog.image} alt="Card image" />
        </div>
        <div className="px-6 py-4">
        <Link href={`/api/blogs/${blog.slug}`}>{blog.title}</Link>
          <p className="text-gray-700 text-base">Author: {blog.author}</p>
          <p className="text-gray-700 text-base">{blog.content.substring(0, 126)}</p>
          
        <div><button>learn more</button></div>
        </div>
      </div>
      </div>
    ))}
  </div>
</section>


  </>
  );
}

export default BlogPost;
