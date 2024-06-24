import React from 'react'
import Navbar from '../_component/navbar'
import AboutMe from '../../_aboutcomponent/AboutMe'
import Resuma from '../../_aboutcomponent/Resuma'
const page = () => {
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