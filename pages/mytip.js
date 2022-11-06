import React, { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase';
import { FaPlaneDeparture,FaArrowRight,FaChevronRight } from "react-icons/fa";
 const mytip = () => {
    const [arr,setarr]=useState([])
    useEffect(()=>{
        trip()
    },[]);
   async function trip(){
        const  {data,error}= await supabase
      .from("my_trip")
      .select("*")
    //   const encoded = encodeURIComponent(data);
    //   console.log(encoded , "encoded")
    //      const decoded = decodeURIComponent(encoded);
    //      console.log(decoded , "decoded")
        setarr(data)
       
    }
    
        //  console.log(arr , "decoded")
  return (
    <>
     {console.log(arr)}
    {
       <div > {arr.map((e)=>{
            console.log(e.price + "1")
            return(
                <>
               

                
                <div className="bg-gray-200    ">
            <div class="p-10 shadow-lg ">
              <div class="max-w-full  bg-white flex flex-col rounded overflow-hidden shadow-lg">
                <div class="flex flex-row items-baseline flex-nowrap bg-gray-100 p-2">
                  

                  
                </div>
               
                <div class=" flex sm:flex-row mx-6 my-7 sm:justify-between flex-wrap ">
                  <div class="flex flex-row place-items-center p-2">
                    <div class="flex flex-col ml-2">
                    
                      <FaPlaneDeparture className="text-2xl text-gray-500 font-bold" />
                     
                      <p class="text-xs text-gray-500">{e.flightnumber}</p>
                    </div>
                  </div>

                  <div class="flex flex-col p-2">
                    <p class="font-bold text-black uppercase">{e.from}</p>
                    <p class="text-gray-500 font-bold">{e.depart}</p>
                    <div className='text-green-500 py-2'>Flight is on {e.flightdate}</div>
                   
                  </div>
                  <FaArrowRight className="text-black m-4 text-xl font-bold"/>
                  <div class="flex flex-col p-2">
                    <p class=" text-gray-400">{e.timerequired}</p>
                    {/* <p className="text-yellow-400 font-bold">----------</p> */}
                   

                  
                    <p className="text-gray-400">{e.flighttype}</p>
                   
                  </div>
                  <div class="flex flex-col flex-wrap p-2">
                    <p class="font-bold text-black uppercase">{e.to}</p>
                    <p class="text-gray-500 font-bold">{e.arrival}</p>
                  </div>
                  <FaChevronRight className="text-xl text-sky-500 my-4 font-bold" />
                </div>
               
              </div>
              
            </div>

          </div>
        
                </>
                
            )
             
            })
            }
        </div>
        
        
    }
   
    </>
   )
}

export default mytip