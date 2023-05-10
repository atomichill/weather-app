import { createSlice } from '@reduxjs/toolkit'

export const inputSlice  = createSlice({
    name: 'input',
    initialState: () => ({
        inputValue: ''
      }),
    reducers: {
        inputSearch: (state , action) => {
            state.inputValue = action.payload
        } 
    }
})

export const { inputSearch} = inputSlice.actions

export default inputSlice.reducer