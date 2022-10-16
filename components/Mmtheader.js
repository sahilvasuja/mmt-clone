import {
  FaRegUserCircle,
  FaUserCircle,
  FaDharmachakra,
  FaAlignJustify,
  FaTimes,
  FaFighterJet,
  FaTrain,
  FaToolbox,
  FaHotel,
  FaUmbrellaBeach,
  FaWallet,
  FaRegSun,
} from "react-icons/fa";
import Demo from "./Demo";

import Bigmobile from "./Bigmobile";
import { useRouter } from "next/router";
import { useState } from "react";
import Signin from "./signin";
const Mmtheader = () => {
  const [open, setopen] = useState(false);
  const [tick, settick] = useState(true);
  const [showsign, setshowsign] = useState(false);
  const router = useRouter();
  const Create = async (e) => {
    // e.preventDefault();
    setshowsign(true);
    console.log("create");
    //  router.push("/createaccount");
  };
  const make = async (e) => {
    e.preventDefault();
    router.push("/");
  };
  const langauge = async (e) => {
    e.preventDefault();
    router.push("/langauge");
  };
  const dashboard = async (e) => {
    e.preventDefault();
    router.push("/mobile");
  };
  const bar = () => {
    // e.preventDefault();
    console.log("open");

    setopen(!open);
  };
  const dash = () => {
    // e.preventDefault();

    setopen((open = false));
  };
  return (
    <>
   
      <div className="flex flex-row bg-sky-900 justify-between py-8 xxs:justify-between lg:py-2 ">
       
        <div className="my-4 mx-5 icon-3x sm:text-2xl text:lg lg:hidden" onClick={bar}>
          {!open ? <FaAlignJustify /> : <FaTimes />}{" "}
        </div>
        <div className="text-xl sm:text-4xl px-4 lg:text-lg xl:text-2xl">
          make
          <span className="bg-red-800 p-1  sm:py-1 sm:px-2 mx-1  text-lg sm:text-4xl rounded-full lg:text-lg lg:px-1 lg:py-1 xl:text-2xl xl:px-1 xl:mx-1">
            my
          </span>
          trip
        </div>
        <div className="bg-blue-300 sm:px-3 sm:py-3 justify-evenly mx-5 h-8 sm:h-10 w-28 text-center items-center    sm:w-36 flex rounded-full lg:hidden " onClick={Create}>
          <div>
            <FaUserCircle className=" sm:text-2xl text:lg" />
          </div>
          <div className="sm:text-lg text-xs">Login Now</div>
        </div>
       

        <div className="hidden flex-row  lg:flex  justify-between xl:justify-around">
          <div className=" border-light outline-none flex w-[120px] xl:w-44 items-center justify-around">
            <h1 className="">📀</h1>
            <div className="text-md font-bold">
              Super Offers <br></br>
              <span className="text-sm text-gray-400">Explore great deals</span>
            </div>
          </div>

          <div className="border-light outline-none flex w-44 xl:w-56 items-center justify-evenly ">
            <h1 className="">👜</h1>
            <div className="text-md font-bold">
              Introducing myBiz<br></br>
              <span className="text-sm text-gray-400">Business Travel Solution</span>
            </div>
          </div>

          <div className="border-light outline-none flex w-28 xl:w-48 items-center justify-around ">
            <h1 className="">💼</h1>
            <div className="text-md font-bold">
              My Trips <br></br> <span className="text-sm text-gray-400"> Manage your bookings</span>{" "}
            </div>
          </div>
        </div>
        <div className=" flex-row hidden lg:flex">
          <div className=" flex flex-row w-56 h-11 xl:w-64 justify-evenly bg-blue-500 rounded-lg ">
            <h1 className="   text-black text-center my-2  bg-white rounded-full">
              my
            </h1>
            <div className="text-sm my-3" onClick={Create}>
              Login or Create Account
            </div>
            <div className="text-xl my-2">v</div>
          </div>
          <div className=" flex w-48 h-11 mx-4 justify-evenly bg-slate-700 ">
            <div className="text-lg py-3 " onClick={langauge}>
              🇮🇳 IN | ENG | INR
            </div>
            <div className="text-xl py-2">v</div>
          </div>
        </div>
      </div>
      
      <Signin
        isvisible={showsign}
        onClose={() => {
          setshowsign(false);
          console.log("onclose");
        }}
      />
     {open && (
        <div className="flex flex-row fixed top-0 h-screen z-40 w-screen overflow-y-auto backdrop-blur-sm bg-opacity-25 ">
          <div
            className={`${
              open ? "bg-white w-4/12" : "hidden"
            } bg-slate-100 flex flex-col w-1/3 h-screen lg:hidden  cursor-pointer   `}
          >
            <div className="flex flex-row h-14 border-solid border-2 justify-between text-center pt-3 ">
              <h1 className="pl-2 text-2xl text-gray-400">MENU</h1>
              <h2 className="text-gray-400 px-3 text-2xl my-1" onClick={dash}>
                <FaTimes />
              </h2>
            </div>
            <div className="flex flex-row h-14 border-solid border-2 text-center pt-3 hover:bg-gray-300 justify-around items-center ">
              <h1 className="">
                <FaRegUserCircle className="text-2xl text-black" />
              </h1>
              <h2 className="text-gray-900  font-bold  ">Login/Sign-up now</h2>
            </div>
            <div className="flex flex-row h-14 border-solid border text-center hover:bg-gray-300 justify-around items-center">
              <h1 className=" my-1">
                <FaToolbox className="text-2xl text-black" />
              </h1>
              <h2 className="text-gray-900 font-bold">View/Manage Trips</h2>
            </div>
            <div className="flex flex-row h-14 border-solid border-2 hover:bg-gray-300 text-center justify-around items-center">
              <h1 className="pr-14">🎁</h1>
              <h2 className="text-gray-900  font-bold">Gift Cards</h2>
            </div>
            <div className="flex flex-row h-14 border-solid border-2 hover:bg-gray-300 text-center justify-around items-center">
              <h1 className="pr-14">
                <FaWallet className="text-2xl text-black" />
              </h1>
              <h2 className="text-gray-900 font-bold">My Wallet</h2>
            </div>
            <div className="flex flex-row h-14 border-solid border-2 hover:bg-gray-300 text-center justify-around items-center">
              <h1 className="pr-14">
                <FaRegSun className="text-2xl text-black" />
              </h1>
              <h2 className="text-gray-900  font-bold">Settings</h2>
            </div>
            <div className="flex flex-row h-14 border-solid border-2 text-center hover:bg-gray-300 justify-around items-center">
              <h1 className="pr-6">
                <FaDharmachakra className="text-2xl text-black" />
              </h1>
              <h2 className="text-gray-900 font-bold">Travel Offers</h2>
            </div>
            <div className="flex flex-row h-14 border-solid border-2 text-center hover:bg-gray-300 justify-around items-center">
              <h1 className="pr-14">
                <FaFighterJet className="item-black text-black text-2xl" />
              </h1>
              <h2 className="text-gray-900  font-bold ">Flights</h2>
            </div>
            <div className="flex flex-row h-14 border-solid border-2 text-center hover:bg-gray-300 justify-around items-center">
              <h1 className="pr-14">
                <FaHotel className="text-pink-700 text-2xl" />
              </h1>
              <h2 className="text-gray-900 font-bold">Hotels</h2>
            </div>
            <div className="flex flex-row h-14 border-solid border-2 text-center hover:bg-gray-300 justify-around items-center">
              <h1 className="pr-14">
                <FaTrain className="text-2xl text-orange-400" />
              </h1>
              <h2 className="text-gray-900  font-bold">Trains</h2>
            </div>
            <div className="flex flex-row h-14 border-solid border-2 text-center hover:bg-gray-300 justify-around items-center">
              <h1 className="">
                <FaUmbrellaBeach className="text-2xl text-black " />
              </h1>
              <h2 className="text-gray-900  font-bold">Holiday Packages</h2>
            </div>
            <div className="flex flex-col  h-36 items-center justify-evenly ">
              <h3 className="text-blue-600">User Agreement</h3>
              <h3 className="text-blue-600">Privacy Policy</h3>
              <h3 className="text-blue-600">Terms of Service</h3>
            </div>
          </div>
        </div>
      )}

      <Bigmobile />
      {/* <Createaccount isvisible={showsign} onClose={()=>{
          setshowsign(false)
          console.log("onclose");
      }
      }/> */}
     
    </>
  );
};
export default Mmtheader;
