import React from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function BookDetailHeader() {
    const {bookid} = useParams()
    

    return (
        <ul className='w-4/5 pb-4 m-auto border-b flex justify-evenly'>
            <li  className=''>
                <NavLink to={`/bookdetail/${bookid}/overview`} className={({isActive}) => ` pb-3 w-4 rounded-sm border-green-500 ${isActive ? "border-b-4 text-green-500" : " "}`}>
                    Overview
                </NavLink>
            </li>
            <li className=''>
                <NavLink to={`/bookdetail/${bookid}/getbook`} className={({isActive}) => ` pb-3 w-4 rounded-sm border-green-500 ${isActive ? "border-b-4 text-green-500" : " "}`}>
                    Get the Book
                </NavLink>
            </li>
            <li className=''>
                <NavLink to={`/bookdetail/${bookid}/similarbooks`} className={({isActive}) => ` pb-3 w-4 rounded-sm border-green-500 ${isActive ? "border-b-4 text-green-500" : " "}`}>
                    Similar Books
                </NavLink>
            </li>
        </ul>
    )
}

export default BookDetailHeader