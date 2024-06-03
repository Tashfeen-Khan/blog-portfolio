"use client";
import * as React from 'react';
import { useRouter } from "next/navigation";
import Button from '@mui/material/Button';
import BlogBtn from '../Buttons/BlogBtn';
import { deleteBlogApi } from '../../../Redux/BlogSclice/blogsclice';
import { useDispatch } from 'react-redux';

import { FaLongArrowAltRight } from "react-icons/fa";
import dayjs from 'dayjs';
export default function BlogCard({ blog }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDelete = () => {
    dispatch(deleteBlogApi(blog._id));
  };

  const handleUpdate = () => {
    router.push(`/dynamicPages/updateform/${blog._id}`);
    console.log("handle id " + blog._id);
  };

  if (!blog) {
    return null;
  }

  const formattedDate = dayjs(blog.createdAt).format('DD/MM/YYYY');

  return (
  
  <>
<div className="bg-white rounded-lg shadow-lg overflow-hidden">
  <a href="blog-single.html"><img src={blog.image} alt="" className="w-full h-64 object-cover" /></a>
  <div className="relative p-4">
    <div className="absolute bottom-55  right-50 bg-gray-200 text-gray-700 py-1 px-2 rounded-full inline-block">
      <h6 className="text-sm">Travel</h6>
    </div>
    <h3 className="mt-2 text-xl font-semibold"><a href="blog-single.html">See more ideas about Travel</a></h3>
    <p className="mt-2 text-gray-600">
      Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
      a pellentesque nec,
      egestas non nisi.
    </p>
    <div className="flex items-center mt-4">
      <a href="#" className="flex items-center">
        <img src="assets/img/testimonial-2.jpg" alt="" className="w-8 h-8 rounded-full" />
        <span className="ml-2 text-sm">Morgan Freeman</span>
      </a>
      <div className="ml-auto text-gray-600">
        <span className="bi bi-clock" /> 10 min
      </div>
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
                <button
              className="font-bold text-blue-600 flex items-center text-lg "
              
              onClick={() => router.push(`/dynamicPages/blog/${blog._id}`)}>
              Read More{" "}
              <spam>
                <FaLongArrowAltRight  className="text-3xl mt-1" />
              </spam>
            </button>
              </div>
              <div className='flex flex-wrap justify-between gap-2 p-3'>
           <BlogBtn onClick={() => router.push("/form")} title={"Create"} />
           <BlogBtn onClick={() => handleUpdate()} title={"Update"} />
           <BlogBtn onClick={() => handleDelete()} title={"Delete"} />
         </div>
              </div> */}
    </>
  
  );
}
