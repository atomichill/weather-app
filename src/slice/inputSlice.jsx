import { createSlice } from '@reduxjs/toolkit'

export const inputSlice  = createSlice({
    name: 'input',
    initialState: () => ({
        inputValue: ''
      }),
    reducers: {
        inputSearch: (state , payload) => {
            state.name = payload;
        } 
    }
})

export const { inputSearch} = inputSlice.actions

export default inputSlice.reducer