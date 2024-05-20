import Link from "next/link"
import { FC } from "react"

const navbar: FC<{}> = () => {
  return (
    <div className=" fixed top-0 navbar bg-base-200 md:px-7">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" href={"/"}>Comic-Cult</Link>
      </div>
      <div className="max-md:hidden  navbar-end gap-5">
        <Link className="link link-error " href='https://political-pencil-5b5.notion.site/Some-comic-cult-examples-6d6afb1372fe42dab033ec1fe26644b0' target='_blank'>examples</Link>
        <a className="link link-error ">How to use ?</a>
        <a className="btn btn-success">Get Started</a>

      </div>
      {/* Mobile navbar */}
      <div className='md:hidden navbar-end'>
        <div className="flex-none dropdown dropdown-bottom dropdown-end  ">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link className="link link-error " href='https://political-pencil-5b5.notion.site/Some-comic-cult-examples-6d6afb1372fe42dab033ec1fe26644b0' target='_blank'>examples</Link></li>
            <li>
              <a className="link link-error ">How to use ?</a>
            </li>
            <li>
              <a className="btn btn-success">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default navbar;