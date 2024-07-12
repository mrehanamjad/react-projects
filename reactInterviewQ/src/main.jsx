import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Problem1 from './Problems/Problem1.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [{
      path: "problem1",
      element: <Problem1 />
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
