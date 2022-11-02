import { supabase } from "../utils/supabase";
import { useReducer, useState } from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
const Signin = () => {
  const router = useRouter();
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");
  function handlemail(e) {
    setmail(e.target.value);
  }
  function handlpass(e) {
    setpass(e.target.value);
  }
  const signin = async (e) => {
    e.preventDefault();
    const { data, session, error } = await supabase.auth.signInWithPassword({
      email: mail,
      password: pass,
    });
    console.log(session + "session");

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push("/");
      console.log("sahil" + JSON.stringify(data));
    }
  };
  return (
    <>
      <Header />

      <div className="min-h-screen min-w-screen bg-gray-200 flex justify-center items-center">
        <form className="px-24 py-24  bg-white  flex flex-col gap-4 rounded-xl shadow-6xl">
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
        </form>
      </div>
    </>
  );
};

export default Signin;
