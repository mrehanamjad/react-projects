import React from 'react'

function Progremming() {
    const dispach = useDispatch();
    const state = useSelector((state) => state)
    console.log('state',state.data?.data);



    if (state.isLoading) return <div className='m-40 text-3xl font-bold text-center'>Loading....</div>;
  
    return (
      <div className='p-8 flex flex-wrap items-center'>
      <Categories />
      {state.data?.data && state.data?.data.map((d) => <Card key={d.id} img={d.volumeInfo.imageLinks?.thumbnail} title={d.volumeInfo.title} />
      )}
      </div>
    )
}

export default Progremming