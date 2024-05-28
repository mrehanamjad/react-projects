import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState("")

    const dispatch = useDispatch()
    // dispatch stores value in store by using reducer
    const addTodoHandler = (e) => { e.preventDefault() 
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form action="" onSubmit={addTodoHandler} className='h-20 flex items-center justify-center gap-2'>
            <input required type="text" className='p-2 px-4 outline-none w-2/3 md:w-1/2 shadow-md  shadow-black' onChange={(e) => setInput(e.currentTarget.value)} value={input} placeholder='Enter Task..' />
            <button type="submit" className='px-4 py-2 rounded bg-cyan-600 text-white shadow-md shadow-black  active:scale-95'>Add</button>
        </form>
    )
}

export default AddTodo