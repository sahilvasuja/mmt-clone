import { FaBeer } from "react-icons/fa";
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

import Dashboardelement from "./Cards.js/Dashboardelement";
const Dashboard = ({ names, Items,text,label }) => {
  return (
    <>
     <div className="flex flex-row h-14 border-solid border-2 hover:bg-gray-300 text-center justify-around items-center ">
              <h1 className={text}>
              <Items className={label} /></h1>
              <h4 className="text-gray-900  ">{names}</h4>
            </div>
   
    </>
  );
};
export default Dashboard;
