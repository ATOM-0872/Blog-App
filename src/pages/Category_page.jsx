import React from "react";
import Navbar from "../Components/Navbar";
import Category_page_data from "../data/Category_page_data";


const Category_page = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl m-7 ml-16">Select Category</h1>

      <div className="flex flex-wrap items-center justify-center gap-2 text-black mt-2 mb-6   ">
        {Category_page_data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center border-2 w-auto rounded-full h-[40px] p-5 transition-all hover:text-white hover:bg-[#4A97E9] cursor-pointer  "
          >
            {item.Category}
          
          </div>
          
          
        ))}
      </div>
      
    
    </>
  );
};

export default Category_page;
