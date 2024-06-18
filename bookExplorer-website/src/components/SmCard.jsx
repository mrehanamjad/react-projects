import React from 'react'
import { NavLink } from 'react-router-dom'

function SmCard({link,imgSrc,txt,ImgClassName = '',ClassName = '',Alt = "Category Logo"}) {
  return (
    <NavLink to={link} className={({ isActive }) => `${isActive ? "bg-green-500 text-white"  :"bg-green-300"} w-28 rounded-xl pb-2 text-md font-bold h-20 shadow-lg shadow-gray-500  flex flex-col justify-end items-center ${ClassName}`}>
        <img className={`w-20 mb-2 bg-white rounded-full shadow-lg shadow-gray-500 ${ImgClassName}`} src={imgSrc} alt={Alt} />
        <p>{txt}</p>
    </NavLink>
  )
}

export default SmCard