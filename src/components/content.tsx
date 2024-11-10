import React from 'react'
import Image from 'next/image'
import Slider from '../components/Slider'

const Content = () => {
  return (
    <div>
        <h1 className='text-4xl space-x-10 font-bold font-sans text-blue-900 text-center'>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
        <p className='text-xl p-5 text-center text-gray-800'>
        The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members</p>
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-5 mt-10 m-3 sm:m-0'>
            <Image
                src="/1image.jpg"
                alt="governor"
                width={400}
                height={400}
                className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"  
             />
              <Image
                src="/2image.jpg"
                alt="governor" 
                width={400}
                height={400}
                className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
             />
            <Image
                src="/3image.jpg"
                alt="governor" 
                width={400}
                height={400}
                className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
             />


        </div>
        <Slider />
    </div>
  )
}

export default Content