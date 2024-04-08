import React from "react";

function Add({ themeBlack, addTask }) {
  return (
    <div className=" h-full w-full bg-black/30 absolute top-0">
      <div
        className={`h-72 w-[37rem] px-2 py-6 rounded-xl  border-2 flex flex-col items-center  gap-4 absolute top-[40%] left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 ${
          themeBlack ? "text-white bg-[#252525]" : "text-black bg-[#f5f5f5]"
        }`}
      >
        <h2 className="text-2xl font-bold">New Task</h2>
        <input
          type="text"
          name=""
          id=""
          placeholder="Input your task..."
          className="py-1 text-lg px-2 w-11/12 bg-transparent border-2 border-cyan-500 focus:border-cyan-600 outline-none rounded "
        />
        <div className="w-full px-8 flex  justify-between absolute bottom-0 p-4">
          <button
            name="cancel"
            className="border-2 border-cyan-600 text-cyan-600 font-bold px-2 py-1 rounded w-24 hover:text-red-500 hover:border-red-500"
            onClick={addTask}
          >
            CANCEL
          </button>
          <button
            name="add"
            className="border-2 border-cyan-600 text-white bg-cyan-600 font-bold px-2 py-1 rounded w-24   hover:scale-110"
            onClick={addTask}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default Add;
