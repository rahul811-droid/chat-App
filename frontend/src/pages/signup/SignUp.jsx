import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp 
          <span className='text-blue-500'> chatApp</span>


          </h1>
          <form >
          <div>
              <label className='label p-2'>
              <span className='text-base label-text font-bold text-cyan-100'>full name</span>
              </label>
              <input type="text" placeholder="Enter your name" className="input w-full input-bordered h-10 bg-black text-white" />
              </div>
          <div>
              <label className='label p-2'>
              <span className='text-base label-text font-bold text-cyan-100'>username</span>
              </label>
              <input type="text" placeholder="Enter Username.." className="input w-full input-bordered h-10 bg-black text-white" />
              </div>


          <div>
              <label className='label p-2'>
              <span className='text-base label-text font-bold text-cyan-100'>Password</span>
              </label>
              <input type="password"  placeholder="Enter password" className="input  w-full input-bordered h-10 bg-black text-white" />
              </div>
          <div>
              <label className='label p-2'>
              <span className='text-base label-text font-bold text-cyan-100'>Confirm Password</span>
              </label>
              <input type="password"  placeholder="Enter password" className="input  w-full input-bordered h-10 bg-black text-white" />
              </div>
              <GenderCheckbox   />

              <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block font-bold text-cyan-100'>

                  Already have an account?
              </a>
               <button className='btn btn-block btn-sn mt-2'>signup</button>



          </form>
    </div>
  </div>
  )
}

export default SignUp
