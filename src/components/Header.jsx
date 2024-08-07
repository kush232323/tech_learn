import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-[rgb(38,153,251)] p-4'>
      <div className='max-w-[1240px] mx-auto flex items-center justify-between py-[12px]'>
        <div className='text-2xl font-bold text-white'>
          Tech_Learn
        </div>

      
        <div className='md:hidden'>
          {toggle ? 
            <AiOutlineClose 
              onClick={() => setToggle(!toggle)} 
              className='text-white text-2xl' 
            />: 
            <AiOutlineMenu 
              onClick={() => setToggle(!toggle)} 
              className='text-white text-2xl' 
            />
          }
        </div>
        <ul className='hidden md:flex text-white gap-10'>
          <li>Home</li>
          <li>Company</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className={`fixed top-[88px] left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-6 p-4 transition-transform duration-300 ${toggle ? "translate-x-0" : "translate-x-full"}`}>
          <li className='text-2xl cursor-pointer' onClick={() => setToggle(false)}>Home</li>
          <li className='text-2xl cursor-pointer' onClick={() => setToggle(false)}>Company</li>
          <li className='text-2xl cursor-pointer' onClick={() => setToggle(false)}>About</li>
          <li className='text-2xl cursor-pointer' onClick={() => setToggle(false)}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
