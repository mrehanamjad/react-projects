import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const obj = {name:"Rehan",bach:2024,level:"biggener"};
  const arr = ["C","Cpp","Javascript","Python","React","Java"];
  const myName = "Hanana"

  return (
    <>
    <h1 className='bg-green-400 font-bold text-black rounded-xl px-7 py-3'>TailwindCss</h1>
    <Card username="Hina" headline="Devops Engineer" />
    <Card username={myName} headline="Freelancer" btnText='Hire Me' />
    </>
  )
}

export default App
