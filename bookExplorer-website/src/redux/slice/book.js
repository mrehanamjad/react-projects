import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBook = createAsyncThunk("fetchBook",async () => {
    const res = await fetch('https://api.freeapi.app/api/v1/public/books?page=1&limit=210&inc')
    return res.json()
})

const book = createSlice({
    name: "book",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.pending,(state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchBook.fulfilled,(state,action) => {
            state.isLoading = false;
            state.data = action.payload.data;
        });
        builder.addCase(fetchBook.rejected,(state,action) => {
            state.isLoading = true;
        })
    }
})


export default book.reducer;