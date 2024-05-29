"use client"
import { useState } from "react";
import axios from "axios";
import FileBase from "react-file-base64";
import FormBtn from "../Buttons/FormBtn";

const AddBlogForm= () => {
  const [data, setData] = useState({
    title: "",
    content: "",
    author: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleImageUpload = (base64) => {
    setData({
      ...data,
      image: base64,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addBlog = {
      title: data.title,
      content: data.content,
      author: data.author,
      image: data.image
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
      image: ""
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            name="content"
            placeholder="Content"
            value={data.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author"
          >
            Author
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="author"
            name="author"
            type="text"
            placeholder="Author"
            value={data.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => handleImageUpload(base64)}
          />
        </div>
        <div className="flex items-center justify-between">
        
          <FormBtn onClick={handleSubmit} title={"submit"}/>
        </div>
      </form>
    </div>
  );
};

export default AddBlogForm;