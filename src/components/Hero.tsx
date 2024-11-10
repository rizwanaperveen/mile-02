import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <div className='flex justify-center'>
       {/*background image*/}
      
       <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='relative w-full h-full max-w-[2000px] max-h-[2500px]'>
                            <Image
                                src="/building2.jpg"
                                alt="governor" width={4000}
                                height={4000}
                                objectFit="cover"
                                className="opacity-15" />
                        </div>
                    </div>
      {/*left div*/}
      <div className='p-28 font-bold text-main font-poppins w-2/3 relative z-10'>
        <h1 className='text-4xl font-bold font-poppins'>Governor Sindh
        </h1>
        <h2 className='text-3xl'>Kamran Khan Tessori</h2>
        <h3 className='text-3xl font-bold text-sky-600'>Certified Cloud
Applied Generative AI
Engineer (GenEng)</h3>
<div className='font-serif font-bold text-blue-900'>
<p>Earn up to $5,000 / month</p>
<br/>
<p>Now admissions are open in Hyderabad</p>

<div className='grid grid-cols-2 h-auto w-auto font-mono font-bold text-main '>
<button className='w-full py-2 rounded-md bg-main text-white text-center text-2xl font-semibold'>APPLY NOW</button>
<div className=' text-2xl w-full h-5 ml-4 px-2'>562,143
Accepted Applications</div>
      </div>
    </div>
      </div>
    {/*right div*/}
    <div className='min-w-[800px] lg:w-[500px]'>
        <Image 
        src="/governor.PNG" 
        alt="hr" 
        width={2000} 
        height={2000}
        objectFit="cover"
        />
    </div>
     </div>
     
   </>
  )
}

export default Hero