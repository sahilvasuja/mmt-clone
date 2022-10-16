import {useRouter} from "next/router";


 const createaccount = ({isvisible,onClose}) => {
  const router=useRouter();
  const signinto= async(e)=>{
    router.push("/signin")
  }
  const signupto= async(e)=>{
    router.push("/signup")
  }
  // if(!isvisible) return null;
  return (
    <>
    {/* <div className="mx-72 text-2xl" onClick={()=>onClose()}>X</div> */}
    <div className="w-96 h-90 rounded-3xl flex flex-col bg-white text-black mx-auto mt-72">
        <div className="bg-green-200 w-36 h-36 rounded-2xl text-3xl text-center px-7 py-11 mx-3" onClick={signinto}>SignIn</div>
        <div className="bg-gray-400 text-center p-3 text-2xl">OR</div>
        <div className="bg-sky-200 w-36 h-36 rounded-2xl text-3xl text-center mx-56 px-7 py-11" onClick={signupto}>SignUp</div>
    </div>
    </>
  )
}
export default createaccount;