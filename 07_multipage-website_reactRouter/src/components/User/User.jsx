import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-800 text-yellow-300 text-2xl font-bold p-4'>User:  {userid}</div>
  )
}

export default User