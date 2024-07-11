"use client";

import axios from "axios";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const login = async () => {
    try {
      const res = await axios.post("/api/users/login", user);
      console.log("login successful ", res.data);
      router.push("/profile");
    } catch (error) {
      console.log("login failed");
    }
  };
  return (
    <div>
      <div className="mb-6">
        <input
          placeholder="username"
          name="email"
          id="email"
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
      <button onClick={login}>Login BUtton</button>
      <br />
     <Link href='/signup'>go to signUp page</Link>
    </div>
  );
}
