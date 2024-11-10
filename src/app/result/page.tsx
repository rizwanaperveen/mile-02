'use client'
import React from 'react'

const result = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center h-max m-10'>
      <h1 className='text-4xl mt-10space-x-10 font-bold font-sans text-blue-900 text-center'>Grand Entrance Exam Result</h1>
      
      <label className='text-2xl font-sans text-left text-blue-950 pt-20'>Registration Number*</label>
      <input className='w-1/3 h-10 border-2' type="text" id="registration" name="registration" placeholder='Enter Registration Number'/>
      <label className='text-2xl font-sans text-left text-blue-950 pt-20'>CNIC or B-FORM NUMBER*</label>
      <input className='w-1/3 h-10 border-2' type="text" id="registration" name="registration" placeholder='Enter CNIC or B-Form Number' />
    
    <button className='bg-blue-900 hover:bg-blue-700 flex justify-center w-52 items-center text-white font-bold py-5 mb-10 px-10 mt-8'>Get Result</button>
    </div>
    </>
  )
}

export default result