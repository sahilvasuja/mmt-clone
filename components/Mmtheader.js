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

import Menumobile from "./Cards.js/Menumobile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Signin from "./signin";
import Dashboard from "./Dashboard";
import Dashboardelement from "./Cards.js/Dashboardelement";
const Mmtheader = () => {
  const [open, setopen] = useState(false);
  const [tick, settick] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showsign, setshowsign] = useState(false);
  const [name, setName] = useState();
  const router = useRouter();
  useEffect(() => {
    console.log(loggedIn + "useeffect");
  });
  const Create = async (e) => {
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
        <div
          className="my-4 mx-5 icon-3x sm:text-2xl text:lg lg:hidden"
          onClick={bar}
        >
          {!open ? <FaAlignJustify /> : <FaTimes />}{" "}
        </div>
        <div className="text-xl sm:text-4xl px-4 lg:text-lg xl:text-2xl">
          make
          <span className="bg-red-800 p-1  sm:py-1 sm:px-2 mx-1  text-lg sm:text-4xl rounded-full lg:text-lg lg:px-1 lg:py-1 xl:text-2xl xl:px-1 xl:mx-1">
            my
          </span>
          trip
        </div>
        <div
          className="bg-blue-300 sm:px-3 sm:py-3 justify-evenly mx-5 h-8 sm:h-10 w-28 text-center items-center    sm:w-36 flex rounded-full lg:hidden "
          onClick={Create}
        >
          <div>
            <FaUserCircle className=" sm:text-2xl text:lg" />
          </div>
          {loggedIn ? (
            <div className="sm:text-lg text-xs">{name}</div>
          ) : (
            <div className="sm:text-lg text-xs">Login Now</div>
          )}
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
              <span className="text-sm text-gray-400">
                Business Travel Solution
              </span>
            </div>
          </div>

          <div className="border-light outline-none flex w-28 xl:w-48 items-center justify-around ">
            <h1 className="">💼</h1>
            <div className="text-md font-bold">
              My Trips <br></br>{" "}
              <span className="text-sm text-gray-400">
                {" "}
                Manage your bookings
              </span>{" "}
            </div>
          </div>
        </div>
        {}
        <div className=" flex-row hidden lg:flex">
          {loggedIn ? (
            <div className="text-sm my-3" onClick={Create}>
              {name}
            </div>
          ) : (
            <div className=" flex flex-row w-56 h-11 xl:w-64 justify-evenly bg-blue-500 rounded-lg ">
              <h1 className="   text-black text-center my-2  bg-white rounded-full">
                my
              </h1>
              <div className="text-sm my-3" onClick={Create}>
                Login or Create Account
              </div>

              <div className="text-xl my-2">v</div>
            </div>
          )}
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
        setLoggedIn={setLoggedIn}
        setName={setName}
        onClose={() => {
          setshowsign(false);
          console.log("onclose");
        }}
      />
      {open && (
        <div className="flex flex-row fixed top-0  z-40 w-screen overflow-y-auto backdrop-blur-sm bg-opacity-25 ">
          <div
            className={`${
              open ? "bg-white w-4/12" : "hidden"
            } bg-slate-100 flex flex-col w-1/3  lg:hidden h-screen cursor-pointer   `}
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
              {loggedIn ? (
                <h2 className="text-gray-900  font-bold  ">{name}</h2>
              ) : (
                <h2 className="text-gray-900  font-bold  ">
                  Login now
                </h2>
              )}
            </div>
            <Dashboardelement />
          </div>
        </div>
      )}

      <Menumobile />
    </>
  );
};
export default Mmtheader;
