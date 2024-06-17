import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

function Search() {

    const [searchInput, setSearchInput] = useState("");

    const state = useSelector((state) => state);
    

    return (
        <div className='p-8 flex flex-col items-center justify-center'>
            <div className='w-full h-fit flex justify-center sticky  top-20'>
                <input
                    className='w-3/4 border rounded px-5 py-3  text-lg outline-none shadow-xl placeholder:text-green-600'
                    type="text"
                    placeholder='Seach your favourite book ..'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.currentTarget.value)}
                />
                <button className='p-2 px-6 border shadow-xl text-green-600 active:scale-90 hover:bg-green-300'>Search</button>
            </div>
            <div className='p-8 min-h-96 flex flex-wrap items-center justify-center'>
            {searchInput ? state.data?.data && state.data?.data.map((d) =>(d.volumeInfo.authors?.join(" ").toLowerCase().includes(searchInput.toLowerCase()) || d.volumeInfo.title.toLowerCase().includes(searchInput.toLowerCase())) && (
                <Card key={d.id} img={d.volumeInfo.imageLinks?.thumbnail} title={d.volumeInfo.title} />
            )): (
                <h1 className='text-xl'>Search by Book Title or By Author Name</h1>
            )}
            </div>
        </div>
    )
}

export default Search