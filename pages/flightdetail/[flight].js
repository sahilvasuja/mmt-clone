import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../utils/supabase";
const flight = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    flightshow();
  }, []);
  const Router = useRouter();
  let flightid = Router.query.flight;

  async function flightshow() {
    let flightid = Router.query.flight;

    const { data, error, status } = await supabase
      .from("flight")
      .select("*")
      .eq("id", flightid);
    console.log(data[0]);
    setArr(data[0]);
  }

  return (
    <>
      <div>{flightid}</div>
      <div className="text-white bg-blue-900">{arr.From}</div>
    </>
  );
};

export default flight;
