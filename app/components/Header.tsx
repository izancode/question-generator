import Image from 'next/image'
import Link from "next/link";


export  const Header = () => {
  return (
    <div>
  <header className='border-4 border-indigo-500 bg-white fixed left-1/2 -translate-x-1/2 top-[2%] h-20 w-full max-w-[1100px] rounded-full'>
  

  <div className='max-w-6xl mx-auto flex items-center justify-between px-4 h-full'>
    <Link href="/" className="flex items-center gap-2 ">
     <Image src="/logo.svg" alt="Logo" width={150} height={40} />
    </Link>

    <nav>
        <Link href="/" className="hover:text-indigo-600 transition-colors text-gray-500 font-bold">
           Upload & Generate
          </Link>
          <Link href="/about" className="hover:text-indigo-600 text-gray-500 transition-colors">
           View Results
          </Link>
          <Link href="/services" className="hover:text-indigo-600 text-gray-500 transition-colors">
           Analytics
          </Link>
          
    </nav>
    <button className=" p-2 rounded hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
  </div>
  </header>

  <p className='h-[1000px]'></p>
  </div>
  )
}
