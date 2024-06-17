import React from 'react';
import {  useSelector } from 'react-redux';
import Card from './Card';
import Categories from './Categories';
import { useParams } from 'react-router-dom';

function Books() {

  const {data,isLoading} = useSelector((state) => ({
    data: state.data?.data,
    isLoading: state.isLoading,
  }));
  const { cat } = useParams();


  if (isLoading) return <div className='m-40 text-3xl font-bold text-center'>Loading....</div>;

  const finds = (where, whatArray) => {
    return whatArray.some(what => where?.includes(what));
  }

  const filterBooks = () => {
    if (cat === "all" || cat === "" ) return data; 

    if (cat === "programming" || cat === "marvel" || cat === "maths" || cat === 'gardening' || cat === 'cooking' || cat === 'sports' || cat === 'wildlife' || cat === 'techandeconomics' || cat === 'biography') {

      if(data) return data.filter(d => {
            const categories = d.volumeInfo.categories?.join("").toLowerCase();
            const Title = d.volumeInfo.title?.toLowerCase();

            if(cat === "programming") return finds(categories,['program','computer','reference']) ||  finds(Title,['program','developer','web','apps'])  
            
            if(cat === "marvel") return Title.includes('marvel')

            if(cat === "maths") return Title.includes('math')

            if(cat === "gardening") return Title.includes('garden') || categories?.includes('garden')

            if(cat === "cooking") return Title.includes('food') || categories?.includes('cook')

            if(cat === "sports") return finds(categories,['cricket','sport','swim']) || finds(Title,['football','cricket']);

            if(cat === 'wildlife') return Title?.includes('wildlife');

            if(cat === 'techandeconomics') return  finds(Title,['bitcoin','crypto','Ecosystem','tesla']) ||  finds(categories,["business",'economics'])

            if(cat === 'biography') return  finds(Title,['uber','elon']) ||  finds(categories,["biography",'Photography','"Electrical engineers"'])


          });
    }

    // or we can also do as:
    // if (cat === "programming") {
    //   return state.data?.data.filter(d => {
    //     const categories = d.volumeInfo.categories?.join("").toLowerCase();
    //     const Title = d.volumeInfo.title.toLowerCase();
    //     return categories?.includes('program') || categories?.includes('computer') ||  Title.includes('program')
    //   });
    // }

    // if (cat === "marvel") {
    //   return state.data?.data.filter(d => {
    //     const Title = d.volumeInfo.title.toLowerCase();
    //     const categories = d.volumeInfo.categories?.join("").toLowerCase();
    //     return Title.includes('marvel') 
    //   });
    // }

    return [];
  };

  const booksToDisplay = filterBooks();

  return (
    <div className='p-8 flex flex-wrap items-center'>
      <Categories />
      {booksToDisplay && booksToDisplay.length > 0 ? (
        booksToDisplay.map((d) => (
          <Card key={d.id} img={d.volumeInfo.imageLinks?.thumbnail}  title={d.volumeInfo.title} />
        ))
      ) : (
        <h1 className='text-xl'>No books found</h1>
      )}
    </div>
  );
}

export default Books;
