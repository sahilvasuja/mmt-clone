// import { useState, useEffect } from "react";
// // import {
// //   useSession,
// //   useSupabaseClient,
// //   useUser,
// // } from "@supabase/auth-helpers-react";
// import { useRouter } from "next/router";
// import { withPageAuth } from "@supabase/supabase-auth-helpers/nextjs";
// import { useUser } from "@supabase/auth-helpers-react";
// import Signin from "../components/signin";
// export default function Account() {

//   const [loading, setLoading] = useState(true);
//   const [email, setemail] = useState();
//   const [name, setName] = useState("");
//   const [website, setWebsite] = useState("");
//   const [avatar_url, setAvatarUrl] = useState("");
//   const [edit, setEdit] = useState(false);
//   const user = useUser();

//   useEffect(() => {
//     getProfile();
//   }, [user]);
//   function Edit() {
//     setEdit(!edit);
//   }
//   async function getProfile() {
//     setLoading(true);

//     if (user) {
//       setName(user?.user_metadata?.first_name);
//     } 
//   }

//   return (
//     <>
//     <div class="bg-gray-100 h-screen">
//         <div class="container mx-auto my-5 p-5">
//           <div class="md:flex no-wrap md:-mx-2 ">
//             <div class="w-full md:w-3/12 md:mx-2">
//               <div class="bg-white p-3 border-t-4 border-green-400">
//                 <div class="image overflow-hidden">
//                   <img
//                     class="h-auto w-full mx-auto"
//                     src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
//                     alt=""
//                   />
//                 </div>
//                 <h1 class="text-gray-900 text-center font-bold text-xl leading-8 my-1">
//                   Sahil Vasuja
//                 </h1>
//                 <h3 class="text-gray-600 text-center font-lg text-semibold leading-6">
//                   PERSONAL PROFILE
//                 </h3>
//                 <ul class="bg-gray-100 text-black hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm cursor-pointer">
//                   <li class=" text-center items-center py-3">Profile </li>
//                   <li class="text-center items-center  py-3">Login Details</li>
//                   <li class=" text-center items-center py-3">
//                     Save Travellers{" "}
//                   </li>
//                   <li
//                     class="text-center items-center  py-3"
//                     // onClick={() => supabase.auth.signOut()}
//                   >
//                     Logout
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div class="w-full md:w-9/12 mx-2 h-64 items-center ">
//               <div class="bg-white p-3 shadow-sm rounded-sm">
//                 <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
//                   <span clas="text-green-500">
//                     <svg
//                       class="h-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                       />
//                     </svg>
//                   </span>
//                   <span class="text-black font-bold text-3xl">Profile</span>
//                 </div>
//                 <h3 className="text-black px-4">
//                   Basic info, for a faster booking experience
//                 </h3>
//                 <div class="text-gray-700 py-3 ">
//                   <div class="grid  text-sm">
//                     <div class="grid grid-cols-2">
//                       <div class="px-4 py-2 font-semibold">Name</div>
//                       <div class="px-4 py-2 bg-white">{name}</div>
//                     </div>

//                     <div class="grid grid-cols-2">
//                       <div class="px-4 py-2 font-semibold">Gender</div>
//                       <input
//                         class="px-4 py-2 bg-white"
//                         value={"Male"}
//                         disabled
//                       />
//                     </div>
//                     <div class="grid grid-cols-2">
//                       <div class="px-4 py-2 font-semibold">Contact No.</div>
//                       {!edit ? (
//                         <input
//                           class="px-4 py-2 bg-white"
//                           value={"1234567890"}
//                           disabled
//                         />
//                       ) : (
//                         <input
//                           class="px-4 py-2 bg-white"
//                           value={"1234567890"}
//                         />
//                       )}
//                     </div>

//                     <div class="grid grid-cols-2">
//                       <div class="px-4 py-2 font-semibold">Email.</div>
//                       <div class="px-4 py-2">
//                         <div
//                           class="text-blue-800 outline-none bg-white"
//                           href="mailto:jane@example.com"
//                           disabled
//                         >
//                           {email}
//                         </div>
//                       </div>
//                     </div>
//                     <div class="grid grid-cols-2">
//                       <div class="px-4 py-2 font-semibold">Birthday</div>
//                       {!edit ? (
//                         <input
//                           class="px-4 py-2 bg-white"
//                           value={"12 sep 2000"}
//                           disabled
//                         />
//                       ) : (
//                         <input
//                           class="px-4 py-2 bg-white"
//                           value={"12 sep 2000"}
//                         />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
//                   onClick={Edit}
//                 >
//                   {!edit ? "Edit" : "save"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <Signin setName={setName} setemail={setemail} /> */}
//       </>
//   );
// }

// // export const getServerSideProps = withPageAuth();
