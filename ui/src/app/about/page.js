import React from 'react'
import Navbar from '../_component/navbar'
import AboutMe from '../../_aboutcomponent/AboutMe'
import Resuma from '../../_aboutcomponent/Resuma'
const page = () => {
  return (
    <>
    <div className="bg-light-Bg text-light-Text dark:bg-dark-bg dark:text-dark-text">
      <Navbar/>
      <AboutMe/>
      <Resuma/>
      </div>
    </>
  )
}

export default page