import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Courses = () => {
  return (
    <>
    <div className='xl:w-[1300px] lg:w-[90%] m-auto mt-10 mb-10'>
        <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Core Courses Sequence
        </h1>
        <div className='grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-20 mt-10'>
        
        <div className='text-center p-x-10 text-xl hover:scale-105 duration-200 transition-all'><Image src="/course1.jpg" alt="governor" width={400} height={400} objectFit="cover" />Programming Fundamentals</div>
      
        
        <div className='text-center p-x-10 text-xl hover:scale-105 duration-200 transition-all'><Image src="/course2.jpg" alt="governor" width={400} height={400} objectFit="cover" />Web2 Using Next js</div>
        
        <div className='p-x-10 text-xl hover:scale-105 duration-200 transition-all'><Image src="/course3.jpg" alt="governor" width={400} height={400} objectFit="cover" />Earn As You Learn</div>
        </div>
        </div>
        
       <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-20 mb-10'>
       <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Advanced Courses</h1>
       <div className='grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>
        <div className='text-xl text-center hover:scale-105 duration-200 transition-all'><Image src="/advance1.jpg" alt="governor" width={400} height={400} objectFit="cover" />Artificial Intelligence</div>
        <div className='text-xl text-center hover:scale-105 duration-200 transition-all'><Image src="/advance2.jpg" alt="governor" width={400} height={400} objectFit="cover" />Web3 and Metaverse</div>
        <div className='text-xl text-center hover:scale-105 duration-200 transition-all'><Image src="/advance3.jpg" alt="governor" width={400} height={400} objectFit="cover" />Cloud-Native and Computing</div>
        <div className='text-xl text-center hover:scale-105 duration-200 transition-all'><Image src="/advance4.jpg" alt="governor" width={400} height={400} objectFit="cover" />Ambient Computing and IoT</div>
        <div className='text-xl text-center hover:scale-105 duration-200 transition-all'><Image src="/advance5.jpg" alt="governor" width={400} height={400} objectFit="cover" />Genomics and Bioinformatics</div>
        <div className='text-xl text-center hover:scale-105 duration-200 transition-all'><Image src="/advance6.jpg" alt="governor" width={400} height={400} objectFit="cover" />Network Programmability and Automation</div>
       </div>
  
       
        </div>
        </>
  )
}

export default Courses