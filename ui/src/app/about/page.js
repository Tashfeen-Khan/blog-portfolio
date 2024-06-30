"use client"
import React from 'react'
import Navbar from '../_component/navbar'
import AboutMe from '../../_aboutcomponent/AboutMe'
import Resuma from '../../_aboutcomponent/Resuma'
import { FadeLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
const page = () => {
  const { selfDatas, isLoading, error } = useSelector((state) => state.self);
  if (isLoading) {
    <div className="flex justify-center items-center h-screen">
        <FadeLoader  loading={isLoading} className='text-light-Text' /> {/* Display the spinner */}
      </div>
  }
  return (
    <>
    <div className="dark:bg-dark-bg">
      <Navbar/>
      <AboutMe/>
      <Resuma/>
      </div>
    </>
  )
}

export default page