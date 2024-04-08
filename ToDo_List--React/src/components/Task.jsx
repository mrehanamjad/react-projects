import React from "react";

function Task({ themeBlack, id, content, deleteTask,completeTask }) {
  return (
    <div
      id={id}
      className="taskCard h-14 w-96  border-cyan-600 border-b-2 flex items-center"
    >
      <input
        type="checkbox"
        name=""
        id=""
        className="h-6 w-6 accent-cyan-600 m-1 hover:scale-110 cursor-pointer"
        onChange={completeTask}
      />
      <input
        type="text"
        value={content}
        className="w-full bg-transparent text-md m-1 outline-none"
        readOnly
      />
      <i
        className={`fa-solid fa-pen cursor-pointer m-1 hover:scale-110  ${
          themeBlack ? "text-white/60" : "text-black/70"
        }`}
      ></i>
      <i
        className={`fa-regular fa-trash-can cursor-pointer m-1 hover:scale-110 hover:text-red-500  ${
          themeBlack ? "text-white/60" : "text-black/70"
        }`}
        onClick={deleteTask}
      ></i>
    </div>
  );
}

export default Task;
