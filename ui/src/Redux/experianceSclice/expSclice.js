// Redux/EduSclice/eduSclice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllExp } from "../../_api/experianceApi";



const initialState = {
  allexps: [],
  isLoading: false,
  error: null,
};

export const fetchExpApi = createAsyncThunk("education/fetchExpApi", async () => {
  const result = await getAllExp();
  console.log("slice result edu", result);
  return result;
});

const expSlice = createSlice({
  name: 'experiance',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchExpApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allexps = action.payload;
     
        state.error = null;
      })
      .addCase(fetchExpApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
  
});

export default expSlice.reducer;
