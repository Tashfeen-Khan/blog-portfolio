"use client"
import React, { useEffect } from 'react'
import Navbar from './_component/navbar'
import HeroSection from '../_landingcomponent/heroSection'
import LatestBlogs from '../_landingcomponent/latestBlogs'


function Page() {

  return (
    <>
    <div className='"bg-light-Bg text-light-Text dark:bg-dark-bg dark:text-light-Bg'>
    <Navbar/>

    <HeroSection />
    <LatestBlogs/>
    </div>
    </>
  )
}

export default Page