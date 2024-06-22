
import React from 'react'

const BasicBtn = ({title,onClick }) => {
  return (
    <button className="bg-light-Accent shadow-md shadow-light-Muted h-8 w-auto p-4 flex items-center rounded-md font-bold text-primary-Bg" onClick={onClick}>
      {title}
    </button>
  )
}

export default BasicBtn