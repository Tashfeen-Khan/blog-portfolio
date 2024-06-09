"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { updateBlogApi } from "../../../../Redux/BlogSclice/blogsclice";
import BasicInputField from "../../../_component/feilds/basicInputFeild";
import Navbar from "../../../_component/navbar";
import BasicBtn from "../../../_component/Buttons/BasicBtn";

const Page = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    status: "draft",
    image: "",
  });

  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogs.allBlogs.find((b) => b._id === id));

  useEffect(() => {
    if (blog) {
      setData({
        title: blog.title,
        content: blog.content,
        author: blog.author,
        category: blog.category,
        status: blog.status,
        image: blog.image,
      });
    }
  }, [blog]);

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
    const updatedBlog = {
      title: data.title,
      content: data.content,
      author: data.author,
      category: data.category,
      status: data.status,
      image: data.image,
    };
    dispatch(updateBlogApi({ id, updatedData: updatedBlog }))
      .then((response) => {
        router.push('/blogs');
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  return (
    <>
    <Navbar/>
    <div className="flex flex-col sm:flex-row m-4">
    <div className="w-full sm:w-2/5 flex justify-center text text-2xl font-bold sm:items-center sm:justify-start">
          <h1>Add New Blog</h1>
        </div>
      <form className= "  w-full sm:w-3/5 items-center shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <BasicInputField
            id="title"
            label="Title"
            variant="outlined"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <BasicInputField
            id="content"
            label="Content"
            variant="outlined"
            name="content"
            value={data.content}
            onChange={handleChange}
            multiline
            rows={4}
          />
        </div>
        <div className="mb-4">
          <BasicInputField
            id="author"
            label="Author"
            variant="outlined"
            name="author"
            value={data.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <BasicInputField
            id="category"
            label="Category"
            variant="outlined"
            name="category"
            value={data.category}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
            Status
          </label>
          <select
            className="shadow appearance-none border rounded w-full lg:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="status"
            name="status"
            value={data.status}
            onChange={handleChange}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </div>
        <div className="mb-4">
          <FileBase type="file" multiple={false} onDone={({ base64 }) => handleImageUpload(base64)} />
        </div>
        <div className="flex items-center justify-between">
          {/* <button type="submit" className="btn btn-primary">Update</button> */}
        <BasicBtn title="update"type="submit" />
        </div>
      </form>
      </div>
    </>
  );
};

export default Page;
