import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllBlogs, deleteBlog, updateBlog } from '../../_api/blogApi';

const initialState = {
  allBlogs: [],
  isLoading: false,
  error: null
};

export const fetchBlogsApi = createAsyncThunk("blogs/fetchBlogsApi", async () => {
  const result = await getAllBlogs();
  return result;
});

export const deleteBlogApi = createAsyncThunk('blogs/deleteBlog', async (id, thunkAPI) => {
  await deleteBlog(id);
  return id;
});

export const updateBlogApi = createAsyncThunk('blogs/updateBlog', async ({ id, updatedData }) => {
  const response = await updateBlog(id, updatedData);
  return response;
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
      })
      .addCase(fetchBlogsApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteBlogApi.fulfilled, (state, action) => {
        state.allBlogs = state.allBlogs.filter(blog => blog._id !== action.payload);
      })
      .addCase(updateBlogApi.fulfilled, (state, action) => {
        const index = state.allBlogs.findIndex(blog => blog._id === action.payload._id);
        if (index !== -1) {
          state.allBlogs[index] = action.payload;
        }
      });
  }
});

export default blogSlice.reducer;
