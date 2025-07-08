import React from "react";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex mx-auto w-full items-center justify-between py-3 px-3 bg-white sticky top-0 z-50 mt-4  ~lg:mx-24 overflow-hidden">

      <button className=" text-4xl text-gray-800  font-serif font-extrabold tracking-widest uppercase ml-16 cursor-pointer">
<Link to="/"> Blog</Link>
      </button>
   
      

      <div className="flex items-center justify-between gap-4 ~md:gap-11">
        {/* Search Bar (Hidden on md screens) */}
        <div className="flex items-center justify-between gap-2 ">
          <a
            href="#"
            className="border-gray-300 border outline-none rounded-full transition-all hover:border-gray-400">
            <input
              type="text"
              placeholder="Search for a blog"
              className="search-box outline-none bg-white rounded-full p-2 w-[180px] sm:w-[200px] ~lg:w-[300px] xl:w-[400px] hover:bg-blue-100"/>
          </a>
          <button className="Search-button items-center justify-center flex p-2 rounded-full bg-[#4A97E9] text-white w-20 ~sm:w-24">
            Search
          </button>
        </div>
<div>
        <FaPen />
        </div>

        <img
          className="h-[43px] bg-cover rounded-full cursor-pointer mr-12"
          src="https://static.vecteezy.com/system/resources/thumbnails/039/360/478/small_2x/ai-generated-business-woman-potrait-photo.jpg "
          alt="User Profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
