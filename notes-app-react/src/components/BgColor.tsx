import React,{useState} from 'react'
import {FaImage,IoMdColorPalette} from '../icons'
import { useNotesContext } from '../contexts';

const BgColor:React.FC = ({note,setBg}) => {
    const [allColors, setAllColors] = useState<string[]>([
        "bg-[#f8f9fa]  dark:bg-[#1e293b]",
        "bg-[#faafa8]  dark:bg-[#77172e]",
        "bg-[#f39f76]  dark:bg-[#692b17]",
        "bg-[#fff8b8]  dark:bg-[#7c4a03]",
        "bg-[#d4e4ed]  dark:bg-[#264d3b]",
        "bg-[#e2f6d3]  dark:bg-[#0c625d]",
        "bg-[#b4ddd3]  dark:bg-[#256377]",
        "bg-[#aeccdc]  dark:bg-[#284255]",
        "bg-[#d3bfdb]  dark:bg-[#472e5b]",
        "bg-[#f6e2dd]  dark:bg-[#6c394f]",
        "bg-[#e9e3d4]  dark:bg-[#4b443a]",
        "bg-[#efeff1]  dark:bg-[#232427]",
      ]);
      const [letsChageBg, setLetsChangeBg] = useState<boolean>(false);

      const {updateNote} = useNotesContext();

    const update = (e) => {
        if(note) updateNote(note.id,{...note,bgColor:e.target.value})

        if(setBg) setBg(e.target.value)
        
    }


  return (
    <ul className="p-2 flex justify-around text-2xl dark:text-white rounded-md relative">
                  <li onClick={()=>setLetsChangeBg((prev) => !prev)} className='p-2 hover:bg-blue-300 rounded-full' >
                    <IoMdColorPalette/>
                {letsChageBg &&
                    <div className="absolute w-52 sm:w-[25rem] rounded-md sm:rounded-2xl bg-black/45 flex gap-1  sm:items-center justify-evenly flex-wrap p-1 ">
                      {allColors.map((color,i) => (
                        <button key={color} onClick={update} value={color}
                          className={`h-7 w-7  ${color} rounded-full cursor-pointer`}
                        >{``}</button>
                      ))}
                    </div>}
                  </li>
                  <li  className='p-2 hover:bg-blue-300 rounded-full' >
                    <FaImage />
                  </li>
                </ul>
  )
}

export default BgColor