import React from 'react'

function Card({img,title}) {
  return (
    <div id="card" className='min-h-80 w-64 m-4   p-3 flex flex-col gap-2 shadow-lg  shadow-slate-500 group'>
        <img src={`${img}`} alt={`${title} book cover image`} className='m-auto h-[70%] group-hover:shadow-xl shadow-slate-500  group-hover:-translate-y-7 duration-500' />
        <p className='text-center font-semibold group-hover:scale-110'>{title}</p>
        <button className='p-1 px-2 rounded-md bg-green-600 group-hover:shadow-xl shadow-slate-500'>Explore</button>
      </div>
  )
}

export default Card