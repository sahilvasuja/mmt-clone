import React, { useState } from "react";
import { useRouter } from "next/router";
import Userprofile from "../components/Userprofile";
import { useEffect } from "react";
const check = () => {
    const router=useRouter();
   const [name,setName]=useState("");
   const [bool,setbool]=useState(false);
   const [email,setEmail]=useState("");
   const [log,setLog]=useState(false);
  useEffect(() => {
   setName(router.query.name);
   setEmail(router.query.email)
   setbool(router.query.bool)
    console.log(router.query.name);
  },[router.query.name]);

  return <Userprofile 
    name={name}
    email={email}
    bool={bool}

  />;
};

export default check;
