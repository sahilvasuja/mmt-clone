import React from "react";
import Menu from "../Menu";
const Menutype = () => {
  const menuitem = [
    {
      name: "Flight",
      icon: "βοΈ",
      text: "ml-3",
    },
    {
      name: "Hotels",
      icon: "π¬<",
      text: "ml-3",
    },
    {
      name: "Homestays",
      icon: "π¬<",
      text: "ml-6",
    },
    {
      name: "Holiday Packages",
      icon: "π<",
      text: "ml-11",
    },
    {
      name: "Trains",
      icon: "π",
      text: "ml-3",
    },
    {
      name: "Flight",
      icon: "βοΈ",
      text: "ml-3",
    },
    {
      name: "Buses",
      icon: "π",
      text: "ml-3",
    },
    {
      name: "Cabs",
      icon: "π",
      text: "ml-2",
    },
    {
      name: "Forex",
      icon: "π¬",
      text: "ml-3",
    },
    {
      name: "Charter Flights",
      icon: "π¬",
      text: "ml-9",
    },
    {
      name: "Activity",
      icon: "πΆββοΈ",
      text: "ml-4",
    },
  ];
  return menuitem.map((item) => {
    <Menu name={item.name} icon={item.icon} text={item.text} />;
  });
};

export default Menutype;
