'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleDown } from "react-icons/fa";


const navLinks = [
  {title: "home", link: "/", id: "1"},
  {title: "apply", link: "/apply", id: "2"},
  {title: "jobs", link: "/jobs", id: "3"},
  {title: "result", link: "/result", id: "4"},
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <main className='flex flex-wrap sticky top-0 z-30 w-full'>
      
     <div className='bg-blue-900 flex justify-center space-x-8 text-white items-center h-20 w-full position:fixed'>
     <span className='mt-20 mr-28'>   
        <Image src="/logo.png" alt="golo" width={90} height={90} />
      </span>
     <h1 className='text-2xl text-sky-200 font-bold'>Tuition Free Education Program on Latest Technologies</h1>
      <div><Link href="/">Home</Link></div>
      <div><Link href="/apply">Apply</Link></div>
      <div><Link href="/jobs"> Jobs</Link></div>
      <div><Link href="/result">Result</Link></div>
      <div className='flex justify-center items-right'><Link href="/ourcourse">Courses</Link><span className='h-4 w-4 flex items-right ml-1 mt-1'><FaAngleDown /></span>
      </div>
      </div>
     
    </main>
    </>
  )
}

export default Navbar