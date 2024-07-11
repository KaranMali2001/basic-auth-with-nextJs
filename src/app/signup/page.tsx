"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignUpPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const router= useRouter()
  const [buttonDisabled,setButtonDisabled]=useState(true)
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0 && user.username.length>0){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  },[user])
  const signUp = async () => {
    setLoading(true)
    try {
      const res=await axios.post('/api/users/signup',user)
      console.log("signUp successful",res.data)
      router.push('/login')
    } catch (error:any) {
      
    }finally{
      setLoading(false)

    }
  };
  return (
    <div>
      <div className="mb-6 justify-center">
        <input
          placeholder="username"
          name="username"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </div>
      <div className="mb-6">
        <input
          placeholder="password"
          name="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div className="mb-6">
        <input
          placeholder="email"
          name="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <button onClick={signUp} disabled={loading} >
        {loading ? 'wait for some time signing Up':''}
        {buttonDisabled ? "no signUp":"signUp"}</button>
      <br />
    <Link href='/login'>go to login page</Link>
     </div>
  );
}
