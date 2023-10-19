import Image from "next/image";
import Link from "next/link";
import React from "react";

function HowItWorksSection() {
  return (
    <>
      <div className="pt-24 bg-[#315D9E] h-[548px]" id="how-it-works">
        <h2 className="text-white text-center text-xl sm:text-2xl md:text-4xl lg:text-6xl">HOW IT WORKS</h2>
        <span className="block w-[158px] h-1 bg-white mx-auto my-2 lg:my-4"></span>
      </div>
      <div className="flex justify-center items-center pb-[85px]">
        <div className="w-[80%] bg-[#D4DAE3] rounded-[20px] -mt-[350px] md:-mt-[300px] py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-9 gap-5 mb-11">
            <div className="flex justify-center items-center col-span-1">
              <h1
                className="text-2xl md:text-3xl lg:text-6xl text-[#77C4FD] italic"
                style={{ fontFamily: "Inter" }}
              >
                1
              </h1>
            </div>
            <div className="flex justify-center items-center col-span-3 lg:col-span-2">
              <Image
                src="/images/ESP-32.png"
                width={206}
                height={199}
                alt="ESP-32"
              />
            </div>
            <div className="flex justify-center items-center col-span-5 lg:col-span-6">
              <p className="text-justify text-xs sm:text-base md:text-xl lg:text-3xl">
                Komponen utama yang digunakan dalam Larvasida Ball adalah ESP
                32, yang berfungsi sebagai navigasi dan IoT.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-9 gap-5 mb-11">
            <div className="flex justify-center items-center col-span-1">
              <h1
                className="text-2xl md:text-3xl lg:text-6xl text-[#77C4FD] italic"
                style={{ fontFamily: "Inter" }}
              >
                2
              </h1>
            </div>
            <div className="flex justify-center items-center col-span-3 lg:col-span-2">
              <Image
                src="/images/ESP-32.png"
                width={206}
                height={199}
                alt="ESP-32"
              />
            </div>
            <div className="flex justify-center items-center col-span-5 lg:col-span-6">
              <p className="text-justify text-xs sm:text-base md:text-xl lg:text-3xl">
                Kamera ESP 32 dan LED lamp hadir dalam Larvasida Ball untuk
                memfasilitasi analisis real-time keadaan di sekitar perangkat.
                Pengguna dapat mengakses tampilan ini dengan tap pada bagian
                “Get Started”
              </p>
            </div>
          </div>
          <div className="grid grid-cols-9 gap-5 mb-11">
            <div className="flex justify-center items-center col-span-1">
              <h1
                className="text-2xl md:text-3xl lg:text-6xl text-[#77C4FD] italic"
                style={{ fontFamily: "Inter" }}
              >
                3
              </h1>
            </div>
            <div className="flex justify-center items-center col-span-3 lg:col-span-2">
              <Image
                src="/images/ESP-32.png"
                width={206}
                height={199}
                alt="ESP-32"
              />
            </div>
            <div className="flex justify-center items-center col-span-5 lg:col-span-6">
              <p className="text-justify text-xs sm:text-base md:text-xl lg:text-3xl">
                Kamera ESP 32 juga berfungsi sebagai alat pendeteksi larva di
                permukaan air.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/how-it-works"
              className="text-center px-4 md:px-6 lg:px-8 py-2 md:py-4 bg-[#315D9E] text-white hover:cursor-pointer rounded-2xl text-lg md:text-xl font-bold"
            >
              More details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorksSection;
