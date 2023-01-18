import React from 'react'
import { useRef,useState } from 'react';
//import Button from '../Components/Button';
import Image from '../Components/Image';
import {Link} from 'react-router-dom'
const Navbar = () => {
  //const header = useRef(null);
  const [navOpen, setnavOpen] = useState(false);

  return (
    <header className="  w-full h-16 bg-neutral-500 shadow-md transition  ">
        <nav className="container m-auto py-2 lg:px-20 ">
            <div className=" flex flex-wrap items-center justify-between">
                <div className=" z-10 w-full px-6 flex items-center justify-between lg:w-auto">
                    <Link to={"/"} onClick={() => navOpen ? setnavOpen(false) : true } className="flex ">
                        <Image link="https://cdn.iconscout.com/icon/premium/png-128-thumb/cab-70-1072472.png" className="w-12 h-12 animate-bounce" >Logo</Image>      
                        <p className='mx-2 font-sans text-xl font-semibold self-center'>LOGO</p> 
                    </Link>

                    <button id="hamburger" className="relative w-10 h-10 lg:hidden" onClick={() => navOpen ? setnavOpen(false) : setnavOpen(true)}>
                    <div role="hidden" id="line" className="inset-0 w-6 h-0.5 mb-1.5 m-auto rounded-full bg-black transition  duration-100"></div>
                        <div role="hidden" id="line" className="inset-0 w-6 h-0.5 m-auto rounded-full bg-black transition  duration-100"></div>
                        <div role="hidden" id="line2" className="inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-black transition duration-300"></div>
                    </button>
                </div>

                <div id="navlinks" className={navOpen ? "z-[12] w-full px-6 bg-neutral-500 transition lg:block lg:w-auto lg:px-0 lg:bg-transparent duration-[1000] delay-1000" : "hidden w-full px-6 bg-white transition lg:block lg:w-auto lg:px-0 lg:bg-transparent"}>
                    <ul className="py-4 text-black text-lg tracking-wide lg:flex lg:space-x-8 lg:py-0">
                        <li>
                            <Link to={"/"} className="block w-full py-3 transition hover:text-slate-700" onClick={() => setnavOpen(!navOpen)} >Home</Link>
                        </li>
                        <li>
                            <Link to={"/"} className="block w-full py-3 transition hover:text-slate-700" onClick={() => setnavOpen(!navOpen)} >Services</Link>
                        </li>
                        <li>
                            <Link to={"/"} className="block w-full py-3 transition hover:text-slate-700" onClick={() => setnavOpen(!navOpen)} >About</Link>
                        </li>
                        <li>
                            <Link to={"/"} className="block w-full py-3 transition hover:text-slate-700" onClick={() => setnavOpen(!navOpen)} >Blog</Link>
                        </li>
                        <li className="mt-4 lg:mt-0" >
                            <Link to="/login" className="block w-full py-3 px-6 rounded-3xl bg-indigo-700 transition hover:bg-cyan-800 focus:bg-cyan-500 active:bg-cyan-800" onClick={() => setnavOpen(!navOpen)} >
                           
                                <span className="block text-center text-white hover:text-black font-semibold lg:text-base ">Login</span>  
                           
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}


export default Navbar;