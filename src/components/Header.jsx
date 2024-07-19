import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-[#2699fb] p-4'>


<div className='max-w-[1240px] py-[12px] items-center flex justify-between   mx-auto'>
<div className='text-2xl font-bold'>
    TEch_LEarn
</div>

{
  toggle ? 
  <AiOutlineClose onClick={()=>setToggle(!toggle)}  className='text-white text-2xl md:hidden block'/> 
  :
  
<AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
 


}
<ul className='hidden md:flex text-white gap-10'>

<li>
    Home
</li>

<li>
    Company
</li>

<li>
    About
</li>

<li>
  Contact
</li>
</ul>
<ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black  top-[88px]
 ${toggle ?  "left-[0]" : "left-[-100%]"} 
  `}>

<li className='p-5'>
    Home
</li>

<li className='p-5'>
    Company
</li>

<li className='p-5'>
    About
</li>

<li className='p-5'>
  Contact
</li>
</ul>


</div>


    </div>
  )
}

export default Header
