import Faretype from "./Cards.js/Faretype";
import Menuflight from "./Cards.js/Menuflight";
import Tertiary from "./Cards.js/Tertiary";
import Menumobile from "./Cards.js/Menumobile";
import { useRouter } from "next/router";
import Triptype from "./Cards.js/Triptype";
import Menutype from "./Cards.js/Menutype";
import signup from "../pages/signup";
// className="w-screen h-full bg-sky-900  p-40 px-14  lg:block  hidden "
const Nav = () => {
  const router=useRouter();
  const flight=async(e)=>{
      e.preventDefault();
      router.push("/flightui")
  }
  return (
    <>  
          <div className="w-screen h-full bg-sky-900  p-40 px-14  lg:block  hidden ">
        <div className="bg-white w-max-content h-8/12 px-14 relative py-8 -my-14  text-gray-400 rounded-xl lg:block hidden ">
          <div className=" bg-white z-20 shadow-xl w-11/12  my-36  -top-48 h-24 absolute text-gray-400   rounded-xl ">
            <div className="flex flex-row justify-evenly mt-5">
              <div className="flex flex-col cursor-pointer" onClick={flight}>
                <h1 className="w-30 h-30 veiwbox-24 ml-3 items-center ">✈️</h1>
                <h5>Flight</h5>
              </div>
              <div className="flex flex-col cursor-pointer">
                <h1 className="w-30 h-30 veiwbox-24 ml-3">🏬</h1>
                <h5 className="">Hotels</h5>
              </div>
              <div className="flex flex-col cursor-pointer">
                <h1 className="w-30 h-30 veiwbox-24 ml-6">🏬</h1>
                <h5 className="">Homestays</h5>
              </div>

              <div className="flex flex-col cursor-pointer">
                <h1 className="w-30 h-30 veiwbox-24 ml-11">🍟</h1>
                <h5>Holiday Packages</h5>
              </div>
              <div className="flex flex-col cursor-pointer">
                <h1 className="w-30 h-30 veiwbox-24 ml-3">🚂</h1>
                <h5>Trains</h5>
              </div>
              <div className="flex flex-col cursor-pointer">
                <h1 className="w-30 h-30 veiwbox-24 ml-3">🚌</h1>
                <h5 className="">Buses</h5>
              </div>

              <div className="flex flex-col cursor-pointer">
                <h1 className="w-30 h-30 veiwbox-24 ml-2">🚙</h1>
                <h5>cabs</h5>
              </div>
              <div className="flex flex-col cursor-pointer">
                <h1 className="w-30 h-30 veiwbox-24 ml-3">🏬</h1>
                <h5>Forex</h5>
              </div>
              <div className="flex flex-col cursor-pointer">
                <h1 className="w-30 h-30 veiwbox-24 ml-9">🛬</h1>
                <h5 className="">Charter Flights</h5>
              </div>

              <div className="flex flex-col cursor-pointer">
                <h1 className="w-30 h-30 veiwbox-24 ml-4">🚶‍♂️</h1>
                <h5>Activity</h5>
              </div>
              {/* <Menutype /> */}
            </div>
          </div>

          <div className="flex justify-between">
            <div className=" mt-8  flex flex-row px-3 ">
              <Triptype /> 
              
            </div>
            <div className="mt-8 text-black">
              Book International and Domestic Flights
            </div>
          </div>
          
          <div className="my-8">
            <Menuflight />
          </div>
          <div className="flex flex-row  ">
            <div className=" bg-white ">Select A Fare Type:</div>
          </div>
          <div className="flex flex-row justify-start items-center  ">
          
            <Faretype />

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
        <Tertiary />
      </div>
    </>
  );
};
export default Nav;
