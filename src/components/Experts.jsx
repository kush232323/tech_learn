import React from 'react';

const Banner = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        <img 
          className='w-full h-auto object-cover p-2 mx-auto my-4'
          src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg" 
          alt='Coding'
        />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold text-xl md:text-2xl mb-4'>
            LEARN FROM EXPERTS
          </p>
          <p className='text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-white w-full md:w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
