import React, { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabase";

const passenger = ({ start, frm }) => {
  console.log(start, frm + "6");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  function handleemail(e) {
    e.preventDefault();
    setMail(e.target.value);
  }
  function handlefname(e) {
    e.preventDefault();
    setFirstName(e.target.value);
  }
  function handlelname(e) {
    e.preventDefault();
    setLastName(e.target.value);
  }
  function handlephone(e) {
    e.preventDefault();
    setPhone(e.target.value);
  }
  function handleage(e) {
    e.preventDefault();
    setAge(e.target.value);
  }
  async function travellerdetail(e) {
    e.preventDefault();
    const { data, error, status } = await supabase
      .from("passenger")
      .insert(
        {
          firstname: firstname,
          lastname: lastname,
          email: mail,
          mobile: phone,
          age: age,
        },
        console.log(data)
      );
    // router.push({
    //   pathname: "/boardingpass",
    //   query: {
    //     name: firstname + " " + lastname,
    //     age: age,
    //   },
    // });
  }

  return (
    <>
      <form onSubmit={travellerdetail} className="">
        <div className="w-4/12 border bg-white rounded-lg py-5 mx-auto  px-4 ">
          <div className="font-bold text-black text-3xl ">
            Traveller Details
          </div>
          <div class="relative z-0 mb-6  group my-5">
            <input
              type="email"
              name="email"
              id="email"
              class="block py-2.5 px-0 w-full text-gray-900 text-sm bg-transparent  border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none  "
              placeholder="Email"
              required=""
              value={mail}
              onChange={handleemail}
            />
          </div>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="first_name"
                id="first_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500  focus:outline-none"
                placeholder="First Name"
                required=""
                value={firstname}
                onChange={handlefname}
              />
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="last_name"
                id="last_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none "
                placeholder="Last Name"
                required=""
                value={lastname}
                onChange={handlelname}
              />
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                name="floating_phone"
                id="floating_phone"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none "
                placeholder="Phone"
                required=""
                value={phone}
                onChange={handlephone}
              />
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="number"
                name="floating_phone"
                id="floating_phone"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-gray-600  focus:outline-none dark:focus:border-blue-500 "
                placeholder="Age"
                required=""
                value={age}
                onChange={handleage}
              />
            </div>
          </div>
          {/* <div className="flex flex-row justify-between my-3 text-center">
            <p className="text-black  font-bold">Total Due</p>
            <p className="text-black  font-bold">6500</p>
            <button className="bg-blue-500 rounded-xl px-7 py-2 ">
              Proceed
            </button>
          </div> */}
          <button
            type="submit"
            class="text-white bg-blue-700 items-center  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default passenger;
