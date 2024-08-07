import React from "react";

function NewsLetters() {
  return (
    <div className="w-full bg-[rgb(38,153,251)] p-4 ">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
        <div className="m-2">
          <h1 className="text-[20px] md:text-[40px] font-bold text-white">
            Want to learn latest I.T skills?
          </h1>
          <span className="text-white">
            Singn up to our newsletter and up to date.
          </span>
        </div>

        <div className="m-2">
          <input
            type="text"
            className="sm:w-full rounded mb-2s p-3 mr-2 text-slate-600"
            placeholder="Email"
          />
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6  mx-auto md:mx-0 py-3">
            Get Started
          </button>
          <br />
          <p className="text-white">
            We Care bout protection of your data. our <br />{" "}
            <button className='text-black underline bg-transparent border-none p-0'>
            Privacy Policy
          </button>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetters;
