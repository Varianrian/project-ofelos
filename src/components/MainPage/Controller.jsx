import React from "react";
import {
  BiSolidUpArrow,
  BiSolidDownArrow,
  BiSolidLeftArrow,
  BiSolidRightArrow,
} from "react-icons/bi";

function Controller() {
  return (
    <>
      <div className="flex flex-col justify-center ">
        {/* Circle controller with 4 arrow button */}
        <div className="grid grid-cols-3 gap-4 bg-[#7793A630] w-[351px] h-[351px] mb-16 mx-auto text-center rounded-full drop-shadow-xl">
          <div className="bg-rose"></div>
          <div className="bg-rose">
            <BiSolidUpArrow className="text-6xl m-auto items-center h-full text-[#1E1E1E] drop-shadow-lg hover:cursor-pointer" />
          </div>
          <div className="bg-rose"></div>
          <div className="bg-rose">
            <BiSolidLeftArrow className="text-6xl m-auto items-center h-full text-[#1E1E1E] drop-shadow-lg hover:cursor-pointer" />
          </div>
          <div className="bg-rose">
            <div className="w-full h-full bg-white rounded-full m-auto flex items-center justify-center drop-shadow-lg hover:cursor-pointer">
              <p className="text-center h-fit my-auto text-3xl ">OK</p>
            </div>
          </div>
          <div className="bg-rose">
            <BiSolidRightArrow className="text-6xl m-auto items-center h-full text-[#1E1E1E] drop-shadow-lg hover:cursor-pointer" />
          </div>
          <div className="bg-rose"></div>
          <div className="bg-rose">
            <BiSolidDownArrow className="text-6xl m-auto items-center h-full text-[#1E1E1E] hover:cursor-pointer" />
          </div>
          <div className="bg-rose"></div>
        </div>
        <div className="text-black text-center text-xl pb-10">
          <p>Copyright 2023 - Tim Ofelos Larvasida Ball</p>
        </div>
      </div>
    </>
  );
}

export default Controller;
