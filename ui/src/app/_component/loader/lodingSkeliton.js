import React from 'react'
import { FadeLoader } from 'react-spinners';
const LodingSkeliton = () => {
  return (
<div className="flex justify-center items-center h-screen">
        <FadeLoader  loading={isLoading} className='text-light-button_bg' /> {/* Display the spinner */}
      </div>
  )
}

export default LodingSkeliton