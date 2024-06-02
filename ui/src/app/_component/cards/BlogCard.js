"use client";
import * as React from 'react';
import { useRouter } from "next/navigation";
import Button from '@mui/material/Button';
import BlogBtn from '../Buttons/BlogBtn';
import { deleteBlogApi } from '../../../Redux/BlogSclice/blogsclice';
import { useDispatch } from 'react-redux';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import dayjs from 'dayjs';
import Tag from '../utilityStyle/catagoryTag';
import { RiArrowDropDownLine } from "react-icons/ri";
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
    <div className=' bg-white rounded-lg shadow-md overflow-hidden'>
          <div className="bg-gray-700">
            <img className="w-full h-2/4 object-cover" src={blog.image} alt="g1" />
          </div>

          <div className="mt-2 space-y-2  ">
            <h1 className="font-semibold text-2xl">
              {blog.title}
            </h1>
            <p>
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
        </div>
    </>
    // <div className='h-[800px] bg-white rounded-lg shadow-md overflow-hidden'>
    //   <img
    //     className="w-full h-2/4 object-cover"
    //     src={blog.image}
    //     alt={blog.title}
    //   />
    //   <div className="card-body p-6 flex flex-col items-start">
    //     <div className="user flex mt-auto">
    //       <img
    //         className="w-10 h-10 rounded-full object-cover mr-4"
    //         src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
    //         alt=""
    //       />
    //       <div className="user-info">
    //         <h5 className="text-sm font-medium">Jerome Walton</h5>
    //         <small className="text-gray-500">{`${blog.status} at ${formattedDate}`}</small>
    //       </div>
    //     </div>
    //     <span>
    //       <Tag title={blog.category}/>
    //     </span>
    //     <h4 className="mt-2 mb-4 text-lg font-semibold">
    //       {blog.title}
    //     </h4>
    //     <p className="text-gray-700 mb-4">
    //       {blog.content.slice(0, 150)}{blog.content.length > 20 ? "..." : ""}
    //     </p>
    //     <div className='w-full social justify-between grid grid-cols-2'>
    //       <div className='flex items-center gap-4'>
    //         <div className='flex items-center'>
    //           <IoIosHeartEmpty />{blog.meta.likes}
    //         </div>
    //         <IoShareSocialOutline />
    //       </div>
    //       <div className='flex justify-center items-center'>
    //         <Button size="small" onClick={() => router.push(`/dynamicPages/blog/${blog._id}`)}>Read More</Button><FaLongArrowAltRight />
    //       </div>
    //     </div>
    //     <div className='flex flex-wrap justify-between gap-2 p-3'>
    //       <BlogBtn onClick={() => router.push("/form")} title={"Create"} />
    //       <BlogBtn onClick={() => handleUpdate()} title={"Update"} />
    //       <BlogBtn onClick={() => handleDelete()} title={"Delete"} />
    //     </div>
    //   </div>
    // </div>
  );
}
