"use client";

import React from "react";
import {
  BiSolidUpArrow,
  BiSolidDownArrow,
  BiSolidLeftArrow,
  BiSolidRightArrow,
} from "react-icons/bi";
import toast from "react-hot-toast";

function Controller() {
  const handlePump1 = () => {
    toast("Pump1", {
      icon: "🔥",
    });
  };

  const handlePump2 = () => {
    toast("Pump2", {
      icon: "🔥",
    });
  };
  const handleButtonUp = () => {
    toast("Button Up", {
      icon: "🔥",
    });
  };
  const handleButtonDown = () => {
    toast("Button Down", {
      icon: "🔥",
    });
  };
  const handleButtonLeft = () => {
    toast("Button Left", {
      icon: "🔥",
    });
  };
  const handleButtonRight = () => {
    toast("Button Right", {
      icon: "🔥",
    });
  };
  const handleButtonOK = () => {
    toast.success("Button OK");
  };

  return (
    <>
      <div className="flex justify-center ">
        {/* Circle controller with 4 arrow button */}
        <div
          className="w-fit h-fit bg-[#D9D9D9] rounded-[20px] px-4 py-2 drop-shadow-md hover:cursor-pointer text-xl"
          onClick={handlePump1}
        >
          <p>Pump 1</p>
        </div>
        <div className="grid grid-cols-3 gap-4 bg-[#7793A630] w-[351px] h-[351px] mb-16 center rounded-full drop-shadow-xl">
          <div className="bg-rose"></div>
          <div className="bg-rose">
            <BiSolidUpArrow
              className="text-6xl m-auto items-center h-full text-[#1E1E1E] drop-shadow-lg hover:cursor-pointer"
              onClick={handleButtonUp}
            />
          </div>
          <div className="bg-rose"></div>
          <div className="bg-rose">
            <BiSolidLeftArrow
              className="text-6xl m-auto items-center h-full text-[#1E1E1E] drop-shadow-lg hover:cursor-pointer"
              onClick={handleButtonLeft}
            />
          </div>
          <div className="bg-rose">
            <div
              className="w-full h-full bg-white rounded-full m-auto flex items-center justify-center drop-shadow-lg hover:cursor-pointer"
              onClick={handleButtonOK}
            >
              <p className="text-center h-fit my-auto text-3xl ">OK</p>
            </div>
          </div>
          <div className="bg-rose">
            <BiSolidRightArrow
              className="text-6xl m-auto items-center h-full text-[#1E1E1E] drop-shadow-lg hover:cursor-pointer"
              onClick={handleButtonRight}
            />
          </div>
          <div className="bg-rose"></div>
          <div className="bg-rose">
            <BiSolidDownArrow
              className="text-6xl m-auto items-center h-full text-[#1E1E1E] hover:cursor-pointer"
              onClick={handleButtonDown}
            />
          </div>
          <div className="bg-rose"></div>
        </div>
        <div
          className="w-fit h-fit bg-[#D9D9D9] rounded-[20px] px-4 py-2 drop-shadow-md hover:cursor-pointer text-xl"
          onClick={handlePump2}
        >
          <p>Pump 2</p>
        </div>
      </div>
      <div className="text-black text-center text-xl pb-10">
        <p>Copyright 2023 - Tim Ofelos Larvasida Ball</p>
      </div>
    </>
  );
}

export default Controller;
