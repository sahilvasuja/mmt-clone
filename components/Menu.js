import React from "react";
import Menutype from "./Cards.js/Menutype";
const Menu = ({ name, icon, title }) => {
  return (
    <div className="flex flex-col">
      <h1 className={`w-30 h-30 veiwbox-24 ml-3 items-center ${title}`}>
        {icon}
      </h1>
      <h5>{name}</h5>
    </div>
  );
};

export default Menu;
