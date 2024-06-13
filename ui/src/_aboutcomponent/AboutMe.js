"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Me from "../../public/me.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchSelfApi } from "../Redux/SelfSclice/selfSclice";
import BasicBtn from "../app/_component/Buttons/BasicBtn";
const AboutMe = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { selfDatas, isLoading, error } = useSelector((state) => state.self);

  useEffect(() => {
    dispatch(fetchSelfApi());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
  
      <div className= "bg-primary-Bg about-me container mx-auto py-2 ">
        <div className="section-title text-primary-Text  flex flex-col px-8 sm:px-16  items-center">
          <h2 className="font-medium text-primary-h1">About</h2>
          <p className="text-4xl text-primary-h1 font-extrabold md:text-5xl ">
            Learn more about me
          </p>
        </div>
         
          {selfDatas.map((data, index) => (
            <>
        <div className=" grid grid-cols-1 lg:grid-cols-2 items-center  ">
          <div className="p-2 flex h-3/4 justify-center ">
            <img className="rounded-lg" src={data.image} alt="Background Image" />
            </div>
          <div className=" px-2 sm:px-0 lg:col-span-1 pt-4 ">
            <h3 className="text-2xl text-primary-h1">
              {data.workField}
            </h3>
            <p className="italic text-primary-Text">
            {data.shortBio}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-1 text-primary-Text">
              <div className=" w-full ">
                <ul className="">
                  <li className="flex  my-2 gap-1">
                    <IoIosArrowForward className="text-primary-Btn text-xl" />{" "}
                    <strong>Birthday:</strong> <span>{data.birthday}</span>
                  </li>
                  <li className="flex items-center py-2  gap-1">
                    <IoIosArrowForward className="text-primary-Btn text-xl" />{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li className="flex items-center py-2 gap-1">
                    <IoIosArrowForward className="text-primary-Btn text-xl" />{" "}
                    <strong>Phone:</strong> <span>{data.phoneNumber}</span>
                  </li>
                  <li className="flex items-center py-2 gap-1">
                    <IoIosArrowForward className="text-primary-Btn text-xl" />{" "}
                    <strong>City:</strong> <span>{data.address}</span>
                  </li>
                </ul>
              </div>
              <div className=" w-full ">
                <ul>
                  <li className="flex items-center py-2 gap-1 ">
                    <IoIosArrowForward className="text-primary-Btn text-xl" />{" "}
                    <strong>Age:</strong> <span>{data.age}</span>
                  </li>
                  <li className="flex items-center py-2 gap-1">
                    <IoIosArrowForward className="text-primary-Btn text-xl" />{" "}
                    <strong>Degree:</strong> <span>{data.degree}</span>
                  </li>
                  <li className="flex items-center py-2 gap-1 ">
                    <IoIosArrowForward className="text-primary-Btn text-xl flex flex-wrap" />{" "}
                    <strong>Email:</strong> <span>{data.email}</span>
                  </li>
                  <li className="flex items-center py-2 gap-1">
                    <IoIosArrowForward className="text-primary-Btn text-xl" />{" "}
                    <strong>Freelance:</strong> <span>{data.openTowork}</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-primary-Text sm:pt-16 mr-4">
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
