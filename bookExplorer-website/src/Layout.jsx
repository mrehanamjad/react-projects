import React,{useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchBook } from './redux/slice/book'

function Layout() {

  const dispach = useDispatch();

    useEffect(() => {
      dispach(fetchBook())
    }, [])

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout