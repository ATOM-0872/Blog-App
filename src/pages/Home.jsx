import React from "react";
import Navbar from "../Components/Navbar";
import Category from "../components/Category";
import Blog_card from "../Components/Blog_card";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Home = () => {
  return (
    <>
      <Navbar />
    
      <Category />
      <Blog_card />

  

      <div className="flex flex-wrap items-center justify-center gap-2 text-black mt-4 mb-6  ">
        <button className="flex items-center justify-center border-2 w-72 rounded-full h-[40px] p-5 gap-2 transition-all "> 
          
          View more about <span className="text-[#4A97E9]">Today</span>
    
        </button>
       

      </div>
      <div className="flex flex-wrap ml-20 items-center justify-start  gap-2 text-black mt-2 mb-6  " > <button   className="flex items-center justify-center border w-auto rounded-full h-[40px] p-5 transition-all text-white bg-[#4A97E9] cursor-pointer font-light  ">All</button></div>
      <Blog_card />
      <div className="flex flex-wrap items-center justify-center gap-2 text-black mt-4 mb-6  ">
        <button className="flex items-center justify-center border-2 w-72 rounded-full h-[40px] p-5 gap-2 transition-all ">
          View <span className="text-[#4A97E9] cursor-pointer font-normal">All</span>
        </button>
      </div>
      
    </>
  );
};

export default Home;
