import {
  FaRegUserCircle,
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
import { useRouter } from "next/router";
import { useState } from "react";
const Mmtheader = () => {
  const [open, setopen] = useState(false);
  const [tick, settick] = useState(true);
  const router = useRouter();
  const Create = async (e) => {
    e.preventDefault();
    router.push("/createaccount");
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
  const bar = async (e) => {
    e.preventDefault();
    settick(!tick);
    setopen(!open);
  };
  return (
    <>
      <div className="flex flex-row bg-sky-900 justify-evenly py-2 xxs:justify-between">
        {/* <div className="xl:flex sm:hidden"></div> */}

        <div className=" text-2xl px-4">
          make <span className="bg-red-800  text-3xl rounded-xl ">my</span> trip
        </div>
        <div className="my-4 icon-3x   xl:hidden" onClick={bar}>
          {tick ? <FaAlignJustify /> : <FaTimes />}{" "}
        </div>
        <div className="hidden flex-row  xl:flex  ">
          <div className=" border-light outline-none flex w-56 justify-evenly">
            <h1 className="">📀</h1>
            <div className="text-md font-bold">
              Super Offers <br></br>
              <span className="text-sm">Explore great deals & offers</span>{" "}
            </div>
          </div>

          <div className="border-light outline-none flex w-56 justify-evenly ">
            <h1 className="">👜</h1>
            <div className="text-md font-bold">
              Introducing myBiz<br></br>{" "}
              <span className="text-sm">Business Travel Solution</span>{" "}
            </div>
          </div>

          <div className="border-light outline-none flex w-56 justify-evenly ">
            <h1 className="">💼</h1>
            <div className="text-md font-bold">
              My Trips<span className="text-sm"> Manage your bookings</span>{" "}
            </div>
          </div>
        </div>
        <div className=" flex-row hidden xl:flex">
          <div className=" flex flex-row w-72 justify-evenly bg-blue-500 rounded-lg ">
            <h1 className="   text-black text-center my-2 p-1 bg-white rounded-2xl">
              my
            </h1>
            <div className="text-sm my-3" onClick={Create}>
              {" "}
              Login or Create Account
            </div>
            <div className="text-xl my-2">v</div>
          </div>
          <div className=" flex w-56 mx-4 justify-evenly bg-slate-700 ">
            <div className="text-lg py-3 " onClick={langauge}>
              🇮🇳 IN | ENG | INR
            </div>
            <div className="text-xl py-2">v</div>
          </div>
        </div>
      </div>
      {/* <div className='bg-white w-2/12 h-screen'> */}

      <div
        className={`${
          open ? "bg-white w-4/12" : "hidden"
        } bg-slate-100 flex flex-col w-1/3 h-screen md:hidden curser:pointer xxs:11/12 sm:w-2/3 `}
      >
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">
            <FaRegUserCircle className="text-2xl text-black" />
          </h1>
          <h2 className="text-gray-900 pl-6 font-bold ">Login/Sign-up now</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4 my-1">
            <FaToolbox className="text-2xl text-black" />
          </h1>
          <h2 className="text-gray-900 pl-6 font-bold">View/Manage Trips</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">🎁</h1>
          <h2 className="text-gray-900 pl-6 font-bold">Gift Cards</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">
            <FaWallet className="text-2xl text-black" />
          </h1>
          <h2 className="text-gray-900 pl-6 font-bold">My Wallet</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">
            <FaRegSun className="text-2xl text-black" />
          </h1>
          <h2 className="text-gray-900 pl-6 font-bold">Settings</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">
            <FaDharmachakra className="text-2xl text-black" />
          </h1>
          <h2 className="text-gray-900 pl-6 font-bold">Travel Offers</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3 ">
          <h1 className="pl-4">
            <FaFighterJet className="item-black text-black text-2xl" />
          </h1>
          <h2 className="text-gray-900 pl-6 font-bold ">Flights</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">
            <FaHotel className="text-pink-700 text-2xl" />{" "}
          </h1>
          <h2 className="text-gray-900 pl-6 font-bold">Hotels</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">
            <FaTrain className="text-2xl text-orange-400" />
          </h1>
          <h2 className="text-gray-900 pl-6 font-bold">Trains</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">
            <FaUmbrellaBeach className="text-2xl text-black my-1" />
          </h1>
          <h2 className="text-gray-900 pl-6 font-bold">Holiday Packages</h2>
        </div>
        <div className="flex flex-col my-5 h-36 mx-5 justify-evenly">
          <h3 className="text-blue-600">User Agreement</h3>
          <h3 className="text-blue-600">Privacy Policy</h3>
          <h3 className="text-blue-600">Terms of Service</h3>
        </div>
      </div>
      {/* </div> */}
      {/* <button className="" onClick={dashboard}>⏪</button> */}
      {/* <div className="   flex-col bg-sky-900 justify-around  h-24"  >
           
            <div className="text-2xl w-48 " onClick={make}>make <span className="bg-red-800  text-3xl rounded-xl "  >my</span> trip</div>
            
            <div className="flex flex-row  mx-56">
                <div className=" border-light outline-none flex w-56 justify-evenly">
                    <h1 className="w-5">📀</h1>
                    <div className="flex flex-col ">
                        <div className="text-lg font-bold">Super Offers</div>
                        <div className="text-sm">
                        Explore great deals & offers
                        </div>  
                    </div>
                </div>
                <div className="  flex w-56 justify-evenly">
                    <h1 className="w-3">👜</h1>
                    <div className="flex flex-col">
                        <div className="text-lg font-bold">Introducing myBiz
                        </div>
                        <div className="text-sm">
                        Business Travel Solution
                        </div>  
                    </div>
                </div>
                <div className=" flex w-56 justify-evenly">
                    <h1 className="w-3">💼</h1>
                    <div className="flex flex-col">
                        <div className="text-lg font-bold">My Trips</div>
                        <div className="text-sm">
                        Manage your bookings
                        </div>  
                    </div>
                </div>
                <div className=" flex w-72 justify-evenly bg-blue-500 rounded-lg py-1">
                    <h1 className="rounded-2xl my-1 w-10 h-7 bg-white text-black text-center">my</h1>
                    
                        <div className="text-sm my-2" onClick={Create}> Login or Create Account</div>
                    <div className="text-xl ">
                       v
                        </div>
                </div>
                <div className=" flex w-56 mx-4 justify-evenly bg-slate-700 ">
                    
                        <div className="text-lg py-3 " onClick={langauge}>🇮🇳  IN | ENG | INR</div>
                    <div className="text-xl py-2">
                       v
                        </div>
                </div>
                
                
                
               
            </div>
        </div> */}
    </>
  );
};
export default Mmtheader;
