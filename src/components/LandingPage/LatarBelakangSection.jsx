"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

function LatarBelakangSection() {
  const handleLink = () => {
    window.location.href = "/main";
  };
  return (
    <>
      <div className="py-20 w-[80%] mx-auto overflow-hidden" id="latar-belakang">
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-16 lg:mb-24">
          <div
            className="p-4 rounded-2xl bg-[#D9D9D9] flex items-center justify-center cursor-pointer hover:bg-[#BFBFBF]"
            onClick={handleLink}
          >
            <Image src="/images/logo.svg" alt="logo" width={65} height={74} />
            <p className="text-black text-base sm:text-lg md:text-2xl lg:text-4xl font-normal italic">
              Get Started!
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-16 lg:gap-24">
          <div className="">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-[#22467C] text-center italic">
              Latar Belakang
            </h1>
            <span className="block w-[158px] h-1 bg-[#22467C] mx-auto my-2 lg:my-4"></span>
          </div>

          <div className="w-[80%]">
            <p className="text-xs sm:text-base md:text-xl lg:text-3xl font-light text-[#4F4A43] text-justify">
              Demam Berdarah Dengue (DBD) merupakan sebuah infeksi yang
              diakibatkan oleh arbovirus (arthro podborn virus) yang ditularkan
              melalui perantara gigitan nyamuk Aedes aegypti. Iklim tropis di
              Indonesia menjadi faktor pendukung persebaran nyamuk Aedes aegypti
              yang merupakan vektor utama penyakit DBD.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/latar-belakang"
            className="text-center px-8 py-4 bg-[#315D9E] text-white hover:cursor-pointer rounded-2xl text-sm sm:text-base md:text-xl lg:text-3xl font-bold"
          >
            More details
          </Link>
        </div>
      </div>
    </>
  );
}

export default LatarBelakangSection;
