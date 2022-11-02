import React from "react";
import Faretype from "./Cards.js/Faretype";
const Fare = ({ label }) => {
  return (
    <div className=" border-black mx-1  bg-zinc-300   flex flex-row items-center gap-1 h-9">
      <input type="radio" name="type" />
      <label for="html" className=" text-black font-bold text-sm ">
        {label}
      </label>
    </div>
  );
};

export default Fare;
