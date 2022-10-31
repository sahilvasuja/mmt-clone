import { text } from "@fortawesome/fontawesome-svg-core";
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
import React from "react";
import Dashboard from "../Dashboard";
const Dashboardelement = () => {
  const dashboard = [
    {
      names: "Manage Trips",
      icons: FaToolbox,
      text: "pl-1",
      label: "text-2xl text-black",
    },
   
    {
      names: "My Wallet",
      icons: FaWallet,
      text: "pr-1",
      label: "text-2xl text-black",
    },
    {
      names: "Setting",
      icons: FaRegSun,
      text: "pr-6",
      label: "text-2xl text-black",
    },
    {
      names: "Travel Offers",
      icons: FaDharmachakra,
      text: "",
      label: "text-2xl text-black",
    },
    {
      names: "Flights",
      icons: FaFighterJet,
      text: "pr-6",
      label: "text-2xl text-sky-400",
      
    },

    {
      names: "Hotels",
      icons: FaHotel,
      text: "pr-14",
      label: "text-2xl text-pink-900",
    },

    {
      names: "Trains",
      icons: FaTrain,
      text: "pr-14",
      label: "text-2xl text-orange-400",
    },
    {
      names: "Holiday Packages",
      icons: FaUmbrellaBeach,
      
      label: "text-2xl text-green-500",
    },
  ];
  return (
    <>
      {dashboard.map((item) => {
        return (
          <Dashboard
            names={item.names}
            Items={item.icons}
            text={item.text}
            label={item.label}
          />
        );
      })}
      <div className="flex flex-col  h-36 items-center justify-evenly ">
        <h3 className="text-blue-600">User Agreement</h3>
        <h3 className="text-blue-600">Privacy Policy</h3>
        <h3 className="text-blue-600">Terms of Service</h3>
      </div>
    </>
  );
};

export default Dashboardelement;
