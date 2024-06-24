// Redux/EduSclice/eduSclice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllWork } from "../../_api/workApi";




const initialState = {
  allwork: [],
  isLoading: false,
  error: null,
};

export const fetchWorkApi = createAsyncThunk("fetchWorkApi", async () => {
  const result = await getAllWork();
  console.log("slice result work", result);
  return result;
});

const workSlice = createSlice({
  name: 'Work',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWorkApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allwork = action.payload;
     
        state.error = null;
      })
      .addCase(fetchWorkApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
  
});

export default workSlice.reducer;
