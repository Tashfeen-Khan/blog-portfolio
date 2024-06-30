"use client";

import React, { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelfApi } from "../Redux/SelfSclice/selfSclice";
import { FadeLoader } from 'react-spinners';
// import nnn from "../../public/images/heroPoster.png"
const HeroSection = ({ self }) => {
  let [color, setColor] = useState("#0073E5");
  const dispatch = useDispatch();
  const { selfDatas, isLoading, error } = useSelector((state) => state.self);

  useEffect(() => {
    dispatch(fetchSelfApi());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader color={color} loading={isLoading} className="text-light-H_blue" /> {/* Display the spinner */}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {selfDatas.map((data, index) => (
        <>
          <div
            className="  h-[500px] grid grid-cols-1 sm:grid-cols-2 "
            key={index}
          >
            <div className="flex items-center justify-center ">
              <div className="  w-1/2   h-1/2 flex items-center justify-center">
              <img src="/images/hero.png" alt="hero banner" className='object-cover' />
                      
              </div>
            </div>
            <div className=" p-4 flex flex-col items-center justify-center sm:items-start  ">
              <h1 className="text-4xl font-bold text-light-H_blue ">{data.name}</h1>
              <h2 className="mt-2 text-2xl text-light-H_black dark:text-light-Bg">
                I'm a passionate{" "}
                <span className=" border-b-2 border-light-secondary  gap-b  pb-1 text-light-Text">
                  {data.workField}
                </span>{" "}
                from Pakistan
              </h2>

              <div className="mt-4 flex text-light-Cardborder  ">
                <a
                  href={data.social.twitter}
                  className=" text-xl rounded-xl p-2 transition duration-500 ease-in-out hover:bg-light-Card_H_border hover:dark:bg-dark-icon_bg"
                >
                  <FaTwitter />
                </a>

                <a
                  href={data.social.facebook}
                  className=" text-xl rounded-xl p-2 transition duration-500 ease-in-out hover:bg-light-Card_H_border hover:dark:bg-dark-icon_bg"
                >
                  <FaFacebook />
                </a>
                <a
                  href={data.social.instagram}
                  className=" text-xl rounded-xl p-2 transition duration-500 ease-in-out hover:bg-light-Card_H_border hover:dark:bg-dark-icon_bg"
                >
                  <FaInstagram />
                </a>
                <a
                  href={data.social.linkedin}
                  className=" text-xl rounded-xl p-2 transition duration-500 ease-in-out hover:bg-light-Card_H_border hover:dark:bg-dark-icon_bg"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={data.social.github}
                  className=" text-xl rounded-xl p-2 transition duration-500 ease-in-out hover:bg-light-Card_H_border hover:dark:bg-dark-icon_bg"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default HeroSection;
