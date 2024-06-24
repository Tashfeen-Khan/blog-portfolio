"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchSelfApi } from "../Redux/SelfSclice/selfSclice";
import { fetchEduApi } from '../Redux/EduSclice/eduSclice';
import { fetchExpApi } from '../Redux/experianceSclice/expSclice';

const Resume = () => {
  const dispatch = useDispatch();
  const { selfDatas, isLoading: selfLoading, error: selfError } = useSelector((state) => state.self);
  const { alledus, isLoading: eduLoading, error: eduError } = useSelector((state) => state.education);
  const { allexps, isLoading: expLoading, error: expError } = useSelector((state) => state.experiance);
console.log("ui"+ allexps);

  useEffect(() => {
    dispatch(fetchSelfApi());
    dispatch(fetchEduApi());
    dispatch(fetchExpApi());
  }, [dispatch]);

  if (selfLoading || eduLoading) return <p>Loading...</p>;
  if (selfError || eduError) return <p>Error: {selfError || eduError}</p>;

  return (
    <section id="resume" className="">
      <div className="container mx-auto">
        <div className="px-8 flex flex-col items-center">
          <h2 className="font-medium text-light-H_blue ">Resume</h2>
          <p className="text-4xl font-extrabold md:text-5xl text-light-H_black dark:text-dark-text">Check My Resume</p>
        </div>
        <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2 px-8 ">
            <h3 className="text-2xl font-bold mt-8 mb-4 text-light-H_blue">Professional Experience</h3>
            <div className='grid grid-cols-1 gap-4'>
            {allexps && allexps.map((exp, index) => (
              <>
                 <div className=" rounded-lg p-6 border-2 border-light-Text bg-light-Card_H_bg dark:bg-dark-card_bg"key={index}>
                <h4 className="text-lg font-bold dark:text-dark-text">{exp.Post}</h4>
                <p className="italic text-light-button_bg">{exp.From}</p>
                <h5 className="text-light-button_bg">{exp.Duration}</h5>
                <p className="list-disc mt-4 text-light-Text">
                 {exp.Experiance}
                </p>
              </div>
              </>
            ))}
           
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-8">
            {/* {selfDatas && selfDatas.map((data, index) => (
              <div className="w-full px-8" key={index}>
                <h3 className="text-2xl font-bold mt-8 mb-4 text-light-H_blue">Summary</h3>
                <div className="  rounded-lg p-6 ">
                  <h4 className="text-lg font-bold ">{data.name}</h4>
                  <p className="italic ">{data.shortBio}</p>
                  <ul className="list-disc mt-4">
                    <li>{data.address}</li>
                    <li>{data.phoneNumber}</li>
                    <li>{data.email}</li>
                  </ul>
                </div>
              </div>
            ))} */}
            <h3 className="text-2xl font-bold mt-8 mb-4 text-light-H_blue">Education</h3>
            <div className='grid grid-cols-1 gap-4'>
              {alledus && alledus.map((edu, index) => (
                <div className=" rounded-lg p-6 border-2 border-light-Text bg-light-Card_H_bg dark:bg-dark-card_bg "key={index} >
                  <h4 className="text-lg font-bold text-light-H_black dark:text-dark-text">{edu.Title}</h4>
                  <h5 className='text-light-button_bg'>{edu.Duration}</h5>
                  <p className="italic text-light-button_bg">{edu.From}</p>
                  <p className='text-light-Text'>{edu.EduExperiance}</p>
                </div>
              ))} 
            </div>
          </div>
       
        </div>
      </div>
    </section>
  );
}

export default Resume;
