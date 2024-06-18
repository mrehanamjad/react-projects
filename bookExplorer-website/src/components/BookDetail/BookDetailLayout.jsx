import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BookDetailHeader from './BookDetailHeader';
import Overview from './Overview.jsx'
import BookDetail from './BookDetail.jsx';

function BookDetailLayout() {

    const { bookid } = useParams()

    const { data, isLoading } = useSelector((state) => ({
        data: state.data?.data,
        isLoading: state.isLoading,
    }));

    // Find the book with the matching ID
    const book = data?.find((d) => d.id == bookid);

    // Conditional rendering
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!book) {
        return <div>Book not found</div>;
    }

  return (
    <div className='w-full min-h-screen py-8 flex  flex-col justify-center gap-6'>
        <BookDetail Title={book.volumeInfo?.title} Subtitle={book.volumeInfo?.subtitle} Author={book.volumeInfo?.authors?.join(", ")} Img={book.volumeInfo.imageLinks?.thumbnail} />
        <BookDetailHeader />
        <Outlet />
    </div>
  )
}

export default BookDetailLayout