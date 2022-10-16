import { supabase } from "../utils/supabase";
import { useReducer, useState, useEffect } from "react";
import Header from "./Header";
import { useRouter } from "next/router";
const Signin = ({ isvisible, onClose }) => {
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
    console.log("hello");
    const {
      data,
      error,
    } = await supabase.auth.getUser();
    console.log(JSON.stringify(data) + " session");
    if (error) {
      throw error;
    }

    // if (!session?.user) {
    //   throw new Error("User not logged in");
    // }

    return data;
  }
   function getProfile() {
    //try {
      setLoading(true);
      const user = getCurrentUser();
      console.log(user + "user");
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
      onClose();
      router.push("/");
      // console.log("sahil" + JSON.stringify(data));
    }
  };
  if (!isvisible) return null;
  return (
    <>
      {/* <Header /> */}

      

      <div className="  flex justify-center backdrop-grayscale-0 items-center z-40 absolute inset-0 backdrop-blur-sm ">
        <form className="px-24 py-24   bg-sky-900  flex flex-col sm:gap-4 rounded-xl shadow-6xl">
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
        </form>
      </div>
    </>
  );
};

export default Signin;
