import React from "react";
import Menu from "../Menu";
const Menutype = () => {
  const menuitem = [
    {
      name: "Flight",
      icon: "✈️",
      text: "ml-3",
    },
    {
      name: "Hotels",
      icon: "🏬<",
      text: "ml-3",
    },
    {
      name: "Homestays",
      icon: "🏬<",
      text: "ml-6",
    },
    {
      name: "Holiday Packages",
      icon: "🍟<",
      text: "ml-11",
    },
    {
      name: "Trains",
      icon: "🚂",
      text: "ml-3",
    },
    {
      name: "Flight",
      icon: "✈️",
      text: "ml-3",
    },
    {
      name: "Buses",
      icon: "🚌",
      text: "ml-3",
    },
    {
      name: "Cabs",
      icon: "🚙",
      text: "ml-2",
    },
    {
      name: "Forex",
      icon: "🏬",
      text: "ml-3",
    },
    {
      name: "Charter Flights",
      icon: "🛬",
      text: "ml-9",
    },
    {
      name: "Activity",
      icon: "🚶‍♂️",
      text: "ml-4",
    },
  ];
  return menuitem.map((item) => {
    <Menu name={item.name} icon={item.icon} text={item.text} />;
  });
};

export default Menutype;
