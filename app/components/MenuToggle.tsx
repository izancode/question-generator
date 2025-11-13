'use client';
import {  useState } from 'react';
import { PiHamburger } from "react-icons/pi";
import { RiCloseCircleLine,RiAiGenerate } from "react-icons/ri";
import ThemeToggle from './ThemeToggle';
import { GrView } from "react-icons/gr";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import Link from "next/link";

const MenuToggle = () => {
    const [menu, setMenu] = useState(true);

    const menuToggle= async ()=>{
   
    console.log("newState",!menu)
    setMenu(!menu);

  

    }
   
  return (
    <>
       <nav className={`max-lg:fixed max-lg:bg-transparent max-lg:transition-all max-lg:left-[0] ${menu?"max-lg:bottom-[-20%]":"max-lg:bottom-[0%]"} max-lg:duration-300 max-lg:ease-in-out   max-lg:w-full max-lg:px-[0px]  max-lg:py-[0px]`} >
        <ul className='flex items-center  max-lg:justify-between max-lg:bg-white dark:max-lg:bg-[#303030] max-lg:px-5 max-lg:py-2'>
            <li className='lg:px-5'>
                <Link href="/" className="hover:text-indigo-600 transition-colors text-gray-500 dark:text-white  text-[8px] lg:text-[12px]">
              <RiAiGenerate className='lg:hidden w-[14px] h-[14px] mx-auto'/>
              <span className=''>Upload & Generate</span> 
               </Link>
            </li>
            <li className='lg:px-5'>
         <Link href="/about" className="hover:text-indigo-600 text-gray-500 dark:text-white transition-colors text-[8px] lg:text-[12px]">
           <GrView className='lg:hidden w-[14px] h-[14px] mx-auto'/>
          <span className=''> View Results</span>
          </Link>
            </li>
            <li className='lg:px-5'>
          <Link href="/services" className="hover:text-indigo-600 text-gray-500 dark:text-white transition-colors text-[8px] lg:text-[12px]">
          <TbBrandGoogleAnalytics className='lg:hidden w-[14px] h-[14px] mx-auto'/>
          <span className=''> Analytics</span>
          </Link>
            </li>
            <li className='lg:px-5'>
               <ThemeToggle />
            </li>
        </ul>
          
          
         
          
    </nav>
     <div className='lg:hidden text-black dark:text-white' onClick={menuToggle}>
        {menu ? <PiHamburger className=' w-[30px] h-[30px]'/>:<RiCloseCircleLine className=' w-[30px] h-[30px]'/> }
     </div>
     </>
  )
}

export default MenuToggle
