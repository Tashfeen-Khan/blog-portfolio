// import { getSelfData } from '@/_api/selfApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSelfData, updateSelfApi } from '../../_api/selfApi';

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
export const updateSelf = createAsyncThunk('self/updateSelf', async ({ id, updatedData }) => {
  console.log("slice", id, updatedData);
  const response = await updateSelfApi(id, updatedData);
  return response;
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
      })
      .addCase(updateSelf.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedSelfIndex = state.selfDatas.findIndex(self => self._id === action.meta.arg.id);
        if (updatedSelfIndex !== -1) {
          state.selfDatas[updatedSelfIndex] = action.payload;
        }
      })
  },
});

export default selfSlice.reducer;
