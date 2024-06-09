// import { getSelfData } from '@/_api/selfApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSelfData } from '../../_api/selfApi';

const initialState = {
  selfDatas: [],
  isLoading: false,
  error: null,
};

export const fetchSelfApi = createAsyncThunk("self/fetchSelfApi", async () => {
  const result = await getSelfData();
  console.log("slice result", result); // Ensure to remove or comment this out in production
  return result;
});

const selfSlice = createSlice({
  name: 'self',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelfApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSelfApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selfDatas = action.payload;
      })
      .addCase(fetchSelfApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default selfSlice.reducer;
