import React from 'react'

const Tag = ({title}) => {
  return (
    <span class=" tag bg-teal-400 text-white rounded-full px-3 py-1 uppercase text-xs">
    {title}
  </span>
  )
}

export default Tag