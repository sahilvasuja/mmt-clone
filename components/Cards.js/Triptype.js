import React from "react";
import Trip from "../Trip";
const Triptype = () => {
  const type = [
    {
      name: "ONEWAY",
    },
    {
      name: "ROUND TRIP",
      text: "pl-4",
    },
    {
      name: "MULTI CITY",
      text: "pl-4",
    },
  ];
  return type.map((item) => {
    return <Trip name={item.name} text={item.text} />;
  });
};

export default Triptype;
