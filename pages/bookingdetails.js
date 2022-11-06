import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const bookingdetails = ({ array }) => {
  console.log(array + "5");
  const router = useRouter();
  const [arr, setArr] = useState([]);
  useEffect(() => {
    console.log(router.query, "8");
    let encoded = encodeURI(router.query.data);
    let decoded = decodeURI(encoded);
    console.log(encoded, "encoded");
    console.log(decoded, "decoded");

    setArr(JSON.parse(decoded));
  }, []);
  
  return (
    <div>
      {arr.map((e) => {
        console.log(JSON.stringify(array) + "26");
        return (
          <div className="bg-gray-200">
            <div class="p-10 shadow-lg ">
              <div class="max-w-full  bg-white flex flex-col rounded overflow-hidden shadow-lg">
                <div class="flex flex-row items-baseline flex-nowrap bg-gray-100 p-2">
                  <h1 class="ml-2 uppercase font-bold text-gray-500">
                    departure
                  </h1>

                  <p class="ml-2 font-normal text-gray-500">{e.Date}</p>
                </div>
                <div class="mt-2 flex justify-start bg-white p-2">
                  <div class="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 p-1">
                    <p class="font-normal text-sm ml-1 text-gray-500">
                      Economy
                    </p>
                  </div>
                </div>
                <div class=" flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
                  <div class="flex flex-row place-items-center p-2">
                    <div class="flex flex-col ml-2">
                      <p class="text-2xl text-gray-500 font-bold">
                        {e.flightname}
                      </p>
                      <p class="text-xs text-gray-500">{e.flightnumber}</p>
                    </div>
                  </div>

                  <div class="flex flex-col p-2">
                    <p class="font-bold text-black">{e.DepartureTime}</p>
                    <p class="text-gray-500 font-bold">{e.From}</p>
                  </div>
                  <div class="flex flex-col p-2">
                    <p class=" text-gray-400">{e.timerequired}</p>
                    <p className="text-yellow-400 font-bold">----------</p>
                    <p className="text-gray-400">{e.flighttype}</p>
                  </div>
                  <div class="flex flex-col flex-wrap p-2">
                    <p class="font-bold text-black">{e.ArrivalTime}</p>
                    <p class="text-gray-500 font-bold">{e.To}</p>
                  </div>
                  <div class="md:border-l-2 mx-6 md:border-dotted flex flex-row py-4 mr-6 flex-wrap">
                    <div class="text-sm mx-2 flex flex-col text-gray-400">
                      <p>Price</p>
                      <p class="font-bold">{e.Price}</p>
                      <p class="text-xs text-gray-500">Price per adult</p>
                    </div>

                    <Link href={`/flightdetail/${e.id}`}>
                      <a className="w-32 h-11 rounded flex border-solid border text-black bg-green-800 mx-2 justify-center place-items-center" >
                        Book
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default bookingdetails;
