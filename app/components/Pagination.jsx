import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const Pagination = () => {
    const demonum=[1,2,3,4,5]
  return (
    <div className=' w-full flex items-center space-x-2 text-sm justify-center'>
        <FaAngleLeft className=' hover:text-white transition' />
        {
            demonum.map((data,index)=>(
                <div className=' space-x-4'  key={index}>
                <div className=' p-2 rounded-full hover:bg-[#333338] transition'>
                    {data}
                </div>
                </div>
                
            ))
        }
        <FaAngleRight className=' hover:text-white transition'/>
        </div>
  )
}

export default Pagination