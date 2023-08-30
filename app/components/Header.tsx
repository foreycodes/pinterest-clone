import React from "react";
import Image from "next/image";

import { HiSearch, HiBell, HiChat } from "react-icons/hi";

function Header() {
  return (
    <div className='flex gap-3 md:gap-2 items-center justify-center p-6'>
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />
      <button className="bg-black text-white p-2 px-4 rounded-full">
        Home
      </button>
      <button>Create</button>
      <div className="bg-gray-100 p-3 md:flex gap-3 items-center rounded-full w-full hidden">
        <HiSearch className='text-2xl text-gray-500'/>
        <input type="text" placeholder="Search" className='bg-transparent outline-none' />
      </div>
      <HiBell className='text-3xl text-gray-500 flex-shrink-0'/>
      <HiChat className='text-3xl text-gray-500 flex-shrink-0'/>
      <Image
        src="/pfp.png"
        alt="user-image"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />
    </div>
  );
}

export default Header;
