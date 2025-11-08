import Image from 'next/image'
import Link from "next/link";
import ThemeToggle from './ThemeToggle';


export  const Header = () => {
    
  return (
    <>
  <header className='font-poppins border-4 border-indigo-500 bg-white fixed left-1/2 -translate-x-1/2 top-[2%] h-20 w-full max-w-[1100px] rounded-full'>
  

  <div className='max-w-6xl mx-auto flex items-center justify-between px-4 h-full'>
    <Link href="/" className="flex items-center gap-2 ">
     <Image src="/logo.svg" placeholder="blur" blurDataURL="/logo.svg" alt="Logo" width={150} height={29} />
    </Link>

    <nav>
        <ul className='flex items-center'>
            <li className='px-5'>
                <Link href="/" className="hover:text-indigo-600 transition-colors text-gray-500 font-bold">
              Upload & Generate
               </Link>
            </li>
            <li className='px-5'>
         <Link href="/about" className="hover:text-indigo-600 text-gray-500 transition-colors">
           View Results
          </Link>
            </li>
            <li className='px-5'>
          <Link href="/services" className="hover:text-indigo-600 text-gray-500 transition-colors">
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
