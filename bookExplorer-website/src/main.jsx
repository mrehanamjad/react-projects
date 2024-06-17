import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Layout from './Layout.jsx'
import Books from './components/Books.jsx'
import Search from './components/Search.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '',
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'books/:cat',
      element: <Books />
    },{
      path: 'search',
      element: <Search />
    }
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {window.scrollTo(0,0)}
    </Provider>
  </React.StrictMode>,
)

