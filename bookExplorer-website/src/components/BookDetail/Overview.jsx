import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function Overview() {

    const {bookid} = useParams()

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
        <div className='w-4/5 m-auto rounded-lg border'>
            <div className='w-full m-auto  p-8  grid grid-cols-2 gap-2'>
                <p><b>ISBN: </b>{`${book.volumeInfo?.industryIdentifiers[0].identifier},${book.volumeInfo?.industryIdentifiers[1].identifier}`}</p>
                <p><b>Page count: </b>{book.volumeInfo?.pageCount}</p>
                <p><b>Published: </b>{book.volumeInfo?.publishedDate}</p>
                <p><b>Language: </b>English</p>
                <p><b>Publisher: </b>{book.volumeInfo?.publisher}</p>
                <p><b>Author: </b>{book.volumeInfo?.authors?.join(", ")}</p>
            </div>
            <hr className='w-11/12 m-auto' />
            <div className='w-full   p-8'>
                <p>{book.volumeInfo?.description}</p>
            </div>
        </div>
    )
}

export default Overview