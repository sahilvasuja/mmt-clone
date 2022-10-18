const Menuflight = () => {
  return (
    <div className="flex flex-row ">
      <div className="border border-black w-1/4 h-36 flex flex-col  text-black p-2 ">
        <h5 className="text-xl">FROM</h5>
        <h2 className="text-2xl ">DELHI</h2>
        <h4 className="text-lg">DEL,DELHI AIRPORT INDIA</h4>
      </div>
      <div className="border border-black w-1/4 h-36 flex flex-col text-black p-2">
        <h5 className="text-xl">TO</h5>
        <h2 className="text-2xl ">BENGALURU</h2>
        <h4 className="text-lg">BLR,Bengaluru International AIRPORT...</h4>
      </div>
      <div className="border border-black w-1/5 h-36 flex flex-col  text-black p-2">
        <div className="text-xl">DEPARTURE </div>
        <div className="text-2xl ">7 Oct'22</div>
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
        <div className="text-2xl  text-black">1 Traveller</div>
        <div className="text-lg text-gray-600">Economy/Premium Economy</div>
      </div>
    </div>
  );
};
export default Menuflight
;
