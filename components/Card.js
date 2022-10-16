import React from "react";
import { Styles } from "@fortawesome/fontawesome-svg-core";
import Download from "./Download";
import Handpicked from "./Handpicked";
import Tabs from "./Tabs";
import Fotter from "./Fotter";
import { FLIGHT_MANIFEST } from "next/dist/shared/lib/constants";
const Card = () => {
    const data=[
        {
            name: 'Grab Flat 12%OFF on Domestic FLIGHT',
            title: 'for your festive & year-end trips with our Travel Tyohaar - Diwali Edition!'
        },
        {
            name: 'Grab up to 7500 Discount on International FLIGHT',
            title: 'Offer valid on HDFC Credit Cards and EasyEMI'
        },
        {
            name: 'Grab Flat 10%OFF on International FLIGHT',
            title: 'for your festive & year-end trips with our Travel Tyohaar - Diwali Edition!'
        },
        {
            name: 'Grab Flat 15%OFF on Domestic Hotels & Homestays',
            title: 'for your festive & year-end trips with our Travel Tyohaar - Diwali Edition!'
        }
    ]
  return (
    // <div className="bg-white w-screen h-screen  overflow-x-auto">
    <>
    <div className="flex flex-col bg-white shadow-2xl w-9/12 mx-auto  px-9 py-5  my-24 border-white border-b rounded-2xl">
    <Tabs />
    <div className="grid grid-cols-2  gap-4 bg-white  my-5">
    {data.map((item) => {       
            return <Handpicked name={item.name} title={item.title}/>;
          })}
      </div>
    </div>
      <div className="w-9/12 h-4/12 bg-white shadow-2xl mx-auto px-9 py-5 my-14 flex flex-row overflow-x-auto rounded-2xl">
        <Download />
      </div>
      <div className="bg-gray-500 h-full">
        <Fotter />
      </div>
    </>
  );
};

export default Card;
