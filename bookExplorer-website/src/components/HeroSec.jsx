import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5'

function HeroSec() {
  const [bgImgLinks, setBgImgLinks] = useState([
    'https://cdn.pixabay.com/photo/2023/01/01/23/37/woman-7691013_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/22/19/25/adult-1850177_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/05/16/16/05/book-3406206_1280.jpg',
    'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/415078/pexels-photo-415078.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/824197/pexels-photo-824197.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/309724/pexels-photo-309724.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600',
  ])

  const [i, setI] = useState(0)

  useEffect(() => {
      setTimeout(() => {
        i < bgImgLinks.length ? setI(i + 1) : setI(0);
      }, 9000)
  }, [i])





  return (
    <div>
      <div className='h-screen w-full bg-center  bg-no-repeat bg-cover  text-xl bg-fixed duration-500 transition-all ' style={{ backgroundImage: `url(${bgImgLinks[i]})` }}>
        <div className='h-full w-full bg-black/45 text-white flex flex-col justify-center items-center px-16'>
          <div className='space-y-4 w-2/3 flex flex-col justify-center items-center text-center'>
            <h1 className='text-5xl font-bold'>Welcome to Book Explorer!</h1>
            <p>Discover a world of books at your fingertips. At Book Explorer, we bring you a vast collection of books from various genres and categories, all in one place. Whether you're looking for the latest bestsellers, classic literature, or specialized subject matter, we've got you covered.</p>
            <div className='flex gap-4'>
              <Link
                to={"/books/all"}
                className="shadow-xl flex w-36 text-white border-2  font-medium rounded-lg text-md px-4  lg:px-5 lg:pl-3 py-2 lg:py-2.5  outline-none bg-green-700"
              >
                Explore
              </Link>
              <Link
                to={"/search"}
                className="flex items-center w-40 gap-2 text-gray-500 border-2  font-medium rounded-lg text-md px-4 pl-2 lg:px-5 lg:pl-3 py-2 lg:py-2.5 mr-2 outline-none bg-white/75"
              >
                <IoSearchOutline /> Search ...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSec