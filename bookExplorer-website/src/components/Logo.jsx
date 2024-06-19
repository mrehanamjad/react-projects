import React from 'react'
import  {Link} from 'react-router-dom'

function Logo() {
  return (
    <div>
        <Link to="/" className="flex items-center font-bold text-2xl text-green-600">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/11/35/book-158441_1280.png"
              className="mr-3 h-12"
              alt="Logo"
            /> Book<i className="text-gray-500">Explorer</i>
          </Link>
    </div>
  )
}

export default Logo