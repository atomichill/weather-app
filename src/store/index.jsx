import counterReducer from '../slice/slice'
import inputSlice from '../slice/inputSlice';
import loadingSlice from '../slice/loadingSlice';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        counter: counterReducer,
        input: inputSlice,
        loading: loadingSlice
    }
  });

export default store;