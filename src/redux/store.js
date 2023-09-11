import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';

console.log(counterReducer)
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})