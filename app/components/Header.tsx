import Image from 'next/image'
import Link from "next/link";
import ThemeToggle from './ThemeToggle';


export  const Header = () => {
    
  return (
    <>
  <header className='font-poppins  bg-white fixed left-1/2 -translate-x-1/2 top-[2%] h-14 w-full max-w-[1100px] rounded-full'>
  

  <div className=' mx-auto flex items-center justify-between px-10 h-full'>
    <Link href="/" className="flex items-center gap-2 ">
     <Image src="/logo.svg" alt="Logo" width={130} height={29}  priority/>
    </Link>

    <nav>
        <ul className='flex items-center'>
            <li className='px-5'>
                <Link href="/" className="hover:text-indigo-600 transition-colors text-gray-500 font-bold text-[12px]">
              Upload & Generate
               </Link>
            </li>
            <li className='px-5'>
         <Link href="/about" className="hover:text-indigo-600 text-gray-500 transition-colors text-[12px]">
           View Results
          </Link>
            </li>
            <li className='px-5'>
          <Link href="/services" className="hover:text-indigo-600 text-gray-500 transition-colors text-[12px]">
           Analytics
          </Link>
            </li>
            <li className='px-5'>
               <ThemeToggle/>
            </li>
        </ul>
          
          
         
          
    </nav>
    
  </div>
  </header>

  <p className='h-[1000px]'></p>
  </>
  )
}
