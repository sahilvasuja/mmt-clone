import React from "react";

const Tabs = () => {
  return (
    <>
      <div class="text-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 ">
        <ul class="flex flex-wrap -mb-px ">
          <li className="text-gray-900 text-6xl ">Offers</li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              ALL OFFERS
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
              aria-current="page"
            >
              BANK OFFERS
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              FLIGHTS
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              HOTELS
            </a>
          </li>
          <li>
            <a class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
              TRAINS
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Tabs;
