import React from 'react'

const Otp = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center w-60 m-auto mt-48 '>
    
         <h1 className='text-8xl font-extrabold font-sans tracking-wide text-gray-900 '>BLOG</h1>
         <div className=' flex flex-col  border rounded-md w-80 mt-7 h-auto'>
            <p className= 'flex my-2 items-center ml-3 mt-5 justify-start text-sm font-sans tracking-wide'>Enter OTP</p>
            <input className=' mt-3 mb-3 bg-gray-100 mx-2 p-3 rounded-sm outline-none font-sans tracking-wide ' type="number" placeholder='OTP' />
            <button className=' mb-6 bg-[#4A97E9] text-white mx-2 p-3 rounded-sm font-sans tracking-wide'>Next</button>
           
            
         </div>
    </div>
    
    </>
  )
}

export default Otp