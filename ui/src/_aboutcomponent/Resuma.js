"use client"
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { fetchSelfApi } from "../Redux/SelfSclice/selfSclice";
const Resuma = () => {
  const dispatch = useDispatch();
  const { selfDatas, isLoading, error } = useSelector((state) => state.self);
  useEffect(() => {
    dispatch(fetchSelfApi());
  }, [dispatch]);
  return (
    <section id="resume" className="bg-primary-Bg py-8 text-primary-Text">
  <div className="container mx-auto">
    <div className=" px-8  flex flex-col items-center">
      <h2 className="font-medium text-light-Secondary">Resume</h2>
      <p className="text-4xl font-extrabold md:text-5xl text-light-Secondary">Check My Resume</p>
    </div>
    <div className="flex flex-wrap ">
    {selfDatas.map((data, index) => (
      <>
      <div className="w-full lg:w-1/2 px-8">
        <h3 className="text-2xl font-bold mt-8 mb-4">Summary</h3>
        <div className="bg-primary-Bg  rounded-lg p-6 ">
          <h4 className="text-lg font-bold text-primary-h1">{data.name}</h4>
          <p className="italic ">{data.shortBio}</p>
          <ul className="list-disc mt-4">
            <li>{data.address}</li>
            <li>{data.phoneNumber}</li>
            <li>{data.email}</li>
          </ul>
        </div>
        <h3 className="text-2xl font-bold mt-8 mb-4  text-light-Primary">Education</h3>
        <div className='grid grid-cols-1 gap-4'>
        <div className="bg-primary-Bg  rounded-lg p-6 shadow-md shadow-light-Primary">
          <h4 className="text-lg font-bold text-primary-h1  text-light-Secondary">Master of Fine Arts & Graphic Design</h4>
          <h5 className='text-light-Accent'>2015 - 2016</h5>
          <p className="italic">Rochester Institute of Technology, Rochester, NY</p>
          <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
        </div>
        <div className="bg-primary-Bg  rounded-lg p-6 shadow-md shadow-light-Primary">
          <h4 className="text-lg font-bold text-primary-h1  text-light-Secondary">Master of Fine Arts & Graphic Design</h4>
          <h5 className='text-light-Accent'>2015 - 2016</h5>
          <p className="italic">Rochester Institute of Technology, Rochester, NY</p>
          <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
        </div>
        </div>
      </div>
      </>
    ))}
      
      <div className="w-full lg:w-1/2 px-8 ">
        <h3 className="text-2xl font-bold mt-8 mb-4 text-light-Primary">Professional Experience</h3>
        <div className='grid grid-cols-1 gap-4'>
        <div className=" rounded-lg p-6 shadow-md shadow-light-Primary">
          <h4 className="text-lg font-bold text-primary-h1 text-light-Secondary">Senior graphic design specialist</h4>
          <p className="italic text-light-Primary">Experion, New York, NY</p>
          <h5 className="text-light-Accent">2019 - Present</h5>
          <ul className="list-disc mt-4">
            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
            <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
            <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
            <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
          </ul>
        </div>
        <div className=" rounded-lg p-6 shadow-md shadow-light-Primary">
          <h4 className="text-lg font-bold text-primary-h1 text-light-Secondary">Senior graphic design specialist</h4>
          <p className="italic text-light-Primary">Experion, New York, NY</p>
          <h5 className="text-light-Accent">2019 - Present</h5>
          <ul className="list-disc mt-4">
            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
            <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
            <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
            <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Resuma