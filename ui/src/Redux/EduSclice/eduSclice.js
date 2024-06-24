// Redux/EduSclice/eduSclice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllEdu } from "../../_api/eduApi";


const initialState = {
  alledus: [],
  isLoading: false,
  error: null,
};

export const fetchEduApi = createAsyncThunk("education/fetchEduApi", async () => {
  const result = await getAllEdu();
  console.log("slice result edu", result);
  return result;
});

const eduSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEduApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEduApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.alledus = action.payload;
     
        state.error = null;
      })
      .addCase(fetchEduApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
  
});

export default eduSlice.reducer;
