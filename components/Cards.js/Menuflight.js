import { useState } from "react";

const Menuflight = () => {
  const [journeyBeggin,setJourneyBeggin]=useState("Delhi");
  const Startjourney=(e)=>{
      setJourneyBeggin(e.target.value);
  }
  const [journeyOver,setJourneyOver]=useState("Bengaluru");
  const Endjourney=(e)=>{
      setJourneyOver(e.target.value);
  }
  const [journeydate,setJourneyDate]=useState("7 oct 2022");
  const date=(e)=>{
      
      setJourneyDate(e.target.value);
  }
  const [member,setMember]=useState("1 Traveller");
  const travel=(e)=>{
      
      setMember(e.target.value + "Traveller");
  }
  return (
    <div className="flex flex-row ">
      <div className="border border-black w-1/4 h-36 flex flex-col  text-black p-2 ">
        <h5 className="text-xl">FROM</h5>
        <input className="text-2xl bg-white text-black" value={journeyBeggin} onChange={Startjourney}></input>
        <input className="text-lg bg-white" value={` ${journeyBeggin.substring(0,3)} ${journeyBeggin} International AIRPORT`}></input>
      </div>
      <div className="border border-black w-1/4 h-36 flex flex-col text-black p-2">
        <h5 className="text-xl">TO</h5>
        <input className="text-2xl bg-white" value={journeyOver} onChange={Endjourney} ></input>
        <input className="text-lg bg-white" value={` ${journeyOver.substring(0,3)} ${journeyOver} International AIRPORT...`}></input>
      </div>
      <div className="border border-black w-1/5 h-36 flex flex-col  text-black p-2">
        <div className="text-xl">DEPARTURE </div>
        <input className="text-2xl bg-white" value={journeydate} onChange={date}></input>
        <div className="text-lg">Friday</div>
      </div>
      <div className="border border-black w-1/5 h-36 flex flex-col  text-black p-2">
        <div className="text-xl">RETURN</div>

        <div className="text-lg">
          Tap to add a return date for bigger discounts
        </div>
      </div>
      <div className="border border-black w-1/4 h-36 flex flex-col p-2 text-clip">
        <div className="text-xl text-gray-500">TRAVELLERS & CLASS </div>
        <input className="text-2xl bg-white text-black" value={`${member}`} onChange={travel}/>
        <div className="text-lg text-gray-600">Economy/Premium Economy</div>
      </div>
    </div>
  );
};
export default Menuflight
;
