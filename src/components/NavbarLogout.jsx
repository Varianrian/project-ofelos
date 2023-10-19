"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.svg";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";

function NavbarLogout() {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const logout = async () => {
    try {
      const loading = toast.loading("Loading...");
      const res = await axios.get("/api/users/logout");
      if (res.data.body.status === "success") {
        toast.dismiss(loading);
        toast.success("Logout Success");
        window.location.href = "/";
      } else {
        toast.dismiss(loading);
        toast.error("Logout Failed");
      }
    } catch (error) {
      toast.error("Error: ", error.message);
    }
  };

  return (
    <nav className="w-full z-10 bg-[#5F9AC4]">
      <div className="hidden md:block">
        <div className="flex w-full justify-between py-4 px-8 lg:py-8 md:px-12 align-middle">
          <div>
            <Link href="/" className="flex">
              <Image src={Logo} alt="logo" width={65} height={74} />
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold h-fit my-auto text-[#22467C]">
                Ofelos Larvasida Ball
              </p>
            </Link>
          </div>
          <ul className="flex gap-8 text-lg font-normal text-[#4F4A43] h-fit my-auto align-middle">
            <li
              className="bg-[#22467C] rounded-2xl font-bold text-white text-xl px-8 py-4 hover:cursor-pointer"
              onClick={logout}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex w-full justify-between py-4 px-8 lg:py-8 md:px-12 align-middle">
          <div>
            <Link href="/" className="flex">
              <Image src={Logo} alt="logo" width={65} height={74} />
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold h-fit my-auto text-[#22467C]">
                Ofelos Larvasida Ball
              </p>
            </Link>
          </div>
          <div className="flex gap-8 text-lg font-normal text-[#4F4A43] h-fit my-auto align-middle">
            <button onClick={handleDropdown}>
              <LuMenu className="text-3xl" />
            </button>
            <div className={dropdown ? "block absolute top-0 right-0 p-4 mt-24 w-full bg-white" : "hidden"}>
              <ul className="flex flex-col gap-4 text-lg font-normal text-[#4F4A43] h-fit my-auto align-middle">
                <li className="bg-[#22467C] rounded-2xl font-bold text-white text-base md:text-xl px-8 py-4 text-center" onClick={logout}>
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLogout;
