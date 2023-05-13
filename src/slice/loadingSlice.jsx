import {createSlice} from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
      loadingValue: false
    },
    reducers: {
      onLoaded: (state) => {
        state.loadingValue = true;
      } 
    }
  })
  
  export const { onLoaded } = loadingSlice.actions;
  
  export default loadingSlice.reducer;