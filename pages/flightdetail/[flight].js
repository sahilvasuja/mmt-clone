import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../utils/supabase";
import Passenger from "../../components/Passengers";
import {FaSuitcaseRolling,FaShoppingBag,FaChevronRight,FaRupeeSign,FaCreativeCommonsBy,FaArrowLeft} from "react-icons/fa";
const flight = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    flightshow();
  }, []);
  const Router = useRouter();
  let flightid = Router.query.flight;
  console.log(flightid , "13")
  async function showboardingpass(e){
    e.preventDefault()
    console.log("continue")
    console.log(arr.from)
    console.log(flightid , "13")
    Router.push({
        pathname: "/boardingpass",
       
        query: {
          name: "sahil",
          age: flightid,
          Date: arr.Date,
          flightname: arr.flightname,
          flightnumber: arr.flightnumber,
          from: arr.From,
          to: arr.To,
          depart: arr.DepartureTime,
          arrival: arr.ArrivalTime
        },
      });
  }
  async function flightshow() {
    
    let flightid = Router.query.flight;

    const { data, error, status } = await supabase
      .from("flight")
      .select("*")
      .eq("id", flightid);
    console.log(data[0]);
    setArr(data[0]);
  }

  return (
    <>
      {/* <div>{flightid}</div>
      <div className="text-white bg-blue-900">{arr.From}</div> */}
      <div className="bg-sky-900  ">
<div className="   ">
<FaArrowLeft className="text-gray-200 text-2xl my-3 " />
<div className="  flex flex-col justify-center ">
<p className="mx-auto gap-y-5 font-light text-gray-500 dark:text-white">make my trip</p>
<p className="mx-auto gap-y-5 font-light text-gray-500 dark:text-white">Trip to</p>
<p className="mx-auto font-bold text-gray-500 text-4xl dark:text-white uppercase">{arr.To}</p>
</div>
<p className="m-4">{`${arr.flightname} | ${arr.flightnumber}`}</p>
<div className="flex flex-row  sm:flex-row justify-between">
    <p className="mx-4 my-1 font-bold text-gray-500 dark:text-white text-xl lg:text-2xl">{arr.DepartureTime}</p>
    <p className="mx-4 my-1 font-bold text-gray-500 dark:text-white text-lg lg:text-lg">{arr.timerequired}</p>
    <p className="mx-4 my-1 font-bold text-gray-500 dark:text-white text-xl lg:text-2xl">{arr.ArrivalTime}</p>
</div>
<div className="flex flex-row  sm:flex-row justify-between">
    <p className="mx-4 my-1 font-light text-gray-500 dark:text-white">{arr.Date}</p>
    <p className="mx-3 my-1  text-2xl font-light text-gray-500 dark:text-white">⏱</p>
    <p className="mx-4 my-1 font-light text-gray-500 dark:text-white">{arr.Date}</p>
</div>
<div className="flex flex-row  sm:flex-row justify-between">
    <p className="mx-4 my-1 font-bold text-lg uppercase text-gray-500 dark:text-white">{arr.From}</p>
    <p className=" mx-4 my-1 font-bold text-lg uppercase text-gray-500 dark:text-white">{arr.To}</p>
</div>

<p className="mx-4 my-5  text-sm">{`Economy>${arr.flightname}`}</p>






<div className=" w-full">
    <div className=" p-6  ">
        
        <div className="relative bg-white  rounded-lg shadow ">
            
            <div className="flex justify-between  items-start px-6 py-4 rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 ">
                    Baggage Policy
                </h3>
                <FaChevronRight className="text-2xl  my-1 bg-transparent text-sky-500 hover:bg-gray-200 hover:text-gray-900 rounded-lg   ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" />
               
            </div>
           
            <div className="px-6 py-2  flex flex-row gap-x-28   ">
                <p className="text-black flex flex-row gap-x-1   ">
                 <FaShoppingBag className="text-2xl" /><span className="text-base leading-relaxed font-semibold text-black  ">Cabin bag</span>  
                </p>
                <p className="text-base leading-relaxed text-gray-700 ">
                    7 Kgs(1 piece only)
                    </p>
            </div>
            <div className="px-6 py-2  flex flex-row gap-x-20 ">
                <p className="text-black flex flex-row gap-x-1 ">
                <FaSuitcaseRolling className="text-2xl"/> <span className="text-base leading-relaxed font-semibold text-black ">Check-in bag</span> 
                </p>
                <p className="text-base leading-relaxed text-gray-700 ">
                    15 Kgs(1 piece only)
                    </p>
            </div>
            <div className="flex items-center p-4 mx-8 my-2 rounded-b bg-gray-200 text-gray-700 ">
               Got excess luggage? Don't stress, buy extra check-in baggage allowance at fab rates!
               </div>
            <div>hello</div>
        </div>
    </div>
</div>
<div className=" w-full">
    <div className=" p-6 ">
        
        <div className="relative bg-white  rounded-lg shadow ">
            
            <div className="flex justify-between  items-start px-6 py-4 rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 ">
                    Cancellation Refund Policy
                </h3>
                <FaChevronRight className="text-2xl  my-1 bg-transparent text-sky-500 hover:bg-gray-200 hover:text-gray-900 rounded-lg   ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" />
               
            </div>
           
            <div className=" px-6 py-1  flex flex-row justify-between ">
                <p className=" text-sm leading-relaxed font-semibold text-black ">
                  Cancel Between (IST)
                </p>
                <p className="text-sm leading-relaxed text-gray-700 ">
                    Cancellation Penalty
                    </p>
            </div>
            <div className="px-6 py-2  flex flex-row justify-between ">
                <p className="text-base leading-relaxed  text-black ">
                  1 week before flight
                </p>
                <p className=" leading-relaxed font-bold text-gray-700 ">
                    3300
                    </p>
            </div>
            <div className="px-6 py-2  flex flex-row justify-between  border-gray-400 border border-dashed border-spacing-5  ">
                <p className="text-sm leading-relaxed   text-black ">
                  3 days before flight
                </p>
                <p className=" leading-relaxed font-bold text-gray-700 ">
                    3800
                    </p>
            </div>
            
            <div>hello</div>
        </div>
    </div>
</div>
<div className=" my-4 py-5">
    <Passenger />
</div>
<div className="p-6 ">
<p className=" rounded-lg font-light text-gray-500 dark:text-gray-400 bg-white p-8 ">By clicking on the Continue button below to proceed with the booking, I confirm that I have read and I accept the <a href="#" className="font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline">Fare Rules</a> ,the <a href="#" className="font-medium text-blue-600  dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline">Privacy Policy</a> ,the <a href="#" className="font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline">User Agreement</a> and <a href="#" className="font-medium text-blue-600  dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline">Terms of Service</a> of MakeMyTrip</p>
</div>
</div>
<div className="bg-black p-5 flex flex-row justify-between "> 
<p className="font-bold  text-white my-2 flex flex-row gap-x-1">
<FaRupeeSign className="font-bold text-xl text-white"/> 
<p className="font-bold -my-2 text-2xl text-white">{arr.Price}</p> 
<FaCreativeCommonsBy className="font-bold text-xl text-white"/>
</p>
<button type="submit" onClick={showboardingpass} className="bg-sky-600 rounded-xl px-4 py-2 z-50" > CONTINUE</button>
</div>

</div>

    </>
  );
};

export default flight;
