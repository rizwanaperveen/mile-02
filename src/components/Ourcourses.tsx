'use client';
import { CompulsoryData } from '@/data/main/compulsory'
import { tracks } from '@/data/main/tracks'
import React from 'react'

const Ourcourses = () => {
  return (
    <div className='text-2xl text-black h-fit max-w-full p-6 text-center'>
      <h1 className='mt-10 text-center text-3xl hover:bg-main'>Core Courses</h1>
      {CompulsoryData.map((item) => (
        <div key={item.id}>{item.text}</div>
      ))}
      <h1 className='mt-10 text-center text-3xl hover:bg-main'>Advanced Courses</h1>
      {tracks.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

export default Ourcourses