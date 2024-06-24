import React from 'react'

const Tag = ({title}) => {
  return (
    <span class=" text-light-H_blue bg-light-Card_H_border dark:bg-dark-icon_bg dark:text-dark-text  rounded-xl w-fit px-4 py-1 flex justify-center items-center font-medium">
    {title}
  </span>
  )
}

export default Tag