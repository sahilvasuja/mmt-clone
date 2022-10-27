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
    <div className="border border-black w-1/4 h-36 flex flex-col  text-black p-2 ">
        <h5 className="text-xl">FROM</h5>
        <input className="text-2xl bg-white text-black" value={journeyBeggin} onChange={Startjourney}></input>
        <input className="text-lg bg-white" value={` ${journeyBeggin.substring(0,3)} ${journeyBeggin} International AIRPORT`}></input>
      </div>
      <div className="border border-black w-1/4 h-36 flex flex-col text-black p-2">
        <h5 className="text-xl">TO</h5>
        <input className="text-2xl bg-white" value={journeyOver} onChange={Endjourney} ></input>
        <input className="text-lg bg-white" value={` ${journeyOver.substring(0,3)} ${journeyOver} International AIRPORT...`}></input>
      </div>
      <div className="border border-black w-1/5 h-36 flex flex-col  text-black p-2">
        <div className="text-xl">DEPARTURE </div>
        <input className="text-2xl bg-white" value={journeydate} onChange={date}></input>
        <div className="text-lg">Friday</div>
      </div>
   </>
  )
}

export default flightui