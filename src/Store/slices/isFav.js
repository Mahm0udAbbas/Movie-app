import { createSlice } from "@reduxjs/toolkit";

const isFavSlice = createSlice({
  name: "isFav",
  initialState: { isFav: {} },
  reducers: {
    setFav: (state, action) => {
      state.isFav = action.payload;
    },
  },
});
export const { setFav } = isFavSlice.actions;
export default isFavSlice.reducer;
