import { supabase } from "../utils/supabase";
import { useReducer, useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
const Signin = ({ isvisible, setLoggedIn, setName, onClose }) => {
  const router = useRouter();
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);

  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  async function getCurrentUser() {
    // console.log("hello");
    const { data, error } = await supabase.auth.getUser();
    console.log(
      JSON.stringify(data.user?.user_metadata?.first_name) + " session"
    );
    if (error) {
      throw error;
    }

    // if (!session?.user) {
    //   throw new Error("User not logged in");
    // }
    else {
      const loginName = data.email;
      return data;
    }
  }
  function getProfile() {
    //try {
    setLoading(true);
    const user = getCurrentUser();
    // console.log(user + "user");
    // let { data, error, status } = await supabase
    //   .from("profiles")
    //   .select(`username, website, avatar_url, useremail`)
    //   .eq("id", user.id)
    //   .single();

    //   if (error && status !== 406) {
    //     throw error;
    //   }

    //   if (data) {
    //     console.log(data + "data");
    //     setmail(data.useremail);
    //     setUsername(data.username);
    //     setWebsite(data.website);
    //     setAvatarUrl(data.avatar_url);
    //   }
    // } catch (error) {
    //   alert(error.message);
    // } finally {
    //   setLoading(false);
    // }
  }

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

    // useEffect(() => {
    //   (async () => {
    //     const { data: user, email} = await supabase
    //       .from("User")
    //       .select("*, profiles:id (name)")
    //       .order("created_at");

    //   })();
    // }, []);

    const { data, profile, session, error } =
      await supabase.auth.signInWithPassword({
        email: mail,
        password: pass,
      });
    getProfile();
    // console.log(session + "session");
    // const { data: { user: newuser } }=await supabase.auth.getUser()
    // console.log(newuser +" hello");
    //
    // console.log(user,error,mail,pass);
    // error? console.log(error) : console.log(user);
    if (error) {
      alert(JSON.stringify(error));
    } else {
      alert("Successfull Login");
      console.log(data + "105");
      setLoggedIn(true);
      setName(data.user?.user_metadata?.first_name);
      console.log("sahil" + JSON.stringify(data.user.email));
      onClose();

      router.push("/");
      //
    }
  };
  if (!isvisible) return null;
  return (
    <>
      <div className="  flex justify-center backdrop-grayscale-0 items-center z-40 absolute inset-0 backdrop-blur-sm ">
        {/* <form className="px-24 py-24   bg-sky-900  flex flex-col sm:gap-4 rounded-xl shadow-6xl">
          <h1 className="text-blue-400 font-bold my-0 text-2xl">
            Welcome Back
          </h1>
          <h3 className="text-gray-400">Sign in to use your account</h3>
          <div class="relative">
            <input
              type="text"
              placeholder="Enter your email..."
              className=" peer placeholder-transparent px-2  w-96   py-4  hover:border-emerald-400 duration-100 border border-slate-300 rounded-xl text-sm shadow-sm  bg-slate-50  outline-none  font-medium text-gray-700"
              value={mail}
              onChange={(e) => handlemail(e)}
            />
            <label
              for="username"
              className=" absolute left-0 -top-56.9  ml-4 -mt-0  text-xs text-green-600  
                peer-placeholder-shown:text-gray-400 
                peer-placeholder-shown:my-4
                peer-placeholder-shown:text-base 
                duration-300"
            >
              Enter your email...
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Enter a pasword..."
              className=" peer w-96 px-2 py-4 placeholder-transparent hover:border-emerald-400 duration-100 border border-slate-300 rounded-xl text-sm shadow-sm  bg-slate-50  outline-none  font-medium text-gray-700"
              value={pass}
              onChange={(e) => handlpass(e)}
            />
            <label
              for="username"
              class=" absolute left-0 -top-56.9  ml-4 -mt-0  text-xs text-green-600  
                peer-placeholder-shown:text-gray-400 
                peer-placeholder-shown:my-4
                peer-placeholder-shown:text-base 
                duration-300"
            >
              Enter a pasword...
            </label>
          </div>

          <button
            className="px-4 py-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-400 duration-100"
            onClick={signin}
          >
            Sign In
          </button>
          <button
            className="text-2xl text-gray-700 bg-white px-4 py-3 rounded-xl  "
            onClick={onClose}
          >
            Back
          </button>
        </form> */}

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
    </>
  );
};

export default Signin;
