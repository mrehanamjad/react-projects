import React from "react";
import { CiSearch,MdLabel,CiCircleChevDown } from "../icons";


const Top: React.FC = () => {
  return (
    <div className="w-full h-12  flex items-center justify-center gap-1 lg:px-[20%] sm:px-[10%] px-[2%]">
      <form action="" className="w-full relative shadow-lg border-b-2 rounded-md ">
        <CiSearch className="absolute text-2xl font-extrabold top-1/2 left-1 -translate-y-1/2" />
        <input
          type="search"
          className="outline-none rounded-md py-2 px-4 pl-8 w-full"
          placeholder="Search Note..."
        />
      </form>
      <button className="p-2 flex gap-1 items-center  rounded-md font-medium shadow-lg border-2 border-gray-300">
        {" "}
        <MdLabel className="text-xl" /> Labels <CiCircleChevDown className="text-xl ml-1" />
      </button>
    </div>
  );
};

export default Top;
