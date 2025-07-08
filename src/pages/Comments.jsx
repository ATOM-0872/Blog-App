import React from 'react'
import Navbar from '../Components/Navbar'

const Comments = () => {
  return (
    <>
   <Navbar/>

    <h1 className=' text-2xl font-sans ml-32 mt-6 mb-3'>Comments</h1>
    <div className='relative'>
    <div className='  flex items-center justify-center border mx-auto  w-5/6 h-72 rounded-sm'>
   
    <textarea id='comment' className=" w-full h-full border rounded-sm p-2 resize-none focus:outline-none focus:ring-2 focus:[#4A97E9]"
     placeholder="Type your comment here..."/>

</div>
    </div>   
    <div className='flex items-center justify-end mr-28 mt-3'>
    <button className="absolute top-96 mr-4  items-center justify-center flex p-2 rounded-full bg-[#4A97E9] text-white font-extralight  text-sm font-sans tracking-wider w-16 ~sm:w-24">
           Post
          </button>
       
        </div>
        <div className='flex items-center justify-center mt-5'>
        <div className='relative flex items-center w-4/5 h-32'>
        
        <img
          className="absolute top-0 h-[43px] bg-cover rounded-full cursor-pointer mr-12"
          src="https://static.vecteezy.com/system/resources/thumbnails/039/360/478/small_2x/ai-generated-business-woman-potrait-photo.jpg "
          alt="User Profile"
        />
        <h2 className='absolute top-3 left-16 text-gray-600'>_T amor</h2>
        <a href="#" className='absolute right-0 top-0 text-[#4A97E9]' >View Profile</a>
        <p className='mx-12 mt-7 '>Comment goes here Comment goes here Comment goes here Comment goes here Comment goes here Comment goes here Comment goes here Comment goes here Comment goes here Comment goes here</p>
     
        </div>
        
        </div>
        

       <div className='mx-44 my-3'> <hr /></div>
   
      
        <div className='flex items-center justify-center mt-3'>
        <div className='relative flex items-center w-4/5 h-32 '>
        
        <img
          className="absolute top-0 h-[43px] bg-cover rounded-full cursor-pointer mr-12"
          src="https://static.vecteezy.com/system/resources/thumbnails/039/360/478/small_2x/ai-generated-business-woman-potrait-photo.jpg "
          alt="User Profile"
        />
        <div className=' flex  '>
        <h2 className='absolute top-3 left-16 text-gray-600'>_Samm</h2>
        <a href="#" className='absolute right-0 top-0 text-[#4A97E9]' >View Profile</a>

        </div>
        <p className='mx-12 mt-7  '>Comment goes here Comment goes here Comment goes here Comment goes here Comment goes here Comment goes here Comment goes here Comment goes here Comment goes here Comment goes here</p>
     
        </div>
        
        </div>
        
        

   
  
   
   </>
  )
}

export default Comments