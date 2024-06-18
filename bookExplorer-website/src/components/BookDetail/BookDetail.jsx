// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import BookDetailHeader from './BookDetailHeader';
// import Overview from './Overview.jsx'

// function BookDetail() {
//     const { bookid } = useParams()

//     const { data, isLoading } = useSelector((state) => ({
//         data: state.data?.data,
//         isLoading: state.isLoading,
//     }));

//     // Find the book with the matching ID
//     const book = data?.find((d) => d.id == bookid);

//     // Conditional rendering
//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (!book) {
//         return <div>Book not found</div>;
//     }

//     return (
//         <div className='w-full min-h-screen py-8 flex  flex-col justify-center gap-6'>
//             <div className='w-full h-60 flex items-center justify-center'>
//                 <div className=' h-full m-auto flex  flex-col justify-center gap-2'>
//                     <h1 className='text-4xl font-bold text-green-700'>{book.volumeInfo?.title}</h1>
//                     {book.volumeInfo?.subtitle && <h2 className='text-2xl font-semibold'>{book.volumeInfo?.subtitle}</h2>}
//                     <p className='text-xl font-medium text-gray-500' >by - {book.volumeInfo?.authors?.join(", ")}</p>
//                 </div>
//                 <img
//                     src={book.volumeInfo.imageLinks?.thumbnail}
//                     alt={`${book.volumeInfo?.title}book cover image`}
//                     className='m-auto w-40 shadow-xl'
//                 />
//             </div>
//             {/* <div className='w-4/5 m-auto rounded-lg border'>
//                 <div className='w-full m-auto  p-8  grid grid-cols-2 gap-2'>
//                     <p><b>ISBN: </b>{`${book.volumeInfo?.industryIdentifiers[0].identifier},${book.volumeInfo?.industryIdentifiers[1].identifier}`}</p>
//                     <p><b>Page count: </b>{book.volumeInfo?.pageCount}</p>
//                     <p><b>Published: </b>{book.volumeInfo?.publishedDate}</p>
//                     <p><b>Language: </b>English</p>
//                     <p><b>Publisher: </b>{book.volumeInfo?.publisher}</p>
//                     <p><b>Author: </b>{book.volumeInfo?.authors?.join(", ")}</p>
//                 </div>
//                 <hr className='w-11/12 m-auto' />
//                 <div className='w-full   p-8'>
//                     <p>{book.volumeInfo?.description}</p>
//                 </div>

//             </div> */}
//             <Overview ISBN1={book.volumeInfo?.industryIdentifiers[0].identifier} ISBN2={book.volumeInfo?.industryIdentifiers[1].identifier} PgCount={book.volumeInfo?.pageCount} Published={book.volumeInfo?.publishedDate} Publisher={book.volumeInfo?.publisher} Author={book.volumeInfo?.authors?.join(", ")} Description={book.volumeInfo?.description} />
//         </div>
//     );
// }

// export default BookDetail;




import React from 'react'

function BookDetail({Title,Subtitle,Author,Img}) {
  return (
    <div className='w-full h-60 flex items-center justify-center'>
                <div className=' h-full m-auto flex  flex-col justify-center gap-2'>
                    <h1 className='text-4xl font-bold text-green-700'>{Title}</h1>
                    {Subtitle && <h2 className='text-2xl font-semibold'>{Subtitle}</h2>}
                    <p className='text-xl font-medium text-gray-500' >by - {Author}</p>
                </div>
                <img
                    src={Img}
                    alt={`${Title}book cover image`}
                    className='m-auto w-40 shadow-xl'
                />
            </div>
  )
}

export default BookDetail