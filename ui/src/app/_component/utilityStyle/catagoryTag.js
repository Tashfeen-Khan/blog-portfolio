import React from 'react'

const Tag = ({title}) => {
  return (
    <span class=" px-2 rounded-2xl  bg-purple-400 text-purple-950 w-fit flex justify-center items-center font-medium">
    {title}
  </span>
  )
}

export default Tag