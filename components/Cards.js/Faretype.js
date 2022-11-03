import React from "react";
import Fare from "../Fare";
const Faretype = () => {
  const type = [
    {
      label: "Regular Fares",
    },
    {
      label: "Armed Forces Fares",
    },
    {
      label: "Student Fares",
    },
    {
      label: "Senior Citizen Fares",
    },
    {
      label: "Doctors & Nurses Fares",
    },
  ];
  return type.map((item) => {
    return <Fare label={item.label} />;
  });
};

export default Faretype;
