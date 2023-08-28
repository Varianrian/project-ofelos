import React from "react";

function page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen pt-32">
        <div className="p-8 bg-[#5F9AC4] rounded-[30px]">
          <h1 className="text-4xl font-bold text-center text-white">SIGN UP</h1>
          <label className="block mt-4">
            <span className="text-white">Email</span>
            <input
              type="email"
              className="mt-1 p-2 block w-full border-[#22467C] border-2"
              placeholder="JohnDoe@gmail.com"
            />
          </label>
          <label className="block mt-4">
            <span className="text-white">Username</span>
            <input
              type="text"
              className="mt-1 p-2 block w-full border-[#22467C] border-2"
              placeholder="John Doe"
            />
          </label>
          <label className="block mt-4">
            <span className="text-white">Password</span>
            <input
              type="password"
              className="mt-1 p-2 block w-full border-[#22467C] border-2"
              placeholder="********"
            />
          </label>
          <label className="block mt-4">
            <span className="text-white">Confirm Password</span>
            <input
              type="password"
              className="mt-1 p-2 block w-full border-[#22467C] border-2"
              placeholder="********"
            />
          </label>
          <div className="w-full">
            <button className="mt-4 mx-auto block bg-[#22467C] text-white font-bold py-2 px-4 rounded-full">
              Login
            </button>
          </div>
          <p className="text-sm mt-4 text-white">
            Already have an account?{" "}
            <a href="/login" className="underline text-[#22467C] font-bold">
              Login here
            </a>
          </p>
        </div>
      </div>
      <div className="mt-16 mb-8">
        <p className="text-black text-xl font-normal text-center">
          Copyright 2023 - Tim Ofelos Larvasida Ball
        </p>
      </div>
    </>
  );
}

export default page;
