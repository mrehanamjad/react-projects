import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <div className='h-full flex flex-col gap-2 w-2/3 md:w-1/2 m-auto'>
            {todos.map((todo) => (
                <li key={todo.id} className='h-14 px-5 w-full rounded-lg bg-cyan-300  shadow-md  shadow-black flex justify-between items-center'>
                    {todo.text}
                    <button className='text-red-500 font-bold text-2xl hover:text-3xl' title='delete todo' onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                </li>))}
        </div>
    )
}

export default Todos