import counterReducer from '../slice/slice'
import inputSlice from '../slice/inputSlice';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        counter: counterReducer,
        input: inputSlice,
    }
  });

export default store;