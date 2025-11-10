'use client';
import { useEffect, useState } from 'react';
import {useTheme} from 'next-themes';
import { IoSunnyOutline,IoMoonOutline } from "react-icons/io5";

const ThemeToggle = () => {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
  useEffect(() => {
//   const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//   setTheme(isDark?'dark':'light')
    setMounted(true);
  }, [setTheme]);
  if (!mounted) {
    return null;
  }
 const toggleThemeTwo = (e: React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.checked){
    setTheme('dark');
    }else{
    setTheme('light');
    }
 }
 return (
    <>
   <input type="checkbox" id='darkmode-toggle' className='peer  w-[0] h-[0]  hidden' checked={theme === 'dark'} onChange={toggleThemeTwo}/>
   <label className='group w-[60px] h-[30px] block relative  bg-white-950 rounded-[200px] shadow-[inset_0px_5px_15px_rgba(0,0,0,0.4),_inset_0px_-5px_15px_rgba(255,255,255,0.2)] cursor-custom transition-all duration-300
   
   peer-checked:bg-[#242424]
   
   
   after:w-[28px] after:h-[25px] after:block after:absolute after:top-[3px] after:left-[3px] after:bg-gradient-to-b after:from-[#ffcc89] after:to-[#d8860b] after:rounded-[100px] after:shadow-[0px_5px_10px_rgba(0,0,0,0.3)] after:transition-all  after:duration-300 after:ease-in-out
   
   
   active:after:w-[35px]

   peer-checked:after:left-[57px] peer-checked:after:-translate-x-full  peer-checked:after:bg-gradient-to-b peer-checked:after:from-[#777] peer-checked:after:to-[#3a3a3a]
   
   
   ' htmlFor="darkmode-toggle">
    <IoSunnyOutline   className={`absolute w-[20px] h-[20px] top-[5px] z-[100] left-[6px]  duration-300  ${theme == 'dark'?'text-white':'text-[#7e7e7e]'}` }/>
    <IoMoonOutline  className={`absolute  w-[18px] h-[18px] top-[5px] z-[100] left-[35px] text-[#7e7e7e] duration-300 ${theme == 'dark'?'text-white':'text-[#7e7e7e]'}`}/>
   </label>
    </>
  )
}
export default ThemeToggle
