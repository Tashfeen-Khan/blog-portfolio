import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../Redux/BlogSclice/blogsclice';
import selfReducer from '../Redux/SelfSclice/selfSclice';
import eduReducer from '../Redux/EduSclice/eduSclice';
import expReducer from "../Redux/experianceSclice/expSclice";
import workReducer from "../Redux/WorkSclice/worksclice";
export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    self: selfReducer,
    education:eduReducer,
    experiance:expReducer,
    Work:workReducer
  },
});

export default store;
