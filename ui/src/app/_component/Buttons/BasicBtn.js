
import React from 'react'

const BasicBtn = ({title,onClick }) => {
  return (
    <button className="bg-light-button_bg text-light-Bg shadow-md shadow-light-Text dark:shadow-md dark:shadow-dark-icon_bg h-8 w-auto p-4 flex items-center rounded-md font-bold text-primary-Bg" onClick={onClick}>
      {title}
    </button>
  )
}

export default BasicBtn