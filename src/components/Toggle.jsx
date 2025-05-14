import React, { useState } from 'react'

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label className='flex items-center cursor-pointer select-none mb-10'>
      <p className='text-[16px] font-[700]'>Monthly</p>
      <div className='relative mx-4'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div
          className={`block w-14 h-8 rounded-full transition-all duration-300 ${
            isChecked
              ? 'bg-blue-500/20 border border-blue-300 backdrop-blur-md'
              : 'bg-white/10 border border-white/20 backdrop-blur-md'
          }`}
        ></div>
        <div
          className={`dot absolute top-1 h-6 w-6 rounded-full bg-white shadow-md transition-all duration-300 ${
            isChecked ? 'translate-x-6' : 'translate-x-1'
          }`}
        ></div>
      </div>
      <p className='text-[16px] font-[700]'>Annually</p>
    </label>
  )
}

export default Toggle
