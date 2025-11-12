import Image from 'next/image'
import Link from "next/link";
import ThemeToggle from './ThemeToggle';
import MenuToggle from './MenuToggle';
import { RiAiGenerate } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { toggleLayout } from '../actions/toggleAction';




export  const Header = async () => {
  
  const isActive = await toggleLayout();
  console.log("Header server isActive",isActive)

  return (
<>
  <header className='max-w-[1023px]   font-poppins fixed left-1/2 -translate-x-1/2 top-[0%] h-[56px] w-full   bg-white shadow-[0px_3px_8px_0px_rgba(16,24,40,0.04),_0px_12px_24px_0px_rgba(16,24,40,0.12)] 


  lg:max-w-[824px] lg:top-[3%] lg:rounded-full
  '>
  

  <div className='mx-auto flex items-center justify-between px-5 h-full sm:px-10'>
    <Link href="/" className="flex items-center gap-2">
     <Image src="/logo.svg" alt="Logo" width={130} height={29}  priority/>
    </Link>

    <nav className={`max-lg:fixed max-lg:bg-transparent ${isActive ?'max-lg:top-[100px]' : 'max-lg:top-[56px]'  }  max-lg:left-[0px] max-lg:transition-all max-lg:duration-300 max-lg:ease-in-out   max-lg:w-full max-lg:px-[26px]  max-lg:py-[5px]`} >
        <ul className='flex items-center  max-lg:justify-around max-lg:bg-white max-lg:p-1'>
            <li className='lg:px-5'>
                <Link href="/" className="hover:text-indigo-600 transition-colors text-gray-500 font-bold text-[12px]">
              <span className='max-lg:hidden'>Upload & Generate</span> <RiAiGenerate className='lg:hidden w-[18px] h-[18px]'/>
               </Link>
            </li>
            <li className='lg:px-5'>
         <Link href="/about" className="hover:text-indigo-600 text-gray-500 transition-colors text-[12px]">
          <span className='max-lg:hidden'> View Results</span><GrView className='lg:hidden w-[18px] h-[18px]'/>
          </Link>
            </li>
            <li className='lg:px-5'>
          <Link href="/services" className="hover:text-indigo-600 text-gray-500 transition-colors text-[12px]">
          <span className='max-lg:hidden'> Analytics</span><TbBrandGoogleAnalytics className='lg:hidden w-[18px] h-[18px]'/>
          </Link>
            </li>
            <li className='lg:px-5'>
               <ThemeToggle />
            </li>
        </ul>
          
          
         
          
    </nav>

   
    <MenuToggle />
    
    
  </div>
  </header>

  <p className='h-[1000px]'></p>
  </>
  )
}
