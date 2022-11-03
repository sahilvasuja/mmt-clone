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
  };
  return (
    <>
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
