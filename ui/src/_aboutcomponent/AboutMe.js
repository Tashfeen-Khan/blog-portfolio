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
    <div className="bg-black">
      <div className="about-me container mx-auto py-2 bg-black">
        <div className="section-title text-white  flex flex-col px-8 sm:px-16  items-center">
          <h2 className="font-medium">About</h2>
          <p className="text-4xl font-extrabold md:text-5xl ">
            Learn more about me
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  ">
          <Image src={Me} alt="Background Image" />
          {selfDatas.map((data, index) => (
            <>
          <div className=" px-2 sm:px-0 lg:col-span-1 pt-4 ">
            <h3 className="text-2xl text-[#18d26e]">
              {data.workField}
            </h3>
            <p className="italic text-white">
            {data.shortBio}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-1 text-white">
              <div className=" w-full ">
                <ul className="">
                  <li className="flex  my-2 gap-1">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>Birthday:</strong> <span>{data.birthday}</span>
                  </li>
                  <li className="flex items-center py-2  gap-1">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li className="flex items-center py-2 gap-1">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>Phone:</strong> <span>{data.phoneNumber}</span>
                  </li>
                  <li className="flex items-center py-2 gap-1">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>City:</strong> <span>{data.address}</span>
                  </li>
                </ul>
              </div>
              <div className=" w-full ">
                <ul>
                  <li className="flex items-center py-2 gap-1 ">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>Age:</strong> <span>{data.age}</span>
                  </li>
                  <li className="flex items-center py-2 gap-1">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>Degree:</strong> <span>{data.degree}</span>
                  </li>
                  <li className="flex items-center py-2 gap-1 ">
                    <IoIosArrowForward className="text-[#18d26e] text-xl flex flex-wrap" />{" "}
                    <strong>Email:</strong> <span>{data.email}</span>
                  </li>
                  <li className="flex items-center py-2 gap-1">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>Freelance:</strong> <span>{data.openTowork}</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-white sm:pt-16 mr-4">
          {data.bio}
            </p>
          </div>
          </>
      ))}
        </div>
        <BasicBtn title="UpDate-Self" onClick={() => router.push("/form")}/>
      </div>
    </div>
  );
};

export default AboutMe;
