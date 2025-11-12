'use client';
import { PiHamburger } from "react-icons/pi";
import { RiCloseCircleLine } from "react-icons/ri";
import {  useState } from 'react';
import { toggleLayout } from "../actions/toggleAction";

const MenuToggle = () => {
    const [menu, setMenu] = useState(true);

    const menuToggle= async ()=>{
   
    console.log("newState",!menu)
    setMenu(!menu);

    await toggleLayout(!menu);

    }
   
  return (
     <div className='lg:hidden text-black' onClick={menuToggle}>
        {menu ? <PiHamburger className=' w-[30px] h-[30px]'/>:<RiCloseCircleLine className=' w-[30px] h-[30px]'/> }
     </div>
  )
}

export default MenuToggle
