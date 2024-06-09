import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../Redux/BlogSclice/blogsclice';
import selfReducer from '../Redux/SelfSclice/selfSclice';

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    self: selfReducer,
  },
});

export default store;
