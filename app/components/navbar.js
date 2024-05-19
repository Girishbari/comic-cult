import Image from "next/image"
import Link from "next/link"
import Searchbar from "./searchbar"
import Button from "./Button"

export default function navbar() {
  return (
    <div className=" flex justify-between fixed top-0 navbar bg-[#191919] border-b-[1px] md:px-7">
      <div className=" space-x-2">
      <div className=" relative w-7 h-5 ">
        <Image src="/logo.png" alt="image" fill/>
      </div>
      <p className=" font-bold text-xs md:text-base">Superhero Comics</p>
      <Searchbar/>
      </div>
      
      <div className=" max-md:hidden space-x-4">
      <Button text="Signup"/>
      <Button text="Login"/>
      </div>
      {/* Mobile navbar */}
      <div className='md:hidden navbar-end'>
        <div className="flex-none dropdown dropdown-bottom dropdown-end  ">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
          <ul tabIndex={0} className="menu space-y-4 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link className="link link-error cursor-pointer" href='https://political-pencil-5b5.notion.site/Some-comic-cult-examples-6d6afb1372fe42dab033ec1fe26644b0' target='_blank'>examples</Link></li>
              <Button text="Signup"/>
      <Button text="Login"/>
          </ul>
        </div>
      </div>
    </div>
  )
}
