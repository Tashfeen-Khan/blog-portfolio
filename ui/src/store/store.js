import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../Redux/BlogSclice/blogsclice1'
import blogReducer from '../Redux/BlogSclice/blogsclice'
export const store = configureStore({
  reducer: { blogs: blogReducer,
  },
})