import React from "react";
import Category_data from "../data/Category_data";


const Category = () => {
  return (
    <>
 
        <div className="flex flex-wrap items-center justify-start gap-2 text-black font-light mt-6 mb-6 ml-20">
          {Category_data.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center border w-auto rounded-full h-[40px] p-5 transition-all hover:text-white hover:bg-[#4A97E9] cursor-pointer">
              {item.Category}
            </div>
          ))}
           
        </div>
        
       
    </>
  );
};

export default Category;
