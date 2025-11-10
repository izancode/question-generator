'use client';
import { PiHamburger } from "react-icons/pi";
import { RiCloseCircleLine } from "react-icons/ri";
import {  useState } from 'react';


const MenuToggle = () => {
    const [menu, setMenu] = useState(false);

    const menuToggle= async ()=>{
    const newState = !menu;
    setMenu(newState);

    }
   
  return (
     <div className='lg:hidden text-black' onClick={menuToggle}>
        {menu ?<RiCloseCircleLine className=' w-[30px] h-[30px]'/> : <PiHamburger className=' w-[30px] h-[30px]'/>}
     </div>
  )
}

export default MenuToggle
