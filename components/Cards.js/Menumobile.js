import {
  FaCar,
  FaHome,
  FaBus,
  FaTaxi,
  FaHiking,
  FaMoneyCheck,
  FaMoneyCheckAlt,
  FaVenus,
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
  FaPlane,
  FaShuttleVan,
} from "react-icons/fa";
import Menumobileicons from "./Menumobileicons";
const Menumobile = () => {
  // console.log(data.name)
  const menu = [
    {
      name: "Flights",
      icon: FaPlane,
      text: "bg-sky-100  text-blue-400",
    },
    {
      name: "Hotel",
      icon: FaHotel,
      text: "  text-pink-700  bg-pink-200",
    },
    {
      name: "Train",
      icon: FaTrain,
      text: "text-orange-400  bg-orange-200   ",
    },
    {
      name: "Holiday Packages",
      icon: FaUmbrellaBeach,
      text: "text-green-400  bg-gray-100  ",
    },
  ];

  const data1 = [
    {
      name1: "Airport Cabs",
      font: FaCar,
    },
    {
      name1: "Homestays",
    },
    {
      name1: "Bus",
    },
    {
      name1: "Activities & Tours",
    },
    {
      name1: "Gift Cards",
    },
    {
      name1: "Nearby Getaways",
    },
    {
      name1: "Outstation Cabs",
    },
  ];

  return (
    <>
      <div className="bg-white flex flex-col lg:hidden w-full cursor-pointer   text-2xl text-black">
        <div className="flex flex-row w-11/12 bg-white shadow-2xl h-24 mx-7 -my-2 rounded-2xl text-center justify-evenly ">
          {menu.map((item) => {
            return (
              <Menumobileicons
                label={item.name}
                Icon={item.icon}
                text={item.text}
              />
            );
          })}
        </div>

        <div className=" bg-white lg:hidden w-11/12 h-48 mx-7 my-11 rounded-2xl  shadow-2xl inline-grid  grid-cols-4 justify-evenly text-center  items-center">
          {/*           
        {
            data1.map((arr)=>{
                return <Icons label1={arr.name1} Font={arr.f}/>
            })
          } */}
          <div className="flex flex-col justify-around items-center">
            <div className="text-sky-400">
              <FaCar className="" />
            </div>
            <div className="text-sm sm:text-lg">Airport Cabs</div>
          </div>
          <div className="flex flex-col justify-around items-center">
            <div className="text-pink-400">
              <FaHome className="" />
            </div>
            <div className="text-sm sm:text-lg">Homestays</div>
          </div>
          <div className="flex flex-col justify-around items-center">
            <div className="text-yellow-400">
              <FaBus className="" />
            </div>
            <div className="text-sm sm:text-lg">Bus</div>
          </div>
          <div className="flex flex-col justify-around items-center">
            <div className="text-green-400">
              <FaHiking className="" />
            </div>
            <div className="text-sm sm:text-lg">Activities & Tours</div>
          </div>
          <div className="flex flex-col justify-around items-center">
            <div className="text-blue-400">
              <FaMoneyCheck className="" />
            </div>
            <div className="text-sm sm:text-lg">Gift Cards</div>
          </div>
          <div className="flex flex-col justify-around items-center">
            <div className="text-pink-400">
              <FaVenus className="" />
            </div>
            <div className="text-sm sm:text-lg">Nearby Getaways</div>
          </div>
          <div className="flex flex-col justify-around items-center">
            <div className="text-yellow-400">
              <FaTaxi className="" />
            </div>
            <div className="text-sm sm:text-lg">Outstation Cabs</div>
          </div>

          <div className="flex flex-col justify-around items-center">
            <div className="text-green-700">
              <FaMoneyCheckAlt className="" />
            </div>
            <div className="text-sm sm:text-lg">Forex</div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Menumobile;
