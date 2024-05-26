import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getAllBlogs from '../../_api/blogApi';

const initialState = {
  allBlogs: [],
  isLoading: false,
  error: null
};
// console.log("allblogs",allBlogs);

export const fetchBlogsApi = createAsyncThunk("blogs/fetchBlogsApi", async () => {
  const result = await getAllBlogs();
  // console.log("sclise result",result);
  return result;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogsApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBlogsApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allBlogs = action.payload;
        console.log("exreduser",action);
      })
      .addCase(fetchBlogsApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export default blogSlice.reducer;
