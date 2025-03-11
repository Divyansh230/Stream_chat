import React from 'react'
import { IoSend } from "react-icons/io5";
const Type = () => {
  return (
    <>
     <div className='flex space-x-3 h-[8vh] text-center'>
     <div className='w-[70%]'>
      <input type="text" placeholder="" className="input input-bordered w-full  outline-none" />
      </div>
      <button className='text-5xl'><IoSend /></button>
     </div>
    </>
  )
}

export default Type
