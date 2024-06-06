import React from 'react'
import { IoIosSearch } from "react-icons/io";
const Searchbar = () => {
  return (
    <div className=' flex px-2 py-1 rounded-full bg-[#333338] space-x-2 items-center'><IoIosSearch />
    <form>
        <input type=' text'
        placeholder='Search'
        className=' bg-[#333338] outline-none'
        >
        </input>
    </form>
    </div>
  )
}

export default Searchbar