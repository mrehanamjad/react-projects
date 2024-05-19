import React, { useState, useEffect } from "react";
import {
  FaPenSquare,
  FaChevronCircleLeft,
  FaImage,
  IoMdColorPalette,
  FaSave,
  MdDelete,
} from "../icons";
import { useNotesContext } from "../contexts";

const NoteItem: React.FC = ({ noteData }) => {
  const [expend, setExpend] = useState<boolean>(false);
  const [title, setTitle] = useState(noteData.title);
  const [content, setContent] = useState(noteData.content);

  const { updateNote } = useNotesContext();

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    expend ? (body.style.overflow = "hidden") : (body.style.overflow = "");
  }, [expend]);

  const update = (e) => {
    e.preventDefault()
    console.log("submitted");
    updateNote(noteData.id,{...noteData,title,content});
    setExpend(false)
  };

  return (
    <div
      onClick={() => {
        setExpend(true);
      }}
      className={`${
        expend
          ? " h-full w-full rounded-none m-0 z-30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:h-5/6 sm:w-5/6 sm:rounded-lg"
          : "sm:h-52 sm:w-56 m-6 "
      } bg-red-400 p-4 rounded-lg flex flex-col gap-1 cursor-pointer bg-cover`}
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/945453/pexels-photo-945453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <form
        action=""
        className="h-full w-full flex flex-col gap-1"
        onSubmit={update}
      >
        {expend && (
          <div className="w-full mb-2 flex justify-between text-3xl text-white font-bold">
            <button type="submit" className="p-2 bg-blue-600 rounded-full">
              <FaChevronCircleLeft
                onClick={(e) => {
                  e.stopPropagation();
                  setExpend(false);
                }}
              />
            </button>
          </div>
        )}
        <input
          type="text"
          className={`w-full p-1 outline-none ${
            !expend
              ? "overflow-hidden bg-transparent  cursor-pointer"
              : "bg-white/55"
          } font-bold text-lg `}
          placeholder="TiTle."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="content"
          id=""
          placeholder="Take a note.."
          className={`resize-none  h-full  p-1 outline-none font-medium ${
            !expend
              ? "overflow-hidden bg-transparent  cursor-pointer"
              : "bg-white/55"
          }`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="w-full flex flex-row-reverse">
          {!expend && (
            <FaPenSquare className="text-2xl hover:text-white cursor-pointer" />
          )}
          {expend && (
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
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpend(false);
                  }}
                  className="px-3 py- m-2 font-bold text-xl text-red-600 border-red-600 border-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py- m-2 font-bold text-xl text-blue-600 border-blue-600 border-2"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default NoteItem;
