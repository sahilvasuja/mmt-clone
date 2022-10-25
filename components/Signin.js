// import { supabase } from "../utils/supabase";
import { useReducer, useState, useEffect, useCallback } from "react";

import { useRouter } from "next/router";
 import Userprofile from "./Userprofile";
import Link from "next/link";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";

const Signin = ({ isvisible, setLoggedIn, setName, onClose }) => {
  const router = useRouter();
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");

  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, user]);

  function handlemail(e) {
    setmail(e.target.value);
  }
  function handlpass(e) {
    setpass(e.target.value);
  }
  const signup = async (e) => {
    e.preventDefault();
    router.push("/signup");
  };

  const signin = async (e) => {
    e.preventDefault();

    const { data, profile, session, error } =
      await supabase.auth.signInWithPassword({
        email: mail,
        password: pass,
        refreshToken: session?.refresh_token,
      });
    await supabase.auth.setSession(data.session.refresh_token);

    if (error) {
      alert(JSON.stringify(error));
    } else {
      setLoggedIn(true);
      setName(data.user?.user_metadata?.first_name);
      onClose();

      router.push("/");
    }
  };
  if (!isvisible) return null;
  return (
    <>
      <div className="  flex justify-center backdrop-grayscale-0 items-center z-40 absolute inset-0 backdrop-blur-sm ">
       
        <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-6" action="#">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h5>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required=""
                value={mail}
                onChange={(e) => handlemail(e)}
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                value={pass}
                onChange={(e) => handlpass(e)}
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                onClick={onClose}
              >
                BACK
              </a>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={signin}
            >
              Login to your account
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <a
                href="#"
                class="text-blue-700 hover:underline dark:text-blue-500"
                onClick={signup}
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
     <Userprofile
      mails={mail}
     />
    </>
  );
};

export default Signin;
