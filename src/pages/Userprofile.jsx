import React from 'react'
import Category from '../components/Category'
import Blog_card from '../Components/Blog_card'


const Userprofile = () => {
  return (
    <>
    
    <div className='w-screen h-auto '>
        <h1 className='text-3xl mt-10 font-light mx-10'>Profile</h1>
        
     
    <div className='flex items-center justify-between  gap-5 mx-10  mt-6 w-[40%]'>
<img className="w-16 mb-12 bg-cover rounded-full cursor-pointer "
   src="https://static.vecteezy.com/system/resources/thumbnails/039/360/478/small_2x/ai-generated-business-woman-potrait-photo.jpg "
   alt="User Profile"/>
   <div className='flex flex-col '>
 <h2 className='text-base top-3 left-16 text-gray-600 font-sans font-light'>T_amor</h2>
 <p className='flex flex-wrap font-light'>I’m a staff software engineer at Medium. I’ve been here since August 2022, working on the Partner Program, publications, stats, and a few other things yet to be revealed.</p>
 <a href="mailto:shivak24303@gmail.com" className='font-light underline text-blue-400 mt-2'>Send Gmail</a>
 </div>
  </div>




  <Category/>

<Blog_card/>
  </div>

    </>
  )
}

export default Userprofile