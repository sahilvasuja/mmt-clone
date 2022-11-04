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
import { supabase } from "../utils/supabase";
import Menumobile from "./Cards.js/Menumobile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Signin from "./signin";
import Dashboard from "./Dashboard";
import Userprofile from "./Userprofile";
import Dashboardelement from "./Cards.js/Dashboardelement";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
const Mmtheader = () => {
  const [open, setopen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showsign, setshowsign] = useState(false);
  const [name, setName] = useState();
  const [Email, setEmail] = useState();
  const router = useRouter();

  const session = useSession();
  // const supabase = useSupabaseClient();
  const user = useUser();

  useEffect(() => {
    if (session) {
      setLoggedIn(true);
      setName(user?.user_metadata?.first_name);
      setEmail(user?.email);
    }
  }, [session, user]);

  const dropdown = async (e) => {
    console.log("drop" + drop);
    setDrop(!drop);
  };

  const UserProfile = async (e) => {
    e.preventDefault();
    //router.push("/check");
    router.push({
      pathname: "/check",
      query: { name: name, email: Email, LoggedIn: loggedIn },
    });
  };
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
          className="my-4 mx-5 icon-3x sm:text-2xl text:lg cursor-pointer lg:hidden"
          onClick={bar}
        >
          {!open ? <FaAlignJustify /> : <FaTimes />}{" "}
        </div>
        <div className="text-xl sm:text-4xl px-4 cursor-pointer lg:text-lg xl:text-2xl">
          make
          <span className="bg-red-800 p-1  sm:py-1 sm:px-2 mx-1  text-lg sm:text-4xl rounded-full lg:text-lg lg:px-1 lg:py-1 xl:text-2xl xl:px-1 xl:mx-1">
            my
          </span>
          trip
        </div>
        <div className="bg-blue-300 sm:px-3 sm:py-3 justify-evenly mx-5 h-8 sm:h-10 w-28 text-center items-center    sm:w-36 flex rounded-full lg:hidden ">
          <div>
            <FaUserCircle className=" sm:text-2xl text:lg" />
          </div>
          {loggedIn ? (
            <>
              <div className="sm:text-lg text-xs" onClick={dropdown}>
                {name}
              </div>
              <div
                id="dropdownNavbar"
                class={` z-10 w-32 bg-white rounded divide-y mt-11 divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ${
                  drop ? "visible" : "hidden"
                }`}
              >
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={UserProfile}
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    onClick={async () => {
                      await supabase.auth.signOut();
                      setLoggedIn(false);
                    }}
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="sm:text-lg text-xs cursor-pointer " onClick={Create}>
              Login Now
            </div> 
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

        <div className=" flex-row hidden lg:flex cursor-pointer">
          {loggedIn ? (
            <>
              <div className="text-sm my-3 cursor-pointer " onClick={dropdown}>
                {name}
              </div>
              <div
                id="dropdownNavbar"
                class={` z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ${
                  drop ? "visible" : "hidden"
                }`}
              >
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={UserProfile}
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div class="py-1 cursor-pointer">
                  <a
                    class="block py-2 px-4 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    onClick={async () => {
                      await supabase.auth.signOut();
                      setLoggedIn(false);
                    }}
                  >
                    Sign out
                  </a>
                </div>
              </div>
              {/* {setLoggedIn(false)} */}
            </>
          ) : (
            <div className=" flex flex-row w-56 h-11 xl:w-64 justify-evenly bg-blue-500 rounded-lg cursor-pointer">
              <h1 className="   text-black text-center my-2  bg-white rounded-full">
                my
              </h1>
              <div className="text-sm my-3 " onClick={Create}>
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
      {/* <Userprofile setLoggedIn={setLoggedIn} names={name} Emails={Email} /> */}
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
                <h2
                  className="text-gray-900  font-bold  "
                  onClick={UserProfile}
                >
                  {name}
                </h2>
              ) : (
                <h2 className="text-gray-900  font-bold cursor-pointer ">
                  Login now
                </h2>
              )}
            </div>
            <Dashboardelement />
          </div>
        </div>
      )}

      <Menumobile />
      {/* <div
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
      </div> */}
    </>
  );
};
export default Mmtheader;
