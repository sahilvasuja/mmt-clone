import Bigdiv from "./Bigdiv";

const Nav = () => {
  return (
    <div className="w-screen h-full bg-sky-900  p-40 px-14  ">
      <div className="bg-white w-max-content h-8/12 px-14 relative py-8 -my-14  text-gray-400 rounded-xl xl:block sm:hidden ">
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
        <div className="flex flex-row justify-between">
          <div className="flex flex-row  ">
            <div className="w-20 bg-white ">Select A Fare Type:</div>
            <div className="r border-black w-20 h-12  bg-zinc-300">
              {" "}
              <input type="radio" name="type" />
              <label for="html" className="pl-2 text-black font-bold text-sm ">
                Regular Fares
              </label>
            </div>

            <div className=" border-black w-32 h-12 ml-1 bg-zinc-300">
              <input type="radio" name="type" className="" />
              <label for="html" className="pl-2 text-black  font-bold text-sm">
                Armed Forces Fares NEW
              </label>
            </div>

            <div className=" border-black w-24 h-12 ml-1 bg-zinc-300">
              <input type="radio" name="type" />
              <label for="html" className="pl-2 text-black font-bold text-sm">
                Student Fares
              </label>
            </div>

            <div className=" border-black w-24 h-12 ml-1 bg-zinc-300">
              <input type="radio" name="type" />
              <label for="html" className="pl-2 text-black font-bold text-sm">
                Senior Citizen Fares
              </label>
            </div>

            <div className=" border-black w-28 h-12 ml-1 bg-zinc-300">
              <input type="radio" name="type" />
              <label for="html" className="pl-2 text-black font-bold text-sm">
                Doctors & Nurses Fares
              </label>
            </div>
          </div>
          <div className="flex flex-row my-1 ml-8">
            <div className="text-black ">Trending Searches:</div>
            <div className="h-6 w-32 text-gray-700 font-bold text-sm bg-zinc-300 mx-2 text-center">
              Mumbai → Goa
            </div>
            <div className=" text-gray-700 font-bold text-sm bg-zinc-300 text-center w-48 h-6">
              Chennai → Hyderabad
            </div>
          </div>
        </div>

        <button className="absolute  mx-56 my-2 left-72 text-slate-50 text-3xl bg-sky-700 rounded-3xl font-bold border-solid w-56  h-14 2xl:left-96 2xl:mx-80">
          SEARCH
        </button>
      </div>
      <div className="flex flex-row  rounded-3xl border border-solid absolute my-32 w-4/6 justify-evenly left-52 text-center text-black bg-white 2xl:left-72">
        <div className="my-3">Where2Go</div>
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
        <div className="my-3">Nearby Getaways</div>
        <div className="my-3">Gift Cards</div>
      </div>
    </div>
  );
};
export default Nav;
