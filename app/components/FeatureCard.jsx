import Image from 'next/image'
import React from 'react'

const FeatureCard = ({data}) => {
   
  return (
    <div className=' flex justify-between items-center'>
        <div>
           <p className=' text-white text-sm font-semibold'>{data.title}</p> 
           <p className=' text-xs'>
           We spoke with Dani Colman and Rachel Weiss, the creative duo behind
          the new middle grade graphic novel
           </p>
           <div className=" py-1 px-2 text-xs mt-2 bg-[#333338] w-fit text-white rounded-lg">
            Read more
        </div>
        </div>
        <div className="relative w-[500px]  h-32">
        <Image src={data.images} className=" rounded-lg object-cover" fill />
      </div>
    </div>
  )
}

export default FeatureCard