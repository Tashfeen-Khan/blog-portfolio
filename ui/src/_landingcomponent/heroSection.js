import React from 'react';
import Image from 'next/image';
import { IoShareSocialOutline } from 'react-icons/io5';
import profilePic from '../../public/bg.jpg'; // Adjust the path as necessary
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <header id="header" className="relative h-screen">
      <div className="object-cover ">
        <Image
          src={profilePic}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 py-6 h-full flex flex-col justify-center items-center md:items-start md:pl-12">
        <h1 className="text-4xl font-bold text-white ">Tashfeen Khan</h1>
        <h2 className="mt-2 text-2xl text-white">
          I'm a passionate <span className="text-white border-b-2  border-[#18d26e] gap-b  pb-1">MERN Developer</span> from Pakistan
        </h2>


        <div className="mt-4 flex space-x-4 ">
        <a href="#" className="text-white text-xl rounded-full p-2 transition duration-500 ease-in-out hover:bg-[#18d26e]">
  <FaTwitter />
</a>


          <a href="#" className="text-white text-xl rounded-full p-2 transition duration-500 ease-in-out hover:bg-[#18d26e]">
            <FaFacebook />
          </a>
          <a href="#" className="text-white text-xl rounded-full p-2 transition duration-500 ease-in-out hover:bg-[#18d26e]">
          <FaInstagram />
          </a>
          <a href="#" className="text-white text-xl rounded-full p-2 transition duration-500 ease-in-out hover:bg-[#18d26e]">
          <FaLinkedin />
          </a>
          <a href="#" className="text-white text-xl rounded-full p-2 transition duration-500 ease-in-out hover:bg-[#18d26e]">
          <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
