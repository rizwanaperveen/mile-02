import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-8 bg-slate-300 h-full w-full max-sm:8'>
        <div className='p-8 text-slate-900 m-4 sm:m-1 space-y-2'>
            <h1 className='text-2xl text-slate-900 m-2 font-bold'>Core Courses</h1>
            <li>Programming Fundamentals</li>
            <li>Web2 Using Next js</li>
            <li>Earn As You Learn</li>
        </div>
        <div className='p-8 text-slate-900 m-4 sm:m-1'>
            <h1 className='text-2xl text-slate-900 m-2 font-bold'>Advanced Courses</h1>
            <li>Artificial Intelligence</li>
            <li>Web3 and Metaverse</li>
            <li>Cloud-Native and Metaverse</li>
            <li>Ambient Computing and IoT</li>
            <li>Genomic and Bioinformatics</li>
            <li>Network Programmability and Automation</li>
            
        </div>
        <div className='p-8 text-slate-900 m-4 sm:m-1'>
          <h1 className='text-2xl text-slate-900 m-2 font-bold'>Social Links</h1>
       <div className='flex justify-center space-x-7 items-center mt-6'>
        <FaFacebook className='text-xl w-7 h-7 rounded bg-blue-800 text-white pt-1 pb-1'/>
        <FaYoutube className='text-xl max-w-screen-sm w-7 h-7 rounded bg-white text-red-600'/>
        <FaSquareTwitter className='text-xl w-7 h-7 rounded bg-white text-pink-500'/>
        <FaInstagramSquare className='text-xl w-7 h-7 rounded bg-white text-orange-500'/>
        </div>

       <div className='flex justify-center text-blue-600 underline mt-6'>
       <MdOutlineEmail className='w-6 h-6 mr-2'/>
        <Link href="/">education@governorsindh.com</Link>
         </div>
        </div>

    </div>
  )
}

export default Footer