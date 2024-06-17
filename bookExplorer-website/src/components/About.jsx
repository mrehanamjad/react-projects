import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='bg-cover bg-center py-10' style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2022/11/08/06/05/read-7577787_1280.jpg)` }}>
      <div className="max-w-4xl mx-auto p-6 bg-white/85 shadow-lg shadow-gray-500 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">About Us</h1>
      <p className="text-lg mb-4 text-gray-700 text-center">Welcome to Book Explorer!</p>
      <p className="text-base mb-6 text-gray-600">
        At Book Explorer, we are passionate about making it easy for you to discover and learn about a wide variety of books. Whether you are a student, a professional, or just an avid reader, our website is designed to help you find books that meet your interests and needs.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4 text-blue-500">Our Mission</h2>
      <p className="text-base mb-4 text-gray-600">Our mission is to provide a comprehensive and user-friendly platform for book lovers everywhere. We aim to:</p>
      <ul className="list-disc list-inside mb-6 text-gray-600">
        <li className="mb-2">
          <strong className="font-semibold">Simplify the Search for Books:</strong> With our intuitive search functionality, you can easily find books by title, author, or keyword.
        </li>
        <li className="mb-2">
          <strong className="font-semibold">Offer Detailed Book Information:</strong> Our detailed book pages provide all the essential information you need, including descriptions, author details, publication data, and more.
        </li>
        <li className="mb-2">
          <strong className="font-semibold">Encourage Reading and Learning:</strong> We believe that reading is a gateway to knowledge and personal growth. Our platform is here to inspire you to explore new topics and expand your horizons.
        </li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-4 text-blue-500">What We Offer</h2>
      <ul className="list-disc list-inside mb-6 text-gray-600">
        <li className="mb-2">
          <strong className="font-semibold">Extensive Book Database:</strong> Our API-powered database includes a wide range of books from various genres and categories.
        </li>
        <li className="mb-2">
          <strong className="font-semibold">Detailed Book Information:</strong> From summaries and author bios to publication details and ISBN numbers, we provide all the information you need to make informed reading choices.
        </li>
        <li className="mb-2">
          <strong className="font-semibold">User-Friendly Experience:</strong> Our website is designed with you in mind, offering a clean and straightforward interface that makes book discovery a breeze.
        </li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-4 text-blue-500">Meet the Developer</h2>
      <p className="text-base mb-6 text-gray-600">
        Book Explorer is brought to you by Muhammad Rehan Amjad, a computer science student at Dawood University of Engineering and Technology. With a passion for coding, AI programming, and software engineering, Rehan is committed to creating useful and engaging digital experiences. This website is a product of his dedication to learning and his desire to share the joy of reading with others.
      </p>
      <p className="text-base mb-6 text-gray-600">
        We'd love to hear from you! Whether you have feedback, questions, or suggestions, feel free to reach out to us .
      </p>
      <div className='flex justify-center gap-5 mb-8 text-4xl'> 
      <Link to={'http://github.com/mrehanamjad'}>
      <FaGithub />
      </Link>
      <Link to={'https://www.linkedin.com/in/mrehanamjad/'}>
      <FaLinkedin />
      </Link>
      </div>
      <p className="text-base text-gray-600 text-center">Thank you for visiting Book Explorer. Happy reading!</p>
    </div>
    </div>
  )
}

export default About