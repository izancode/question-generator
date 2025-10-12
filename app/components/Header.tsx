import React from 'react'
import Image from 'next/image'

export  const Header = () => {
  return (
    <div>
  <header className='border-4 border-indigo-500 bg-white fixed left-1/2 -translate-x-1/2 top-0 h-20 w-full max-w-[1100px]'>
  <Image src="/logo.svg" alt="Logo" width={150} height={50} className='h-12 w-auto mt-4 ml-4'/>
  </header>

  <p className='h-[1000px]'></p>
  </div>
  )
}
