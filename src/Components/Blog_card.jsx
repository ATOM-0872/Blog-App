import React from "react";
import Blog_data from "../data/Blog_data";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";

const Blog_card = () => {
 

  return (
    <>
      <div className="flex flex-wrap gap-3 items-center justify-center font-sans,serif mx-10">
        {Blog_data.map((item) => (
          <div
            key={item.id}
            className=" border outline-none h-auto w-72  rounded-lg cursor-pointer "
          >
            {/* <div className="ease-out hover:scale-105  transition-transform duration-400  "> */}
            <img
              className="rounded-tl-lg rounded-tr-lg  h-[200px] w-full  object-cover"
              src={item.image}
              alt=""
            />

            <div className="ml-2 mt-2 ">
              <h1 className="text-base w-full whitespace-nowrap overflow-hidden text-ellipsis font-medium">{item.title}</h1>
              <p className="text-sm my-2 line-clamp-2 overflow-hidden font-light " >{item.description}</p>
            </div>
            {/* </div> */}
            <hr />
            <div className="flex items-center justify-center gap-1">
              <button className="flex items-center justify-center p-3 text-xl gap-10 hover:text-[#4A97E9] ">
                <BiLike />
              </button>
              <button className="flex items-center justify-center p-3 text-xl gap-10 hover:text-[#4A97E9]">
                <BiDislike />
              </button>
              <button className="flex items-center justify-center p-3 text-xl gap-10 transition-all hover:text-[#4A97E9] ">
                <GoComment />
              </button>
              <div className="flex items-center justify-between ml-20">
              <button className="flex items-center justify-center p-3 text-xl gap-10 transition-all hover:text-[#4A97E9] ">
              <IoIosSettings />
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog_card;
