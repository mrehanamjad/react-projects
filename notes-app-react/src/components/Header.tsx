import React,{ useState,useEffect } from 'react';
import { CgNotes } from '../icons';
import { TbSunMoon } from "react-icons/tb";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.querySelector("html")?.classList.toggle("dark");
  }, [darkMode])

  return (
    <div className='h-14 w-full bg-gray-800 flex justify-between px-5 md:px-12 items-center font-bold text-2xl text-blue-400'>
      <div className="flex gap-1 " id='logo'>
        <CgNotes className='mt-1' /> R_Notes
      </div>
      <div>
        <button onClick={(e) => setDarkMode((prev) => !prev)} className='p-2 hover:bg-gray-900  text-3xl font-extrabold m-1 rounded-lg'><TbSunMoon /></button>
      </div>
    </div>
  );
};

export default Header;
