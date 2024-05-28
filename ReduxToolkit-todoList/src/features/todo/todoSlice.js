import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = { // we can also take array
    todos:[{id:1,text:"task #1"}]
}

export const todoSlice = createSlice({
    name:"todo", // this name will be shown on Redux DevTools Chrome extension
    initialState,
    reducers: {
        // we can also write these functions out of createSclice as we did with initialState
        // OR  in other files (in large scale application) 
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text: action.payload  // payload is an object
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            // over writting state.todos  
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
    }
})

export  const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer

/*
State:	The current state of the application data.
Action:	An object that describes what happened in the application /
        an object that describes an event that should trigger a change in the state. 

*/