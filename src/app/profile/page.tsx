"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function () {
  const router = useRouter();
  const [data,setData]=useState("nothing as of now")
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push('/login')
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const getDetails = async()=>{
      const res = await axios.get('/api/users/info')
      console.log(res.data)
      setData(res.data.data._id)
      
  }
  return (
    <div>
      all profile page
      <br />
      <h2>{data ==='nothing' ? "Nothing":<Link href={`/profile/${data}`}>{data} </Link>}</h2>
      <button onClick={logout}>LogOut</button>
      <br />
      <button onClick={getDetails}>clicke here to get details</button>
    
    </div>
    
  );
}
