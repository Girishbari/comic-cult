import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <div className=" relative  font-bold  rounded-lg bg-[url('./assets/cover.png')] h-96 w-full">

    <p className=" absolute bottom-20 text-4xl z-10 ml-2 text-white">The Latest News and Comics from the world of Comics</p>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#191919]  transition-opacity duration-200 opacity-100"/>
   <div className=" absolute bottom-5 ml-2 flex px-2 py-1 rounded-full bg-[#191919] space-x-4 items-center">
   <IoIosSearch />
   <form>
  <input type=' text'
  placeholder='Create your comic now'
  className=' bg-[#191919] outline-none font-normal p-2'
  >
  </input>
</form>
<div className=" bg-gray-800 py-2 px-4 rounded-full flex items-center justify-center">
<IoCreateOutline />
</div>

   </div>
  </div>
  )
}

export default Hero