import React, { useEffect } from 'react'
import { useState } from 'react';
import { supabase } from '../utils/supabase';
import { FaArrowLeft,FaPlaneDeparture } from "react-icons/fa";
const flightui = () => {
    const [journeyBeggin,setJourneyBeggin]=useState("Delhi");
  const Startjourney=(e)=>{
      setJourneyBeggin(e.target.value);
  }
  const [journeyOver,setJourneyOver]=useState("Bengaluru");
  const Endjourney=(e)=>{
      setJourneyOver(e.target.value);
  }
  const [journeydate,setJourneyDate]=useState("7 oct 2022");
  const date=(e)=>{
      
      setJourneyDate(e.target.value);
  }
  const [member,setMember]=useState("1 Traveller");
  const travel=(e)=>{
      
      setMember(e.target.value + "Traveller");
  }
  useEffect(()=>{
    fetchData();
  },[]);
  async function fetchData(){
    const { data, error } = await supabase
  .from('flight')
  .select('From,To')
  console.log(data)
//   if(JSON.stringify(data.From)==journeyBeggin && JSON.stringify(data.To)==journeyOver){
//     console.log(JSON.stringify(data) + "33");
//   }
//   else{
//     console.log(data)
//   }
  
  }
  
  return (
   <>






{/* <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
  Toggle modal
</button> */}


<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
       
        <div class="relative bg-white rounded-lg shadow ">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 " data-modal-toggle="authentication-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="py-6 px-6  lg:px-8">
                <h3 class="mb-4 text-2xl font-medium text-black ">FLIGHT</h3>
                <form class="space-y-6" action="#">
                   
                        <div className='flex flex-row bg-gray-200 gap-2 p-2'>
                            <h2 className='text-black text-lg p-1 bg-sky-600'>ONE WAY</h2>
                            <h2 className='text-black text-lg p-1'>ROUNDTRIP</h2>
                            <h2 className='text-black text-lg p-1'>MULTICITY</h2>
                        </div>
                    
                    
                    <div className='bg-gray-200 border border-gray-100 flex flex-col p-2'>
                        <label for="email" class="block  text-xl  text-gray-900 dark:text-gray-900">FROM</label>
                        <input type="text"  id="email" class=" text-gray-900 text-xl font-medium  focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800 " value={journeyBeggin} onChange={Startjourney} required=""/>
                        <input type="text"  id="email" class=" text-gray-900 text-lg  focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800" value={` ${journeyBeggin.substring(0,3)} ${journeyBeggin} International AIRPORT`} required=""/>
                    </div>
                   
                    <div className='bg-gray-200 border p-2'>
                        <label for="password" class="block  text-xl  text-gray-900 dark:text-gray-800">To</label>
                        <input type="text" name="password" id="password"  class="font-medium text-gray-900 text-xl  focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800" value={journeyOver} onChange={Endjourney}  required=""/>
                        <input type="text" name="password" id="password"  class=" text-gray-900 text-lg  focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800" value={` ${journeyOver.substring(0,3)} ${journeyOver} International AIRPORT...`} required=""/>

                    </div>
                    <div class="flex justify-between gap-2">
                        <div className='border-gray-700 border bg-gray-200'>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">Departure</label>
                            <input type="text" name="password" id="password"  class=" text-gray-900 text-lg  focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800" value={journeydate} onChange={date} required=""/>

                        </div>
                        <div className='border-gray-700 border bg-gray-200'>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">Departure</label>
                            <input type="text" name="password" id="password"  class=" text-gray-900 text-lg  focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800" value={` ${journeyOver.substring(0,3)} ${journeyOver} International AIRPORT...`} required=""/>
                        </div>
                       </div>
                       <div className='border-gray-700 border bg-gray-200'>
                       <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">Traveller & Class</label>
                            <input type="text" name="password" id="password"  class=" text-gray-900 text-lg  focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800" value={` ${journeyOver.substring(0,3)} ${journeyOver} International AIRPORT...`} required=""/>
                        
                       </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    {/* <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div> */}
                </form>
            </div>
        </div>
    </div>
</div> 

   </>
  )
}

export default flightui