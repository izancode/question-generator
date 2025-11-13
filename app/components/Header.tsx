import Image from 'next/image'
import Link from "next/link";
import MenuToggle from './MenuToggle';
export  const Header = async () => {
return (
<>
  <header className='font-poppins fixed top-[0] left-[0] h-[56px] w-full bg-white dark:bg-[#303030] shadow-[0px_3px_8px_0px_rgba(16,24,40,0.04),_0px_12px_24px_0px_rgba(16,24,40,0.12)] 
    flex items-center justify-between px-5  sm:px-10
  lg:max-w-[824px] lg:top-[3%] lg:rounded-full lg:left-1/2 lg:-translate-x-1/2
  '>
    <Link href="/" className="flex items-center gap-2">
     <Image src="/logo.svg" className='dark:hidden block' alt="Logo" width={130} height={29}  priority/>
     <Image src="/logo-dark.svg" className='dark:block hidden' alt="Logo" width={130} height={29}  priority/>
    </Link>
    <MenuToggle />
  </header>
 
  </>
  )
}
