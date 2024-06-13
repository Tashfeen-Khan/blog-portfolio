"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import FormBtn from "../Buttons/FormBtn";
import BasicInputField from "../feilds/basicInputFeild";
import BasicSelect from "../feilds/BasicSelect"; // Import BasicSelect
import UploadFile from "../Buttons/UploadFile";
import { useRouter } from "next/navigation";
const AddBlogForm = () => {
  const router = useRouter();
  const [data, setData] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    status: "draft",
    image: "",
    meta: {
      views: 8,
      likes: 5,
      comments: 85,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setData((prevState) => ({
        ...prevState,
        image: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addBlog = {
      title: data.title,
      content: data.content,
      author: data.author,
      category: data.category,
      status: data.status,
      image: data.image,
      authorimg: data.meta,
      meta: data.meta,
    };
    axios
      .post("http://localhost:4000/admin/api/blogs", addBlog)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
    setData({
      title: "",
      content: "",
      author: "",
      category: "",
      status: "draft",
      image: "",
      authorimg: "",

      meta: {
        views: 8,
        likes: 5,
        comments: 85,
      },
    });
  };

  return (
  <>
  <div className="flex flex-col sm:flex-row m-4">
   <div className="w-full sm:w-2/5 flex justify-center text text-2xl font-bold sm:items-center sm:justify-start">
          <h1>Add New Blog</h1>
        </div>
      <div className= "  w-full sm:w-3/5 items-center shadow-md rounded px-8 pt-6 pb-8 mb-4">
       
        <div className="gap-2 w-auto">
          <BasicInputField
            label={"Title"}
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <BasicInputField
            label={"Content"}
            name="content"
            value={data.content}
            onChange={handleChange}
          />
          <BasicInputField
            label={"Author"}
            name="author"
            value={data.author}
            onChange={handleChange}
          />
          <BasicInputField
            label={"Category"}
            name="category"
            value={data.category}
            onChange={handleChange}
          />
        
        <BasicSelect
          label="Status"
          name="status"
          value={data.status}
          onChange={handleChange}
          options={[
            { value: "draft", label: "Draft" },
            { value: "published", label: "Published" },
            { value: "archived", label: "Archived" },
          ]}
        />
        <div className="mb-4">
          
          <UploadFile onChange={handleFileChange} label="Upload Image" />
        </div>
        <div className="mb-4">
          
          <UploadFile onChange={handleFileChange} label="Upload author image" />
        </div>
        <div className="flex items-center justify-between">
        <FormBtn
  onClick={(e) => {
    e.preventDefault(); // preventDefault needs to be called here
    handleSubmit(e); // pass the event object to handleSubmit
    router.push("/blogs");
  }}
  title={"Submit"}
/>
</div>
        </div>
      </div>
      </div>
      </>
  );
};

export default AddBlogForm;
