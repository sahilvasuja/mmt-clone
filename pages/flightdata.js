import React, { useState } from 'react'
import { supabase } from '../utils/supabase';
const flightdata = () => {
    // const [id,setId]=useState("");
    const [from,setFrom]=useState("");
    const [to,setTo]=useState("");
    const [DepartureTime,setDepartureTime]=useState("");
    const [date,setDate]=useState("");
    const [price,setPrice]=useState("");
    const [ArrivalTime,setArrivalTime]=useState("");
    async function handleSubmit(e){
        e.preventDefault();
        const { data,error,status } = await supabase
  .from('flight')
  .insert(
    {  From: from, To: to, DepartureTime:DepartureTime, Date: date,Price:price, ArrivalTime:ArrivalTime },
    // {From: 'delhi', To: 'bengaluru', DepartureTime:'3:00am', Date: '31oct2022',Price:6000, ArrivalTime:'6:20am' },
    // { id: id, from: 'jaipur', To: 'bengaluru', DepartureTime:'3:00am', Date: '31oct2022',Price:'6000', ArrivalTime:'6:20am' },
    // {id: id, from: 'mumbai', To: 'bengaluru', DepartureTime:'3:00am', Date: '31oct2022',Price:'6000', ArrivalTime:'6:20am' },
    // { id: 5, from: 'chandigarh', To: 'jaipur', DepartureTime:'3:00am', Date: '31oct2022',Price:'6000', ArrivalTime:'6:20am' },
    // {id: 6, from: 'delhi', To: 'pune', DepartureTime:'3:00am', Date: '31oct2022',Price:'6000', ArrivalTime:'6:20am' },
    // { id: 7, from: 'jaipur', To: 'delhi', DepartureTime:'3:00am', Date: '31oct2022',Price:'6000', ArrivalTime:'6:20am' },
    // {id: 8, from: 'mumbai', To: 'goa', DepartureTime:'3:00am', Date: '31oct2022',Price:'6000', ArrivalTime:'6:20am' },
  

)
console.log(status,error);

    }
    
  return (
    <>
    <div className='flex flex-row gap-2 m-2 p-3'>
        <form action='' onSubmit={(e)=>handleSubmit(e)}>
            
            <div className='m-2 gap-2'>
            <label name="from">From</label>
            <input type='text'
                value={from}
                onChange={(e)=>setFrom(e.target.value)}
            />
            </div>
           
             <div className='m-2 gap-2'>
            <label name="to">To</label>
            <input type='text'
                value={to}
                onChange={(e)=>setTo(e.target.value)}
            />
            </div>
            
             <div className='m-2 gap-2'>
            <label name="DepartureTime">DepartureTime</label>
            <input type='text'
                value={DepartureTime}
                onChange={(e)=>setDepartureTime(e.target.value)}
            />
            </div>
            
             <div className='m-2 gap-2'>
            <label name="date">Date</label>
            <input type='text'
                value={date}
                onChange={(e)=>setDate(e.target.value)}
            />
            </div>
           
             <div className='m-2 gap-2'>
            <label name="price">Price</label>
            <input type='text'
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
            />
            </div>
            
             <div className='m-2 gap-2'>
            <label name="ArrivalTime">ArrivalTime</label>
            <input type='text'
                value={ArrivalTime}
                onChange={(e)=>setArrivalTime(e.target.value)}
            />
            </div>
            
            
             <button type='submit'>Submit</button>
           
           


        </form>
    </div>

    </>
    
  )
}

export default flightdata