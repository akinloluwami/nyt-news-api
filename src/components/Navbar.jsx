import React from "react";

function Navbar() {
  return (
    <div className="">
      <nav className="flex justify-between">
        <div className="flex space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#292b42]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div>
            <input
              type="text"
              name=""
              className="bg-[#f6f4f0] text-black rounded-full border border-black w-2/3 placeholder:text-black px-1 py-0.5 placeholder:font-thin placeholder:text-sm"
              placeholder="Search"
              id=""
            />
          </div>
        </div>
        <div>
          <span className="font-semibold text-3xl text-[#292b42]">
            .todaynews
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-md font-semibold">Sign in</span>
          <a href="" className="px-3 py-2 rounded-full bg-[#292b42] text-white">
            Subscribe now
          </a>
        </div>
      </nav>
      <div className="pt-12 px-44">
        <div className="flex justify-between">
          <a
            href="#"
            className="text-sm text-[#292b42] font-bold border-b-2 border-[#292b42]"
          >
            News
          </a>
          <a href="#" className="text-sm text-[#292b42] font-bold">
            Sports
          </a>
          <a href="#" className="text-sm text-[#292b42] font-bold">
            Entertainmet
          </a>
          <a href="#" className="text-sm  text-[#292b42] font-bold">
            Life
          </a>
          <a href="#" className="text-sm text-[#292b42] font-bold">
            Money
          </a>
          <a href="#" className="text-sm text-[#292b42] font-bold">
            Travel
          </a>
        </div>
        <div className=""></div>
      </div>
      <div className="border-black border-b"></div>
    </div>
  );
}

export default Navbar;
