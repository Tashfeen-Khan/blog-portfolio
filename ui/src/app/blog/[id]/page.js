"use client"
// pages/blog/[id].js

import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom'; // Add this line
import { useParams } from 'next/navigation'

const Page = () => {
  const { id } = useParams(); // Change this line

  console.log("id",id);

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/blogs/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch blog');
        }
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={blog.image}/>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default Page;

