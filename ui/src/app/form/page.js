"use client";
import React from "react";
import { useState } from "react";
import Navbar from "../_component/navbar";
import AddBlogForm from "../_component/forms/addBlogForm";
import BasicBtn from "../_component/Buttons/BasicBtn";
import UpdateSelf from "../_component/forms/updateSelf";
import {  useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const { selfDatas, isLoading, error } = useSelector((state) => state.self);
  const [activeComponent, setActiveComponent] = useState("");
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };
  return (
    <>
      <Navbar />

      <div>
        <div className="flex gap-2 bg-orange-200 p-2">
          <BasicBtn
            title="AddBlog"
            onClick={() => handleButtonClick("addBlog")}
          />
        </div>
        {selfDatas.map((data, index) => (
          <>
          <div>
          <BasicBtn
            title="UpDate-Self"
            onClick={() => router.push(`/dynamicPages/updateself/${data._id}`)}
          />
          </div>
          </>
        ))}
        {activeComponent === "addBlog" && <AddBlogForm />}
        {activeComponent === "updateSelf" && <UpdateSelf />}
      </div>
    </>
  );
};

export default Page;
