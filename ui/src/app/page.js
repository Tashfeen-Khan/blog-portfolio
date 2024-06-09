"use client"
import React, { useEffect } from 'react'
import Navbar from './_component/navbar'
import HeroSection from '../_landingcomponent/heroSection'
import LatestBlogs from '../_landingcomponent/latestBlogs'

function Page() {

  return (
    <>
    <Navbar/>
    <HeroSection />
    <LatestBlogs/>
    </>
  )
}

export default Page