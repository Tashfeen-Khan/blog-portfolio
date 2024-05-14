import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/BlogSclice/blogsclice'
export const store = configureStore({
  reducer: {counter: counterReducer,},
})