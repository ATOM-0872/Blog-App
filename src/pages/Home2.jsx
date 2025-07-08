import React from 'react';
import Navbar from '../Components/Navbar';
import Category from '../components/Category';
import Blog_card from '../Components/Blog_card';




const Home2 = () => {
  return (
    <>
    <Navbar />
    <Category />
    <Blog_card />
  <div className="flex flex-wrap items-center justify-center gap-2 text-black mt-4 mb-6  ">
        <button className="flex items-center justify-center border-2 w-72 rounded-full h-[40px] p-5 gap-2 transition-all ">
          View <span className="text-[#4A97E9] cursor-pointer">All</span>
        </button>
      </div>
    </>
  )
 
}


export default Home2