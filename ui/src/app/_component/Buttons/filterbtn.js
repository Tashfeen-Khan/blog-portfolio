import React from 'react'
import { MdOutlineExpandMore } from "react-icons/md";
const Filterbtn = ({title}) => {
  return (
    <div className='bg-light-Accent shadow-md shadow-light-Muted w-fit px-4 py-2 rounded-3xl flex justify-center items-center gap-2'>{title }<MdOutlineExpandMore className='text-2xl ' /></div>
  )
}

export default Filterbtn