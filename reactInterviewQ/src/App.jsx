import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Problem1 from './Problems/Problem1'
import { NavLink, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <div className='header'>
      <div>
     <img src={reactLogo} className="logo react" alt="React logo" />
     </div>
      <h2>Interview Questions</h2>
      </div>
      <hr />
      <div className="card">
        <NavLink to={'/Problem1'}><button>Problem 1</button></NavLink>
        <NavLink to={'/'}><button>Problem 2</button></NavLink>
      </div>
      <hr />
     <Outlet />
    </>
  )
}

export default App
