import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchBook } from './redux/slice/book'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const dispach = useDispatch();
  const state = useSelector((state) => state)
  console.log('state',state.data?.data);
  // if (state.book.isLoading) return <h1>Loading....</h1>;

  return (
    <>
     <h1>This is check</h1>
     <Header />
     <main>
     <button onClick={(e) => dispach(fetchBook())}>Click ME Fetch ME</button>
    {state.data?.data && state.data?.data.map((d) => <li key={d.id}>{d.volumeInfo.title}</li>)}
    </main>
    <Footer />
    </>
  )
}

export default App
