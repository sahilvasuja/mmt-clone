import { supabase } from "../utils/supabase";
import { useReducer, useState } from "react";
import Header from "../components/Cards.js/Header";
import { useRouter } from "next/router";
const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");
  const [Cpass, setConfirmpass] = useState("");
  function handleName(e) {
    setName(e.target.value);
  }
  function handlemail(e) {
    setmail(e.target.value);
  }
  function handlpass(e) {
    setpass(e.target.value);
  }
  function handlconfirmpass(e) {
    setConfirmpass(e.target.value);
  }
  const login = async (e) => {
    e.preventDefault();
    router.push("/");
  };
  const signup = async (e) => {
    e.preventDefault();
    if (Cpass == pass) {
      const { data, session, error } = await supabase.auth.signUp({
        email: mail,
        password: pass,
        options: {
          data: {
            first_name: name,
            age: 27,
          },
        },
      });
      if (error) {
        alert(JSON.stringify(error));
      } else {
        alert("signup successful");
        router.push("/");
      }
    } else {
      alert("password is not same");
    }
    // const { data: { user: newuser } }=await supabase.auth.getUser()
    // console.log(newuser +" hello");
    //
    // console.log(user,error,mail,pass);
    // error? console.log(error) : console.log(user);
    // if (error) {
    //     alert(JSON.stringify(error));
    //   } else {
    //     router.push("/signin");
    //     console.log("sahil" + JSON.stringify(data));
    //   }
  };
  return (
    <>
      {/* <Header /> */}

      {/* <div className="min-h-screen min-w-screen bg-gray-200 flex justify-center items-center">
        <form className="px-24 py-24  bg-white  flex flex-col gap-4 rounded-xl shadow-lg">
        <h1 className="text-blue-400 font-bold my-0 text-2xl">Join our Community</h1>
        <h3 className="text-gray-400 ">More than 10 Million user connected with MMT <br></br> Community with happy face</h3>
        <div class="relative">

            <input
                type="text"
                placeholder="Enter your email..."
                className=" peer placeholder-transparent px-2  w-96   py-4  hover:border-emerald-400 duration-100 border border-slate-300 rounded-xl text-sm shadow-sm  bg-slate-50  outline-none  font-medium text-gray-700"
                value={mail}
                onChange={e=>(handlemail(e))}
            />
            <label for="username" className=" absolute left-0 -top-56.9  ml-4 -mt-0  text-xs text-green-600  
                peer-placeholder-shown:text-gray-400 
                peer-placeholder-shown:my-4
                peer-placeholder-shown:text-base 
                duration-300">
                    Enter your email...
                </label>
            </div>
          
			<div className="relative">
            <input
            type="password"
            placeholder="Enter a pasword..."
            className=" peer w-96 px-2 py-4 placeholder-transparent hover:border-emerald-400 duration-100 border border-slate-300 rounded-xl text-sm shadow-sm  bg-slate-50  outline-none  font-medium text-gray-700"
            value={pass}
            onChange={e=>(handlpass(e))}
          />
             <label for="username" class=" absolute left-0 -top-56.9  ml-4 -mt-0  text-xs text-green-600  
                peer-placeholder-shown:text-gray-400 
                peer-placeholder-shown:my-4
                peer-placeholder-shown:text-base 
                duration-300">
               Enter a pasword...
            </label>
            </div>				
          
          <button className="px-4 py-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-400 duration-100" onClick={signup}>
            Sign Up
          </button>
        </form>
      </div>
   

    <!-- component --> */}
      <div class="bg-gray-800 min-h-screen flex flex-col ">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full ">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              class="block border  bg-white border-gray-400 w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              value={name}
              onChange={(e) => handleName(e)}
              required
            />

            <input
              type="text"
              class="block border  bg-white border-gray-400 w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={mail}
              onChange={(e) => handlemail(e)}
              required
            />

            <input
              type="password"
              class="block border  bg-white border-gray-400 w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => handlpass(e)}
              required
            />
            <input
              type="password"
              class="block border bg-white border-gray-400 w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              required
              value={Cpass}
              onChange={(e) => handlconfirmpass(e)}
            />

            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-600 focus:outline-none my-1"
              onClick={signup}
            >
              Create Account
            </button>

            <div class="text-center text-sm text-gray-400 mt-4">
              By signing up, you agree to the Terms of Service and Privacy
              Policy
            </div>
          </div>

          <div class="text-gray-400 mt-6">
            Already have an account?
            <a
              class="no-underline border-b border-blue text-blue"
              href="../login/"
              onClick={login}
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
