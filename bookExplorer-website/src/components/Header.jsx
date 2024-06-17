import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
// NavLink has feature of apply styling --- in this project,if link is active then its color changes to orage

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center font-bold text-2xl text-green-600">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/11/35/book-158441_1280.png"
              className="mr-3 h-12"
              alt="Logo"
            /> Book<i className="text-gray-500">Explorer</i>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to={"/search"}
              className="flex  items-center w-40 gap-2 text-gray-500 border-2  font-medium rounded-lg text-md px-4 pl-2 lg:px-5 lg:pl-3 py-2 lg:py-2.5 mr-2 outline-none"
            >
              <IoSearchOutline /> Search ... 
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-green-500" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/books/all"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-green-500" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                  }
                >
                  Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-green-500" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-green-500" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}