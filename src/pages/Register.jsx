
import React from 'react'

const Register = () => {
  return (
    <>
    
    <div className='flex flex-col items-center justify-center w-60 m-auto mt-16'>
    
         <h1 className='text-8xl font-extrabold text-gray-900 font-sans tracking-wide '>BLOG</h1>
         <div className=' flex flex-col  border rounded-md w-80 mt-7 h-auto'>
            <p className= 'flex my-2 items-center justify-center'>Register</p>
            <input className=' mt-3 bg-gray-100 mx-2 p-3 rounded-sm outline-none' type="name" placeholder='Name'/>
            <input className=' mt-3 bg-gray-100 mx-2 p-3 rounded-sm outline-none' type="text" name='username' placeholder='User name'/>
            <input className=' mt-3 mb-2 bg-gray-100 mx-2 p-7 rounded-sm outline-none' type="text"  placeholder='Bio'/>
            </div>
            <div className=' flex flex-col  border rounded-md w-80 mt-2 h-auto'>
            <input className=' mt-3 bg-gray-100 mx-2 p-3 rounded-sm outline-none' type="email" placeholder='Email' />
            <input className=' mt-2 mb-3 bg-gray-100 mx-2 p-3 rounded-sm' type="password" placeholder='Password' />
            <button className=' mb-3 bg-[#4A97E9] text-white mx-2 p-3 rounded-sm'>Login</button>
            <a  href="#" className='flex items-center justify-end mr-2 mb-4 text-[#4A97E9]'>login to account..</a>
            
         </div>
    </div>
    
    </>
  )
}

export default Register