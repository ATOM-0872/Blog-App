import React from 'react'
import Navbar from '../Components/Navbar'
import Category from '../components/Category'
import Blog_card from '../Components/Blog_card'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";

const Blog_details = () => {
  return (
    <>
   <Navbar/>
   <div className=' flex flex-row w-full'>
   <div className='relative flex flex-col  w-[70%] h-auto   ml-6 tracking-wider  border rounded-md  overflow-y-auto  max-h-[900px]   '>
   


<h1 className=' mx-4  flex justify-between text-3xl font-sans w-[500px] font-extrabold'>Common side effects of not drinking</h1>
<p className='text-gray-500 font-extralight font-sans w-[70%] text-lg my-2 mx-4'>By rejecting alcohol, you reject something very human, an extra limb that we have collectively grown to deal with reality and with each other. Getting around without it is not painless</p>
<div className='flex mt-2  items-center justify-start gap-2 ml-2 '>
<img
   className=" ml-0  top-0 size-7 bg-cover rounded-full cursor-pointer "
   src="https://static.vecteezy.com/system/resources/thumbnails/039/360/478/small_2x/ai-generated-business-woman-potrait-photo.jpg "
   alt="User Profile"/>
 <h2 className='text-base top-3 left-16 text-gray-600 font-sans font-light'>T_amor</h2>
 <p className='text-xs flex justify-between gap-2 font-sans  font-extralight'><p className="text-gray-500 font-semibold">{'\u00B7'}</p>Jun 5,2025</p>

<div className='flex ml-[500px]   gap-6'>
               <button className="flex items-center   text-xl  transition-all hover:text-[#4A97E9] ">
                 <BiLike />
               </button>
               <button className="flex items-center  text-xl  transition-all hover:text-[#4A97E9]">
                 <BiDislike />
               </button>
               <button className="flex items-center  text-xl  transition-all hover:text-[#4A97E9] ">
                 <GoComment />
               </button>
               <button className="flex items-center   text-xl  transition-all hover:text-[#4A97E9] ">
               <IoIosSettings />
               </button>
               </div>
               </div>
<div className='flex flex-col mx-12 mt-2  items-center justify-center top-11  h-auto '>
    <img className='flex flex-wrap w-[70%] object-cover h-auto  mt-2'
 src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*wd_HmipNaZS3-FWSgXc8WQ.jpeg" alt="Me on a wedding in 2022 vs in 2023. The reality on the right is less vibrant" />
<p className=' font-light text-gray-800 font-sans serif w-[70%] text-lg my-2 mt-10'>Over a year ago, someone shared with me this informative, factual, yet thoroughly bleak podcast by Andrew Huberman about the effects of any amount of alcohol on your brain and body. Since I had just reached the wise age of thirty, otherwise known as the age when you have less fucks to give, I asked myself why I drank at all and what would happen if I stopped. And then I stopped. You know how it goes from there. I felt great, I saved money, ‘I often regretted drinking but I never regretted not drinking’ and so on. It’s all true.
However, before that, since the first glass of wine that my parents gave me at 12, for the good 18 years of my life, I did regularly drink. Why?
<br /><p className=' font-sans text-2xl mt-5 font-extrabold flex items-center ml-4'>Because that’s what people do.</p><br />
So, let’s start by saying that when you stop drinking, people don’t know what to do with you.The side effects of being sober
 <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*6F2misGFIL-FsITDew07VQ.png" alt="" />
People will ask you why you don’t drink.
They react well if you respond honestly. They don’t react well if you reverse the question in return. Pro tip: you can do that if you don’t want them to speak to you for the rest of the party.
People will ask you for permission to drink.
Oh you don’t? Good for you! Would you mind if I had a beer though?
Why would I?! I’ve just explained it’s not because of a past addiction or an alcoholic parent. The only reason I see for this persistent question is…
People will think you are judging them.
<a className=' my-5 flex items-center justify-center font-medium text-blue-400' href="#">Read more</a>
</p>
</div>
</div>






<div className='w-[30%] mx-4 h-auto overflow-y-auto  max-h-[900px]'>
<h1 className='text-lg '>Comments</h1>
<div className='mx-6 my-3'><hr /></div>
<div className='flex items-center justify-start gap-3 ml-4'>
<img
   className=" ml-0  top-0 size-7 bg-cover rounded-full cursor-pointer   "
   src="https://static.vecteezy.com/system/resources/thumbnails/039/360/478/small_2x/ai-generated-business-woman-potrait-photo.jpg "
   alt="User Profile"/>
 <h2 className='text-base top-3 left-16 text-gray-600 font-sans font-light'>Aryanshii</h2>
 </div>

<div className='flex flex-col items-center justify-center relative  mt-3  mx-5  '>
  
   <textarea id='comment'   className="  mt-2 font-sans tracking-wider w-full rounded-sm outline-none border  text-xs bg-gray-100   h-32    p-2 resize-none focus:outline-none focus:ring-2 focus:[#4A97E9]"
    placeholder ="What your thoughts?"/>
    <button className=' absolute  flex items-center justify-center right-3 top-20 mt-4 mr-16 font-light  text-xs font-sans tracking-wider'>Cancel</button>
      <button className="absolute  right-3 top-20  mt-3 items-center justify-center flex p-1 w-14 rounded-full bg-[#4A97E9] text-white font-extralight  text-sm font-sans tracking-wider ~sm:w-24">
           Post
          </button>

    </div>
    <div className='my-8'><hr /></div>
    <div className='mx-4 font-extralight tracking-wider text-xs'>
    <div className='flex gap-2  my-4'>

      <img
   className="  top-0 size-7 bg-cover rounded-full cursor-pointer"
   src="https://static.vecteezy.com/system/resources/thumbnails/039/360/478/small_2x/ai-generated-business-woman-potrait-photo.jpg "
   alt="User Profile"/>
 <h2 className='flex text-base items-center top-3 left-16 text-gray-600 font-sans font-light'>Urvasi</h2>
 <p className='text-xs flex justify-between  items-center font-sans  font-extralight'><p className="text-gray-500 font-semibold">{'\u00B7'}</p>Jun 5,2025</p>


 </div>
 <p>I have had a very good life without alcohol. No one around me drank and I never felt the need to drink myself. My wife at the time (I was 32) decided our life was boring and wanted to go out dancing with her best friend. Don't like to dance and... <a href="#"><u>more</u></a></p>
 <div className='flex my-4 gap-6'>
               <button className="flex items-center   text-lg  transition-all hover:text-[#4A97E9] ">
                 <BiLike />
               </button>
               <button className="flex items-center  text-lg  transition-all hover:text-[#4A97E9]">
                 <BiDislike />
               </button> <a href="#"><u>Reply</u></a>
             
    </div>
    <div className='mx-6 my-3'><hr /></div>
    <div className='flex gap-2  my-4 '>

      <img
   className="  top-0 size-7 bg-cover rounded-full cursor-pointer  "
   src="https://static.vecteezy.com/system/resources/thumbnails/039/360/478/small_2x/ai-generated-business-woman-potrait-photo.jpg "
   alt="User Profile"/>
 <h2 className='flex text-base items-center top-3 left-16 text-gray-600 font-sans font-light'>Lainii</h2>
 <p className='text-xs flex justify-between  items-center font-sans  font-extralight'><p className="text-gray-500 font-semibold">{'\u00B7'}</p>Jun 5,2025</p>
 </div>
 <p>I have had a very good life without alcohol. No one around me drank and I never felt the need to drink myself. My wife at the time (I was 32) decided our life was boring and wanted to go out dancing with her best friend. Don't like to dance and... <a href="#"><u>more</u></a></p>
 <div className='flex my-4 gap-6'>
               <button className="flex items-center   text-lg  transition-all hover:text-[#4A97E9] ">
                 <BiLike />
               </button>
               <button className="flex items-center  text-lg  transition-all hover:text-[#4A97E9]">
                 <BiDislike />
               </button> <a href="#"><u>Reply</u></a>
             
    </div>
    <div className='mx-6 my-3'><hr /></div>
    <div className='flex gap-2  my-4 '>

      <img
   className="  top-0 size-7 bg-cover rounded-full cursor-pointer  "
   src="https://static.vecteezy.com/system/resources/thumbnails/039/360/478/small_2x/ai-generated-business-woman-potrait-photo.jpg "
   alt="User Profile"/>
 <h2 className='flex text-base items-center top-3 left-16 text-gray-600 font-sans font-light'>Meghana</h2>
 <p className='text-xs flex justify-between  items-center font-sans  font-extralight'><p className="text-gray-500 font-semibold">{'\u00B7'}</p>Jun 5,2025</p>


 </div>
 <p>I have had a very good life without alcohol. No one around me drank and I never felt the need to drink myself. My wife at the time (I was 32) decided our life was boring and wanted to go out dancing with her best friend. Don't like to dance and... <a href="#"><u>more</u></a></p>
 <div className='flex my-4 gap-6'>
               <button className="flex items-center   text-lg  transition-all hover:text-[#4A97E9] ">
                 <BiLike />
               </button>
               <button className="flex items-center  text-lg  transition-all hover:text-[#4A97E9]">
                 <BiDislike />
               </button> <a href="#"><u>Reply</u></a>
             
    </div>
    <div className='mx-6 my-3'><hr /></div>
    <div className='flex gap-2  my-4 '>

      <img
   className="  top-0 size-7 bg-cover rounded-full cursor-pointer  "
   src="https://static.vecteezy.com/system/resources/thumbnails/039/360/478/small_2x/ai-generated-business-woman-potrait-photo.jpg "
   alt="User Profile"/>
 <h2 className='flex text-base items-center top-3 left-16 text-gray-600 font-sans font-light'>Jessi</h2>
 <p className='text-xs flex justify-between  items-center font-sans  font-extralight'><p className="text-gray-500 font-semibold">{'\u00B7'}</p>Jun 5,2025</p>


 </div>
 <p>I have had a very good life without alcohol. No one around me drank and I never felt the need to drink myself. My wife at the time (I was 32) decided our life was boring and wanted to go out dancing with her best friend. Don't like to dance and... <a href="#"><u>more</u></a></p>
 <div className='flex my-4 gap-6'>
               <button className="flex items-center   text-lg  transition-all hover:text-[#4A97E9] ">
                 <BiLike />
               </button>
               <button className="flex items-center  text-lg  transition-all hover:text-[#4A97E9]">
                 <BiDislike />
               </button> <a href="#"><u>Reply</u></a>
             
    </div>
    
    
 </div>
   </div>  
   </div>
  






<h1 className='ml-7 my-4 font-sans tracking-wide text-2xl'>Recommended</h1>






 <Category/>
 <Blog_card />
 

 </>


  )
}

export default Blog_details