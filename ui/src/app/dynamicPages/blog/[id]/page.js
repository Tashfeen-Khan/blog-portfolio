"use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'

const Page = () => {
const { id } = useParams(); 
console.log("id",id);
const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:4000/admin/api/blogs/${id}`);
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
  },[]);
  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <div>
     <section className="m-2">
  <div class="container  ">
    <article className="items-center justify-items-center flex flex-col">
      <div className='bg-black w-full sm:h-2/5 sm:w-2/5 flex justify-center justify-items-center'>
        <img src={blog.image} alt="2" className='w-fit' />
        </div>
      <div class="sm:w-2/4">
      <h2 class="text-2xl font-bold">{blog.title}</h2>
      <span class="text-lg">{blog.author}</span>
        <p>{blog.content}</p>
      </div>
    </article>
  </div>
</section>
    </div>
  );
};

export default Page;

