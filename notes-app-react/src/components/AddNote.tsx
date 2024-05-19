import React, { useState, useEffect } from "react";
import { useNotesContext } from "../contexts";
import {
  IoIosAddCircle,
  FaChevronCircleLeft,
  FaImage,
  IoMdColorPalette,
  MdLabel,
  MdDelete,
  CiCircleChevDown,
} from "../icons";

const AddNote: React.FC = () => {
  const [letsAdd, setLetsAdd] = useState<boolean>(false);
  const [title,setTitle] = useState<string>("");
  const [content,setContent] = useState<string>("");
  
  const {addNote} = useNotesContext();

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    letsAdd ? (body.style.overflow = "hidden") : (body.style.overflow = "");
  }, [letsAdd]);

  const add = (e) => {
    e.preventDefault();

    if(!title) return

    addNote({id:Date.now(),title,content,bgColor: "bg-blue-400",bgImage: "./images/image.png"});
    setTitle("");
    setContent("");
    setLetsAdd(false)
  }

  return (
    <>
      {letsAdd ? (
        <div
          className="h-full w-full rounded-none m-0 z-30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:h-5/6 sm:w-5/6 sm:rounded-lg bg-red-400 p-4 flex flex-col gap-1 cursor-pointer bg-cover"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/945453/pexels-photo-945453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        >
          <form action="" className="h-full w-full flex flex-col gap-1" onSubmit={add}>
            <div className="w-full mb-2 flex justify-between text-3xl text-white font-bold"></div>
            <input
              type="text"
              className={`w-full p-1 outline-nonebg-white/55 font-bold text-lg `}
              placeholder="TiTle."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              name="content"
              id=""
              placeholder="Take a note.."
              className="resize-none  h-full  p-1 outline-none font-medium bg-white/55"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          <div className="w-full flex justify-between">
            <ul className="p-2 gap-2 flex justify-around text-2xl rounded-md ">
              <li>
                <FaImage />
              </li>
              <li>
                <IoMdColorPalette />
              </li>
            </ul>
          <div>
            <button onClick={()=>{setLetsAdd(false)}} className="px-3 py- m-2 font-bold text-xl text-red-600 border-red-600 border-2" >Cancel</button>
            <button type="submit" className="px-3 py- m-2 font-bold text-xl text-blue-600 border-blue-600 border-2" >Add</button>
          </div>
          </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setLetsAdd(true)}
          className="bg-blue-600 py-3 px-5 m-2 rounded-md shadow-lg shadow-gray-500 text-xl font-bold fixed bottom-10 right-12 z-10 hover:text-white flex items-center gap-2 "
        >
          <IoIosAddCircle className="text-3xl" /> New Note
        </button>
      )}
    </>
  );
};

export default AddNote;
