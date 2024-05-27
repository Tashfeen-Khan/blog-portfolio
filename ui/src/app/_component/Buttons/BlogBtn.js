
import React from 'react'

const BlogBtn = ({title,onClick }) => {
  return (
    <button className="bg-blue-500 h-8 w-20 rounded-md text-white" onClick={onClick}>
      {title}
    </button>
  )
}

export default BlogBtn