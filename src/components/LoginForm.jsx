"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function LoginForm() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(user);
      const res = await axios.post("/api/users/login", user);

      if (res.data.body.status === "success") {
        toast.success("Login Success");
        router.push("/");
      } else {
        toast.error(res.data.body.message);
      }
    } catch (err) {
      toast.error(err.res.data.body.message);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="p-8 bg-[#5F9AC4] rounded-[30px]">
          <h1 className="text-4xl font-bold text-center text-white">LOGIN</h1>
          <form onSubmit={handleUserSubmit}>
            <label className="block mt-4">
              <span className="text-white">Username</span>
              <input
                type="text"
                name="username"
                id="username"
                className="mt-1 p-2 block w-full border-[#22467C] border-2"
                placeholder="John Doe"
                required
                onChange={handleUserChange}
                value={user.username}
              />
            </label>
            <label className="block mt-4">
              <span className="text-white">Password</span>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 p-2 block w-full border-[#22467C] border-2"
                placeholder="********"
                required
                onChange={handleUserChange}
                value={user.password}
              />
            </label>
            <div className="w-full">
              <input
                type="submit"
                value="Login"
                className="mt-4 mx-auto block bg-[#22467C] text-white font-bold py-2 px-4 rounded-full"
              />
            </div>
          </form>
          <p className="text-sm mt-4 text-white">
            Doesn't have an account?{" "}
            <a href="/signup" className="underline text-[#22467C] font-bold">
              Register here
            </a>
          </p>
        </div>
        <div className="absolute bottom-5">
          <p className="text-black text-xl font-normal">
            Copyright 2023 - Tim Ofelos Larvasida Ball
          </p>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default LoginForm;
