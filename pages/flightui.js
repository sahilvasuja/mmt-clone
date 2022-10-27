import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
const flightui = () => {
  return (
   <>
    <div className='text-black bg-white flex flex-row p-8 gap-5 text-center'>
    <FaArrowLeft classname=" text-2xl  text-center item-center" />
    <h1 className='text-black text-2xl'>Flight Search</h1>
    </div>
    <div className='flex flex-row  border justify-evenly bg-white -m-8 mx-96 w-3/6 rounded-sm'>
        <h2 className='text-black text-xl p-4 bg-sky-600'>ONE WAY</h2>
        <h2 className='text-black text-xl p-4'>ROUNDTRIP</h2>
        <h2 className='text-black text-xl p-4'>MULTICITY</h2>
    </div>

   </>
  )
}

export default flightui