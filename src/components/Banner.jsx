import React from 'react';
import { ReactTyped } from 'react-typed'; 

function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
      <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
        <div className='text-xl md:text-3xl md:p-[24px]'>
          Learn With Us
        </div>
        <h2 className='text-white text-3xl md:text-[80px] md:p-[24px]'>
          Grow With Us.
        </h2>
        <div className='text-[25px] md:text-[50px] md:p-[24px] text-white'>
          Learn <ReactTyped
            className='pl-3'
            strings={["Web Development", "Digital Marketing", "Ethical Hacking"]}
            typeSpeed={100}
            backSpeed={25}
            loop
          />
        </div>
        <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Banner;
