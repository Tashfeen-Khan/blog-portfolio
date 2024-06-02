"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dayjs from "dayjs";
import Tag from "@/app/_component/utilityStyle/catagoryTag";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
const Page = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:4000/admin/api/blogs/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await res.json();
        setBlog(data);
        setFormattedDate(dayjs(data.createdAt).format("DD/MM/YYYY"));
      } catch (error) {
        console.error(error);
      }
    };
    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <section className=" p-2 flex justify-center ">
      <card className="sm:w-3/5">
        <thumbnil className="w-full ">
          <img className="w-full rounded-lg" src={blog.image} />
        </thumbnil>
        <div className="flex mt-4 flex-col justify-between sm:flex-row sm:items-center">
        <div class="user flex   ">
          
          <img
            class="w-10 h-10 rounded-full  object-cover mr-4"
            src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
            alt=""
          />
          <div class="user-info flex justify-between">
            <div>
              <h5 class="text-sm font-medium">Jerome Walton</h5>
              <p class="text-gray-500">{`${blog.status} at ${formattedDate}`}</p>
            </div>
          
          </div>
        </div>
            <div className="h-8 w-16 my-4">
              <Tag title={blog.category} />
              <div className="social flex pt-2  justify-between items-center ">
                <div className="flex items-center">
                  <IoIosHeartEmpty />
                  {blog.meta.likes}
                  
                </div>
                <IoShareSocialOutline style={{ width: '30px' }} />

              </div>
            </div>
            </div>
          <div className="pt-4">
            <p className="">{blog.content}</p>
          </div>
      </card>
    </section>
  );
};

export default Page;
