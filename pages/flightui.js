import React, { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../utils/supabase";
import { FaArrowLeft, FaPlaneDeparture } from "react-icons/fa";
import { useRouter } from "next/router";

const flightui = () => {
  const Router = useRouter();
  const [flightsearch, setFlightsearch] = useState(false);
  const [journeyBeggin, setJourneyBeggin] = useState("delhi");
  const Startjourney = (e) => {
    setJourneyBeggin(e.target.value);
  };
  const passengerdetail = (e) => {
    Router.push("/passenger");
  };
  const [journeyOver, setJourneyOver] = useState("bengaluru");
  const Endjourney = (e) => {
    setJourneyOver(e.target.value);
  };
  const [journeydate, setJourneyDate] = useState("7 oct 2022");
  const date = (e) => {
    setJourneyDate(e.target.value);
  };
  const [member, setMember] = useState("1 Traveller");
  const travel = (e) => {
    setMember(e.target.value + "Traveller");
  };

  const [array, setArray] = useState([]);

  // useEffect((e)=>{
  //     console.log(arr + "");
  // },[])

  function handlesearch(e) {
    e.preventDefault();

    setFlightsearch(true);
    fetchData();
  }

  async function fetchData() {
    console.log(journeyOver);
    console.log(journeyBeggin);
    // const { data: { user } } = await supabase.auth.getUser()
    const { data, error, status } = await supabase
      .from("flight")
      .select("*")
      .eq("From", journeyBeggin)
      .eq("To", journeyOver);

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      console.log(data);
      setArray(data);
      // console.log(JSON.stringify(arr) + "arr");
    }
  }

  return (
    <>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center bg-gray-700"
      >
        <div class="relative p-4 w-full max-w-md h-full md:h-auto mx-auto">
          <div class="relative bg-white rounded-lg shadow ">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 "
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="py-6 px-6  lg:px-8 ">
              <h3 class="mb-4 text-2xl font-medium text-black ">FLIGHT</h3>
              <form class="space-y-6" action="#">
                <div className="flex flex-row bg-gray-200 gap-2 p-2">
                  <h2 className="text-black text-lg p-1 bg-sky-600">ONE WAY</h2>
                  <h2 className="text-black text-lg p-1">ROUNDTRIP</h2>
                  <h2 className="text-black text-lg p-1">MULTICITY</h2>
                </div>

                <div className="bg-gray-200 border border-gray-100 flex flex-col p-2">
                  <label
                    for="email"
                    class="block  text-xl  text-gray-900 dark:text-gray-900"
                  >
                    FROM
                  </label>
                  <input
                    type="text"
                    id="email"
                    class=" text-gray-900 text-xl font-medium  focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800 "
                    value={journeyBeggin}
                    onChange={Startjourney}
                    required=""
                  />
                  <input
                    type="text"
                    id="email"
                    class=" text-gray-900 text-lg  focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800"
                    value={`${journeyBeggin} International AIRPORT`}
                    required=""
                  />
                </div>

                <div className="bg-gray-200 border p-2">
                  <label
                    for="password"
                    class="block  text-xl  text-gray-900 dark:text-gray-800"
                  >
                    To
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    class="font-medium text-gray-900 text-xl  focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800"
                    value={journeyOver}
                    onChange={Endjourney}
                    required=""
                  />
                  <input
                    type="text"
                    name="password"
                    id="password"
                    class=" text-gray-900 text-lg  focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800"
                    value={`${journeyOver} International AIRPORT...`}
                    required=""
                  />
                </div>
                <div class="flex justify-between gap-2">
                  <div className="border-gray-700 border bg-gray-200">
                    <label
                      for="remember"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Departure
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      class=" text-gray-900 text-lg  focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800"
                      value={journeydate}
                      onChange={date}
                      required=""
                    />
                  </div>
                  <div className="border-gray-700 border bg-gray-200">
                    <label
                      for="remember"
                      class="ml-2 text-sm font-medium text-sky-600 "
                    >
                      +Add RETURN DATE
                    </label>
                    <div class=" text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800">
                      save more on round trips!
                    </div>
                  </div>
                </div>
                <div className="border-gray-700 border bg-gray-200">
                  <label
                    for="remember"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                  >
                    Traveller & Class
                  </label>

                  <div class=" text-gray-900 text-lg pl-2  focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800">
                    1,Eco/Prem. Eco
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handlesearch}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        {flightsearch ?
          
         array.map((e)=>{
           
            return(
                <div className="bg-gray-200">
                <div class="p-10 shadow-lg ">
                <div class="max-w-full  bg-white flex flex-col rounded overflow-hidden shadow-lg">
                  <div class="flex flex-row items-baseline flex-nowrap bg-gray-100 p-2">
                    <h1 class="ml-2 uppercase font-bold text-gray-500">
                      departure
                    </h1>

                    <p class="ml-2 font-normal text-gray-500">{e.Date}</p>
                  </div>
                  <div class="mt-2 flex justify-start bg-white p-2">
                    <div class="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 p-1">
                      <p class="font-normal text-sm ml-1 text-gray-500">
                        Economy
                      </p>
                    </div>
                  </div>
                  <div class=" flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
                    <div class="flex flex-row place-items-center p-2">
                      <div class="flex flex-col ml-2">
                        <p class="text-2xl text-gray-500 font-bold">{e.flightname}</p>
                        <p class="text-xs text-gray-500">{e.flightnumber}</p>
                        {/* <div class="text-xs text-gray-500">2*25kg</div> */}
                      </div>
                    </div>

                    <div class="flex flex-col p-2">
                      <p class="font-bold text-black">{e.DepartureTime}</p>
                      <p class="text-gray-500 font-bold">{e.From}</p>
                      {/* <p class="text-gray-500">{` ${journeyBeggin.substring(0,3)} ${journeyBeggin} International AIRPORT`}</p> */}
                    </div>
                    <div class="flex flex-col p-2">
                      <p class=" text-gray-400">{e.requiredtime}</p>
                      <p className="text-yellow-400 font-bold">----------</p>
                      <p className="text-gray-400">{e.flighttype}</p>
                    </div>
                    <div class="flex flex-col flex-wrap p-2">
                      <p class="font-bold text-black">{e.ArrivalTime}</p>
                      <p class="text-gray-500 font-bold">{e.To}</p>
                      {/* <p class="text-gray-500">{` ${journeyOver.substring(0,3)} ${journeyOver} International AIRPORT...`}</p> */}
                    </div>
                    <div class="md:border-l-2 mx-6 md:border-dotted flex flex-row py-4 mr-6 flex-wrap">
                      <div class="text-sm mx-2 flex flex-col text-gray-400">
                        <p>Price</p>
                        <p class="font-bold">{e.Price}</p>
                        <p class="text-xs text-gray-500">Price per adult</p>
                      </div>
                      <button
                        class="w-32 h-11 rounded flex border-solid border text-white bg-green-800 mx-2 justify-center place-items-center"
                        onClick={passengerdetail}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            )
            
        }) : <div></div>}
      </div>
    </>
  );
};

export default flightui;
