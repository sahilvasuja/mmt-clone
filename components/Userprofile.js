import React from "react";
import { supabase } from "../utils/supabase";
import { useState, useEffect } from "react";
import Signin from "./signin";
import { useSession } from "@supabase/auth-helpers-react";
export default function Profile({ email, name,bool }) {
  const [phone, setPhone] = useState("8766111117");
  const [phoneplus, setphoneplus] = useState(false);
  const [gender, setGender] = useState("Male");
  const [bday, setBday] = useState("12 sep 2000");
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const session = useSession();
 
  useEffect(() => {
    getProfile();
  }, [session]);

  function Edit() {
    setEdit(!edit);
  }
  async function Gender(e) {
    // edit(!edit);
    e.preventDefault();
    setGender(e.target.value);
  }
  async function Bday(e) {
    // edit(!edit);
    e.preventDefault();
    setBday(e.target.value);
  }
  async function Phone(e) {
    // edit(!edit);
    e.preventDefault();
    setPhone(e.target.value);
  }
  async function getCurrentUser() {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      throw error;
    }

    if (!session?.user) {
      throw new Error("User not logged in");
    }

    return session.user;
  }

  async function getProfile() {
    try {
      setLoading(true);
      const user = await getCurrentUser();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url, useremail`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setemail(data.useremail);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className={`bg-gray-100 h-screen  ${!bool? 'hidden' : 'visible'}`}>
        <div class="container mx-auto my-5 p-5">
          <div class="md:flex no-wrap md:-mx-2 ">
            <div class="w-full md:w-3/12 md:mx-2">
              <div class="bg-white p-3 border-t-4 border-green-400">
                <div class="image overflow-hidden">
                  <img
                    class="h-auto w-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2022/09/Fam_Kids024-1.jpg"
                    alt=""
                  />
                </div>
                <h1 class="text-gray-900 text-center font-bold text-xl leading-8 my-1">
                  {name}
                </h1>
                <h3 class="text-gray-600 text-center font-lg text-semibold leading-6">
                  PERSONAL PROFILE
                </h3>
                <ul class="bg-gray-100 text-black hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm cursor-pointer">
                  <li class=" text-center items-center py-3">Profile </li>
                  <li class="text-center items-center  py-3">Login Details</li>
                  <li class=" text-center items-center py-3">
                    Save Travellers{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-full md:w-9/12 mx-2 h-64 items-center ">
              <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span class="text-black font-bold text-3xl">Profile</span>
                </div>
                <h3 className="text-black px-4">
                  Basic info, for a faster booking experience
                </h3>
                <div class="text-gray-700 py-3 ">
                  <div class="grid  text-sm">
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Name</div>
                      <div class="px-4 py-2 bg-white">{name}</div>
                    </div>

                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Gender</div>
                      {!edit ? (
                        <input
                          class="px-4 py-2 bg-white"
                          value={gender}
                          onChange={Gender}
                          disabled
                        />
                      ) : (
                        <input
                          class="px-4 py-2 bg-white"
                          value={gender}
                          onChange={Gender}
                        />
                      )}
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Contact No.</div>
                      {!edit ? (
                        <input
                          class="px-4 py-2 bg-white"
                          value={phone}
                          onChange={Phone}
                          disabled
                        />
                      ) : (
                        <input
                          class="px-4 py-2 bg-white"
                          value={phone}
                          onChange={Phone}
                        />
                      )}
                    </div>

                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Email</div>
                      <div class="px-4 py-2">
                        <div
                          class="text-blue-800 outline-none bg-white"
                          disabled
                        >
                          {email}
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Birthday</div>
                      {!edit ? (
                        <input
                          class="px-4 py-2 bg-white"
                          value={bday}
                          onChange={Bday}
                          disabled
                        />
                      ) : (
                        <input
                          class="px-4 py-2 bg-white"
                          value={bday}
                          onChange={Bday}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <button
                  class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                  onClick={Edit}
                >
                  {!edit ? "Edit" : "save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Signin setName={setName} setemail={setemail} /> */}
    </>
  );
}
