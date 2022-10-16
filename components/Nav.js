import Bigdiv from "./Bigdiv";
import Bigmobile from "./Bigmobile";
const Nav = () => {
  return (
    <>
    <div className="w-screen h-full bg-sky-900  p-40 px-14  lg:block  hidden ">
      <div className="bg-white w-max-content h-8/12 px-14 relative py-8 -my-14  text-gray-400 rounded-xl lg:block hidden ">
        <div className=" bg-white z-20 shadow-xl w-11/12  my-36  -top-48 h-24 absolute text-gray-400   rounded-xl ">
          <div className="flex flex-row justify-evenly mt-5">
            <div className="flex flex-col">
              <h1 className="w-30 h-30 veiwbox-24 ml-3 items-center ">✈️</h1>
              <h5>Flight</h5>
            </div>
            <div className="flex flex-col">
              <h1 className="w-30 h-30 veiwbox-24 ml-3">🏬</h1>
              <h5 className="">Hotels</h5>
            </div>
            <div className="flex flex-col">
              <h1 className="w-30 h-30 veiwbox-24 ml-6">🏬</h1>
              <h5 className="">Homestays</h5>
            </div>

            <div className="flex flex-col">
              <h1 className="w-30 h-30 veiwbox-24 ml-11">🍟</h1>
              <h5>Holiday Packages</h5>
            </div>
            <div className="flex flex-col">
              <h1 className="w-30 h-30 veiwbox-24 ml-3">🚂</h1>
              <h5>Trains</h5>
            </div>
            <div className="flex flex-col">
              <h1 className="w-30 h-30 veiwbox-24 ml-3">🚌</h1>
              <h5 className="">Buses</h5>
            </div>

            <div className="flex flex-col">
              <h1 className="w-30 h-30 veiwbox-24 ml-2">🚙</h1>
              <h5>cabs</h5>
            </div>
            <div className="flex flex-col">
              <h1 className="w-30 h-30 veiwbox-24 ml-3">🏬</h1>
              <h5>Forex</h5>
            </div>
            <div className="flex flex-col">
              <h1 className="w-30 h-30 veiwbox-24 ml-9">🛬</h1>
              <h5 className="">Charter Flights</h5>
            </div>

            <div className="flex flex-col">
              <h1 className="w-30 h-30 veiwbox-24 ml-4">🚶‍♂️</h1>
              <h5>Activity</h5>
            </div>
          </div>

        </div>
       
        <div className="flex justify-between">
          <div className=" mt-8  flex flex-row px-3 ">
            <div>
              <input type="radio" name="prefer "></input>
              <label for="ONEWAY" className="pl-2 font-bold">
                ONEWAY
              </label>
            </div>
            <div className="pl-4">
              <input type="radio" name="prefer"></input>
              <label for="ROUND TRIP" className="pl-2 font-bold">
                ROUND TRIP
              </label>
            </div>
            <div className="pl-4">
              <input type="radio" name="prefer"></input>
              <label for="MULTI CITY" className="pl-2 font-bold">
                MULTI CITY
              </label>
            </div>
          </div>
          <div className="mt-8 text-black">
            Book International and Domestic Flights
          </div>
        </div>
        {/* <div >
            <Bigdiv />
            </div> */}
        <div className="my-8">
          <Bigdiv />
        </div>
        <div className="flex flex-row  ">
            <div className=" bg-white ">Select A Fare Type:</div>
           </div>
        <div className="flex flex-row justify-start items-center  ">
          
            <div className=" border-black mx-1  bg-zinc-300   flex flex-row items-center gap-1 h-9">
              
              <input type="radio" name="type" />
              <label for="html" className=" text-black font-bold text-sm ">
                Regular Fares
              </label>
            </div>

            <div className="mx-1 border-black bg-zinc-300 h-9  flex flex-row items-center gap-1">
              <input type="radio" name="type" className="" />
              <label for="html" className=" text-black  font-bold text-sm">
                Armed Forces Fares
              </label>
            </div>

            <div className="mx-1 border-black bg-zinc-300 h-9  flex flex-row items-center gap-1">
              <input type="radio" name="type" />
              <label for="html" className=" text-black font-bold text-sm">
                Student Fares
              </label>
            </div>

            <div className="mx-1 border-black  bg-zinc-300 h-9  flex flex-row items-center gap-1">
              <input type="radio" name="type" />
              <label for="html" className=" text-black font-bold text-sm">
                Senior Citizen Fares
              </label>
            </div>

            <div className="mx-1 border-black  bg-zinc-300 h-9  flex flex-row items-center gap-1">
              <input type="radio" name="type" />
              <label for="html" className=" text-black font-bold text-sm">
                Doctors & Nurses Fares
              </label>
            </div>
          
          <div className="flex flex-row my-1 lg:ml-8 xl:ml-32 2xl:ml-80">
            <div className="text-black ">Trending Searches:</div>
            <div className="h-6 w-40 text-gray-700 font-bold text-sm bg-zinc-300 items-center my-3 xl:my-1 xl:mx-2 2xl:ml-3 text-center">
              Mumbai → Goa
            </div>
            
          </div>
        </div>

        <button className="absolute  mx-56 my-2 left-56 text-slate-50 text-3xl bg-sky-700 rounded-3xl font-bold border-solid w-56  h-14 xl:left-96 2xl:left-96 2xl:mx-96">
          SEARCH
        </button>
      </div>
      <div className="lg:flex flex-row  rounded-3xl border border-solid absolute my-32 w-9/12 justify-evenly left-40 text-center text-black bg-white 2xl:left-72 hidden">
        <div className="text-xl my-2">Where2Go</div>
        <div className="flex flex-col">
          <div className="text-xl">TripMoney</div>
          <div className="text-sm">Loan Credit and More</div>
        </div>
        <div className="">
          <div className="text-xl text-bold text-black">
            Explore International Flights
          </div>
          <div className="text-lg text-green-600">
            Cheapest Flights to Paris, Bali, Tokyo & more
          </div>
        </div>
        <div className="text-xl my-2">Nearby Getaways</div>
        <div className="text-xl my-2">Gift Cards</div>
      </div>
      
    </div>
   
    </>
  );
};
export default Nav;
