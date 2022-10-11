import {
    FaCar,FaHome,FaBus,FaTaxi,FaHiking,FaMoneyCheck,FaMoneyCheckAlt,FaVenus,
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
  FaShuttleVan
} from "react-icons/fa";
const Bigmobile = () => {
  return (
    <>
    
    <div className="bg-white flex flex-col xl:hidden w-full h-screen  text-2xl text-black">
      <div className="flex flex-row w-11/12 bg-white shadow-2xl h-24 mx-7 -my-2 rounded-2xl text-center justify-evenly">
        <div className="flex flex-col  justify-around ">
          <div >
            <FaPlane className="bg-sky-100 text-2xl rounded-full -my-9 p-2 mx-4 w-14 h-14 text-center text-blue-400  " />
          </div>
          <div className="text-black text-2xl"> Flights</div>
        </div>
        <div className="flex flex-col justify-around">
          <h1 className="">
            <FaHotel className="text-pink-700 text-2xl bg-pink-200 mx-3 rounded-full -my-9 w-14 h-14 p-2 " />
          </h1>
          <h2 className="text-black text-2xl">Hotels</h2>
        </div>
        <div className="flex flex-col justify-around">
          <h1 className="">
            <FaTrain className="text-2xl text-orange-400 mx-2 bg-orange-200 rounded-full -my-9 w-14 h-14 p-2 " />
          </h1>
          <h2 className="text-black text-2xl">Trains</h2>
        </div>
        <div className="flex flex-col justify-around ">
          <h1 className="">
            <FaUmbrellaBeach className="text-2xl text-green-400 mx-14 bg-gray-100 rounded-full -my-9 p-2 w-14 h-14   " />
          </h1>
          <h2 className="text-black text-2xl">Holiday Packages</h2>
        </div>
      </div>
        <div className=" bg-white  xl:hidden w-11/12 h-48 mx-7 my-11 rounded-2xl  shadow-2xl flex flex-row justify-evenly flex-wrap">
            <div className="flex flex-col ">
            <div className="text-sky-400" ><FaCar className="mx-11" /></div>
            <div>Airport Cabs</div>
            </div>
            <div className="flex flex-col">
            <div className="text-pink-400" ><FaHome className="mx-11"/></div>
            <div>Homestays</div>
            </div>
            <div className="flex flex-col">
            <div className="text-yellow-400" ><FaBus className="mx-2" /></div>
            <div>Bus</div>
            </div>
            <div className="flex flex-col">
            <div className="text-green-400" ><FaHiking className="mx-20"/></div>
            <div>Activities & Tours</div>
            </div>
            <div className="flex flex-col">
            <div className="text-blue-400" ><FaMoneyCheck className="mx-11"/></div>
            <div>Gift Cards</div>
            </div>
            <div className="flex flex-col">
            <div className="text-pink-400" ><FaVenus className="mx-14"/></div>
            <div>Nearby Getaways</div>
            </div>
            <div className="flex flex-col">
            <div className="text-yellow-400" ><FaTaxi className="mx-14"/></div>
            <div>Outstation Cabs</div>
            </div>
            
            <div className="flex flex-col">
            <div className="text-green-700" ><FaMoneyCheckAlt className="mx-4"/></div>
            <div>Forex</div>
            </div>
            <div></div>
        </div>
    </div>
    
    </>
  );
};

export default Bigmobile;
