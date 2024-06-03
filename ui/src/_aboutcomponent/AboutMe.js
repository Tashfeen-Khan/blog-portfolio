import React from "react";
import Image from "next/image";
import Me from "../../public/me.jpg";
import { IoIosArrowForward } from "react-icons/io";

const AboutMe = () => {
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

          <div className="px-8 sm:px-16 lg:col-span-1 pt-4 lg:pt-0 content ">
            <h3 className="text-2xl text-[#18d26e]">
              UI/UX &amp; Graphic Designer
            </h3>
            <p className="italic text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-white">
              <div className="gap-14">
                <ul className="gap-14">
                  <li className="flex items-center py-2 gap-2">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>Birthday:</strong> <span>1 May 1995</span>
                  </li>
                  <li className="flex items-center py-2 gap-2">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li className="flex items-center py-2 gap-2">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>Phone:</strong> <span>+123 456 7890</span>
                  </li>
                  <li className="flex items-center py-2 gap-2">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>City:</strong> <span>New York, USA</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="flex items-center py-2 gap-2">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>Age:</strong> <span>30</span>
                  </li>
                  <li className="flex items-center py-2 gap-2">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>Degree:</strong> <span>Master</span>
                  </li>
                  <li className="flex items-center py-2 gap-2">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>Email:</strong> <span>email@example.com</span>
                  </li>
                  <li className="flex items-center py-2 gap-2">
                    <IoIosArrowForward className="text-[#18d26e] text-xl" />{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-white md:pt-16">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
