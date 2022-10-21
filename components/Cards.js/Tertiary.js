import React from 'react'

const Tertiary = () => {
  return (
    <div className="lg:flex flex-row  rounded-3xl border border-solid absolute my-32 w-9/12 justify-evenly left-40 text-center text-black bg-white 2xl:left-72 hidden">
          <div className="text-xl my-2">Where2Go</div>
          <div className="flex flex-col">
            <div className="text-xl">TripMoney</div>
            <div className="text-sm">Loan Credit and More</div>
          </div>
          <div className="">
            <div className="text-xl text-bold text-black">
              Explore International Flights
            </div>
            <div className="text-lg text-green-600">
              Cheapest Flights to Paris, Bali, Tokyo & more
            </div>
          </div>
          <div className="text-xl my-2">Nearby Getaways</div>
          <div className="text-xl my-2">Gift Cards</div>
        </div>
  )
}

export default Tertiary