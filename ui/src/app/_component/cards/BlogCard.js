"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { deleteBlogApi } from "../../../Redux/BlogSclice/blogsclice";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import BasicBtn from "../Buttons/BasicBtn";
import Like from "../Buttons/like";
import Share from "../Buttons/share";
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
  const formattedDate = dayjs(blog.createdAt).format("DD/MM/YYYY");
  return (
    <>
    <div className=" drop-shadow-xl rounded-3xl cursor-pointer border-2 border-light-Muted shadow-lg shadow-light-Muted  ">
      <div>
        <img className="rounded-t-3xl w-full" src={blog.image}/>
      </div>
      <div className=" p-4 rounded-b-3xl">
      <div className="flex ">
<div className=" my-4 w-8 h-8 rounded-full overflow-hidden">
  <img className="w-full h-full object-cover" src={blog.image} alt="Blog Image"/>
</div>
<div className="flex pl-4 flex-col  justify-center sm:flex-row sm:items-center sm:gap-2 ">

<h5 className="text-sm font-semibold text-light-Primary">Foulcher Nathanil</h5>
<p className="font-lights text-sm text-light-Primary">mm</p>
</div>
</div>
<h5 className="text-xl  font-bold text-light-Secondary ">{blog .title}</h5>
<div className="flex justify-between px-2 items-center pt-2">

<Like/>
<Share/>
  <button
            className="font-bold text-blue-600 flex items-center text-lg "
            onClick={() => router.push(`/dynamicPages/blog/${blog._id}`)}
          >
            Read More{" "}
            <spam>
              {/* <FaLongArrowAltRight className="text-3xl mt-1" /> */}
            </spam>
          </button>
</div>
</div>
<div className="flex flex-wrap justify-between gap-2 p-3">
          <BasicBtn onClick={() => router.push("/form")} title={"Create"} />
          <BasicBtn onClick={() => handleUpdate()} title={"Update"} />
          <BasicBtn onClick={() => handleDelete()} title={"Delete"} />
        </div>
    </div>

      {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <a href="blog-single.html">
          <img src={blog.image} alt="" className="w-full h-64 object-cover" />
        </a>
        <div className="relative p-4">
          <div className="absolute bottom-55  right-50 bg-gray-200 text-gray-700 py-1 px-2 rounded-full inline-block">
            <h6 className="text-sm">{blog.category}</h6>
          </div>
          <h3 className="mt-2 text-xl font-semibold">
            <a href="blog-single.html">{blog.title}</a>
          </h3>
          <p className="mt-2 text-gray-600">
          {blog.content}
          </p>
          <div className="flex items-center mt-4">
            <a href="#" className="flex items-center">
              <img
                src={blog.authorimg}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2 text-sm">{blog.author}</span>
            </a>
            <div className="ml-auto text-gray-600">
            <p>{blog.status}</p>
              <span className="bi bi-clock" /> 10 min
            </div>
          </div>
          <button
            className="font-bold text-blue-600 flex items-center text-lg "
            onClick={() => router.push(`/dynamicPages/blog/${blog._id}`)}
          >
            Read More{" "}
            <spam>
              <FaLongArrowAltRight className="text-3xl mt-1" />
            </spam>
          </button>
        </div>
        <div className="flex flex-wrap justify-between gap-2 p-3">
          <BasicBtn onClick={() => router.push("/form")} title={"Create"} />
          <BasicBtn onClick={() => handleUpdate()} title={"Update"} />
          <BasicBtn onClick={() => handleDelete()} title={"Delete"} />
        </div>
      </div> */}

      
    </>
  );
}
