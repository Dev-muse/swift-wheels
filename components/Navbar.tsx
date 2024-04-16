'use client';

import Image from 'next/image'
import Link from 'next/link'
import {
  UserButton
} from "@clerk/nextjs";
import { usePathname } from 'next/navigation';




const menuitems = [
  { label: 'Home', link: '/' },
  { label: 'History', link: '/history' },
  { label: 'Contact us', link: '/contact' },
]

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath)
  return (
    <div className='flex justify-between items-center p-3 px-5 
    border-b-[1px] shadow-sm'>
      <Image src='/logo.svg' width={200} height={200} alt='swift wheels logo' />
      <ul className='hidden md:flex gap-x-4 items-center' >
        {
          menuitems.map((item, index) => {
            return (
              <li key={index} className='hover:text-white hover:bg-blue-500 
              rounded-full transition-all
              duration-300 px-3 p-2 font-medium'>
                <Link href={item.link}>{item.label}</Link>
              </li>)
          })
        }
      </ul>

      <UserButton />
    </div>
  )
}

export default Navbar