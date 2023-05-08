import { createSlice } from '@reduxjs/toolkit'

export const counterSlice  = createSlice({
    name: 'counter',
    initialState: () => ({
        modal: true
      }),
    reducers: {
        closeModal: (state) => {
            state.modal = false
        } 
    }
})

export const { closeModal } = counterSlice .actions

export default counterSlice.reducer