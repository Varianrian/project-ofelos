"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.svg";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { usePathname } from "next/navigation";

function NavbarLogin() {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
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
            <li className="bg-[#22467C] rounded-2xl font-bold text-white text-base md:text-xl px-8 py-4">
              <Link href="/login">Log In</Link>
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
                <li className="bg-[#22467C] rounded-2xl font-bold text-white text-base md:text-xl px-8 py-4 text-center">
                  <Link href="/login">Log In</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLogin;
