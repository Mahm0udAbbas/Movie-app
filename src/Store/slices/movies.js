import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosConfig/instance";

export const moviesAction = createAsyncThunk("movies/getAll", async (page) => {
  const response = await axiosInstance.get(`/3/movie/popular?&page=${page}`);
  return response.data.results;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: { movies: [] },
  extraReducers: (builder) => {
    builder.addCase(moviesAction.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});
export default moviesSlice.reducer;
