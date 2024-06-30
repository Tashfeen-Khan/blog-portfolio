"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../_component/navbar";
import { fetchWorkApi } from "../../Redux/WorkSclice/worksclice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import dayjs from "dayjs";
import { LuEye } from "react-icons/lu";
import Share from "../_component/Buttons/share";
import Like from "../_component/Buttons/like";
import { FadeLoader } from 'react-spinners';
const Page = () => {
  let [color, setColor] = useState("#0073E5");
  const dispatch = useDispatch();
  const {
    allwork,
    isLoading,
    error: workError,
  } = useSelector((state) => state.Work);

  useEffect(() => {
    dispatch(fetchWorkApi());
  }, [dispatch]);

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
    <FadeLoader color={color} loading={isLoading}  /> {/* Display the spinner */}
  </div>
  );
  if (workError) return <p>Error: {workError}</p>;
  const formattedDate = dayjs(allwork.Date).format("DD/MM/YYYY");
  return (
    <>
      <section  className="bg-light-Bg dark:bg-dark-bg h-screen">
      <Navbar />
        <div className="gap-2 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {allwork &&
            allwork.map((work, index) => (
              <div
                key={index}
                className="border-2 border-light-Card_H_border dark:border-dark-icon_bg block rounded-lg  shadow-md h-auto"
              >
                <img
                  className="rounded-t-lg w-full object-cover"
                  src={work.image}
                  alt={work.title}
                  layout="responsive"
                  width={500}
                  height={500}
                />

                <div className="p-6 text-surface dark:text-white">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-light-H_black dark:text-dark-text ">
                    {work.Title}
                  </h5>
                  <div className="w-more">
                    <span className="text-light-Cardborder">
                      {work.catagory}
                    </span>{" "}
                    / <span className="text-light-Text">{formattedDate}</span>
                  </div>

                  <Link
                    href={work.Visit}
                    className="text-light-H_blue flex gap-2 items-center"
                  >
                    Visit
                    <LuEye />
                  </Link>
                  <div className="flex justify-between ">
                    <Like />
                    <Share />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Page;
