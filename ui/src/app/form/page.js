"use client"
import React from 'react'
import { useState } from 'react';
import Navbar from '../_component/navbar'
import AddBlogForm from '../_component/forms/addBlogForm'
import BasicBtn from '../_component/Buttons/BasicBtn';
import UpdateSelf from '../_component/forms/updateSelf';
const Page = () => {
  const [activeComponent, setActiveComponent] = useState('');
    const handleButtonClick = (component) => {
    setActiveComponent(component);
  };
  return (
    <>
    <Navbar/>
    
         <div>
          <div className='flex gap-2 bg-orange-200 p-2'>
          <BasicBtn title="AddBlog" onClick={() => handleButtonClick('addBlog')}/>
          <BasicBtn title="Update-Self" onClick={() => handleButtonClick('updateSelf')}/>
          </div>
       {activeComponent === 'addBlog' && <AddBlogForm/>}
       {activeComponent === 'updateSelf' && <UpdateSelf/>}
     </div>
    </>
  )
}

export default Page
