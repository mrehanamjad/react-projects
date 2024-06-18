import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Card from '../Card'

function SmilarBooks() {

    const { cat, bookid } = useParams()

    const { data, isLoading } = useSelector((state) => ({
      data: state.data?.data,
      isLoading: state.isLoading,
    }));

    // Find the book with the matching ID
    const book = data?.find((d) => d.id == bookid);
    const bookCat = book?.volumeInfo?.categories?.join("").toLowerCase();
    const bookTitle = book?.volumeInfo?.title?.toLowerCase();

    if (isLoading) return <div className='m-40 text-3xl font-bold text-center'>Loading....</div>;

    const finds = (where, whatArray) => {
      return whatArray.some(what => where?.includes(what));
    }

    const filterBooks = () => {
      if (data) return data.filter(d => {
        const categories = d.volumeInfo.categories?.join("").toLowerCase();
        const Title = d.volumeInfo.title?.toLowerCase();

        if (finds(bookCat, ['program', 'computer', 'reference']) || finds(bookTitle, ['program', 'developer', 'web', 'apps'])) return finds(categories, ['program', 'computer', 'reference']) || finds(Title, ['program', 'developer', 'web', 'apps'])

        if (bookTitle.includes('marvel')) return Title.includes('marvel')

        if (bookTitle?.includes('math')) return Title.includes('math')

        if (bookTitle?.includes('garden') || bookCat?.includes('garden')) return Title?.includes('garden') || categories?.includes('garden')

        if (bookTitle?.includes('food') || bookCat?.includes('cook')) return Title?.includes('food') || categories?.includes('cook')

        if (finds(bookCat, ['cricket', 'sport', 'swim']) || finds(bookTitle, ['football', 'cricket'])) return finds(categories, ['cricket', 'sport', 'swim']) || finds(Title, ['football', 'cricket']);

        if (bookTitle?.includes('wildlife')) return Title?.includes('wildlife');

        if (finds(bookTitle, ['bitcoin', 'crypto', 'Ecosystem', 'tesla']) || finds(bookCat, ["business", 'economics'])) return finds(Title, ['bitcoin', 'crypto', 'Ecosystem', 'tesla']) || finds(categories, ["business", 'economics'])

        if (finds(bookTitle, ['uber', 'elon']) || finds(bookCat, ["biography", 'Photography', '"Electrical engineers"'])) return finds(Title, ['uber', 'elon']) || finds(categories, ["biography", 'Photography', '"Electrical engineers"'])

        });
        return [];
      }


  const booksToDisplay = filterBooks();

  return (
    <div className='p-8 flex flex-wrap items-center'>
      {booksToDisplay && booksToDisplay.length > 0 ? (
        booksToDisplay.map((d) => (
          <Link to={`/bookdetail/${d.id}/overview`}>
            <Card key={d.id} img={d.volumeInfo.imageLinks?.thumbnail} title={d.volumeInfo.title} />
          </Link>
        ))
      ) : (
        <h1 className='text-xl'>No books found</h1>
      )}
    </div>
  );
}

export default SmilarBooks;