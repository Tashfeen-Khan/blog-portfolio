
import React from 'react'

const BasicBtn = ({title,onClick }) => {
  return (
    <button className="bg-blue-500 h-8 w-auto p-4 flex items-center rounded-md text-white" onClick={onClick}>
      {title}
    </button>
  )
}

export default BasicBtn