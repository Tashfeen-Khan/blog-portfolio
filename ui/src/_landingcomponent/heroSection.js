"use client";
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchSelfApi } from '../Redux/SelfSclice/selfSclice';

// const SelfComponent = () => {
//   const dispatch = useDispatch();
//   const { selfDatas, isLoading, error } = useSelector((state) => state.self);

//   useEffect(() => {
//     dispatch(fetchSelfApi());
//   }, [dispatch]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {selfDatas.map((data, index) => (
//         <div key={index}>{data.email}</div>
//       ))}
//     </div>
//   );
// };

// export default SelfComponent;

import React, { useEffect } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelfApi } from "../Redux/SelfSclice/selfSclice";

const HeroSection = ({ self }) => {
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
    <>
      {selfDatas.map((data, index) => (
        <>
          <div
            className="  h-[500px] grid grid-cols-1 sm:grid-cols-2 "
            key={index}
          >
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <div className=" rounded-full border-primary-h1 border-8   ">
                <img
                  src={data.image}
                  className=" h-48 w-48 rounded-full object-cover shadow-2xl bg-primary-h1"
                  alt="author"
                />
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
