"use client"
import React, { useEffect, useState } from "react";

import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchSelfApi } from "../Redux/SelfSclice/selfSclice";
import { FadeLoader } from 'react-spinners';
import BasicBtn from "../app/_component/Buttons/BasicBtn";
const AboutMe = () => {
  let [color, setColor] = useState("#0073E5");
  const router = useRouter();
  const dispatch = useDispatch();
  const { selfDatas, isLoading, error } = useSelector((state) => state.self);

  useEffect(() => {
    dispatch(fetchSelfApi());
  }, [dispatch]);

  if (isLoading) {
    <div className="flex justify-center items-center h-screen">
        <FadeLoader  loading={isLoading} className='text-light-Text' /> {/* Display the spinner */}
      </div>
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
  
      <div className= "bg-primary-Bg about-me container mx-auto py-2 ">
        <div className="section-title text-primary-Text  flex flex-col px-8 sm:px-16  items-center">
          <h2 className="font-medium text-light-H_blue ">About</h2>
          <p className="text-4xl  font-extrabold md:text-5xl text-light-H_black dark:text-dark-text">
            Learn more about me
          </p>
        </div>
         
          {selfDatas.map((data, index) => (
            <>
        <div className=" grid grid-cols-1 lg:grid-cols-2 items-center  ">
          <div className="p-2 flex  justify-center ">
            <img className="rounded-lg" src={data.image} alt="Background Image" />
            </div>
          <div className=" px-2 sm:px-0 lg:col-span-1 pt-4 ">
          <BasicBtn
            title="UpDate-Self"
            onClick={() => router.push(`/dynamicPages/updateself/${data._id}`)}
          />
            <h3 className="text-2xl text-light-button_bg ">
              {data.workField}
            </h3>
            <p className="italic text-light-Text">
            {data.shortBio}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-1 text-primary-Text">
              <div className=" w-full ">
                <ul className="">
                  <li className="flex  my-2 gap-1">
                    <IoIosArrowForward className=" text-light-H_black dark:text-light-Text  text-xl" />{" "}
                    <strong  className="text-light-Cardborder">Birthday:</strong> <span className="text-light-Text dark:text-light-Bg ">{data.birthday}</span>
                  </li>
                  <li className="flex items-center py-2  gap-1">
                    <IoIosArrowForward className=" text-light-H_black  text-xl dark:text-light-Text " />{" "}
                    <strong className="text-light-Cardborder">Website:</strong> <span className="text-light-Text dark:text-light-Bg ">www.example.com</span>
                  </li>
                  <li className="flex items-center py-2 gap-1">
                    <IoIosArrowForward className="  text-light-H_black text-xl dark:text-light-Text" />{" "}
                    <strong className="text-light-Cardborder">Phone:</strong> <span className="text-light-Text dark:text-light-Bg ">{data.phoneNumber}</span>
                  </li>
                  <li className="flex items-center py-2 gap-1">
                    <IoIosArrowForward className="  text-light-H_black text-xl dark:text-light-Text" />{" "}
                    <strong className="text-light-Cardborder">City:</strong> <span className="text-light-Text dark:text-light-Bg ">{data.address}</span>
                  </li>
                </ul>
              </div>
              <div className=" w-full ">
                <ul>
                  <li className="flex items-center py-2 gap-1 ">
                    <IoIosArrowForward className=" text-light-H_black  text-xl dark:text-light-Text" />{" "}
                    <strong className="text-light-Cardborder">Age:</strong> <span className="text-light-Text dark:text-light-Bg ">{data.age}</span>
                  </li>
                  <li className="flex items-center py-2 gap-1">
                    <IoIosArrowForward className="  text-light-H_black text-xl dark:text-light-Text" />{" "}
                    <strong className="text-light-Cardborder">Degree:</strong> <span className="text-light-Text dark:text-light-Bg ">{data.degree}</span>
                  </li>
                  <li className="flex items-center py-2 gap-1 ">
                    <IoIosArrowForward className="  text-light-H_black text-xl flex flex-wrap dark:text-light-Text" />{" "}
                    <strong className="text-light-Cardborder">Email:</strong> <span className="text-light-Text dark:text-light-Bg ">{data.email}</span>
                  </li>
                  <li className="flex items-center py-2 gap-1">
                    <IoIosArrowForward className="  text-light-H_black text-xl dark:text-light-Text" />{" "}
                    <strong className="text-light-Cardborder">Freelance:</strong> <span className="text-light-Text dark:text-light-Bg ">{data.openTowork}</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-light-Text sm:pt-2 mr-4">
          {data.bio}
            </p>
        
          </div>
          
        </div>
          </>
      ))}
        
      </div>
   
  );
};

export default AboutMe;
