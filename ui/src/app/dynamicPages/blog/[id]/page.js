"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dayjs from "dayjs";
import { GoShareAndroid } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import Tag from "../../../_component/utilityStyle/catagoryTag";

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
    <>
    <div className="bg-slate-50">
    <header className="p-4  flex justify-center">
    <div className="w-full md:w-3/5  ">
    
    <p className="px-2 rounded-2xl  bg-purple-400 text-purple-950 w-fit flex justify-center items-center font-medium"><Tag title={blog.category} /></p>
    <h1 className="text-4xl font-bold py-2">{blog .title}</h1>
    <p className="text-gray-500">{blog.content}</p>
    
    <p className="w-full border-b py-4 border-neutral-200"></p>
    <div className="grid sm:grid-cols-2 justify-between ">
<div className="flex">
<div className="bg-purple-400 my-4 w-12 h-12 rounded-full overflow-hidden">
  <img className="w-full h-full object-cover" src={blog.image} alt="Blog Image"/>
</div>
<div className="flex pl-4 flex-col justify-center">

<h5 className="font-bold text-primary-Text">Foulcher Nathanil</h5>
<p className="font-lights text-sm">{`${blog.status} at ${formattedDate}`}</p>
</div>

</div>
<div className="flex py-4 gap-2 sm:justify-end">
<div className="text-xl flex justify-center items-center text-center hover:bg-pink-200 hover:text-pink-700 w-20 font-light rounded-full"><IoIosHeartEmpty/>{blog.meta.likes}</div>
<p className="w-4 border-r border-neutral-200"></p>
<p className="text-2xl flex justify-center items-center bg-neutral-200 w-8 rounded-full sm:w-12"><GoShareAndroid /></p>

  

</div>
    </div>
    </div>
    </header>
    <container className="flex justify-center">
      <div className="p-4 md:w-3/4">
      <div className="w-full  ">
      <img className="w-full rounded-xl" src={blog.image}/>
      </div>
      <div className="mt-4">
        <p className="text-lg">{blog.content}</p>
      </div>
      </div>
    </container>
    </div>
    </>
    // <section className=" p-2 flex justify-center ">
    //   <card className="sm:w-3/5">
    //     <thumbnil className="w-full ">
    //       <img className="w-full rounded-lg" src={blog.image} />
    //     </thumbnil>
    //     <div className="flex mt-4 flex-col justify-between sm:flex-row sm:items-center">
    //     <div class="user flex   ">
          
    //       <img
    //         class="w-10 h-10 rounded-full  object-cover mr-4"
    //         src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
    //         alt=""
    //       />
    //       <div class="user-info flex justify-between">
    //         <div>
    //           <h5 class="text-sm font-medium">Jerome Walton</h5>
    //           <p class="text-gray-500">{`${blog.status} at ${formattedDate}`}</p>
    //         </div>
          
    //       </div>
    //     </div>
    //         <div className="h-8 w-16 my-4">
    //           <Tag title={blog.category} />
    //           <div className="social flex pt-2  justify-between items-center ">
    //             <div className="flex items-center">
    //               <IoIosHeartEmpty />
    //               {blog.meta.likes}
                  
    //             </div>
    //             <IoShareSocialOutline style={{ width: '30px' }} />

    //           </div>
    //         </div>
    //         </div>
    //       <div className="pt-4">
    //         <p className="">{blog.content}</p>
    //       </div>
    //   </card>
    // </section>
  );
};

export default Page;
