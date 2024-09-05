import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favirots",
  initialState: { favArr: [] },
  reducers: {
    addFav: (state, action) => {
      let flag = false;
      state.favArr.map((fav) => {
        if (fav.id == action.payload.id) {
          flag = true;
        }
      });
      if (!flag) {
        state.favArr.push(action.payload);
      }
    },

    removeFav: (state, action) => {
      console.log(action);

      state.favArr = state.favArr.filter((fav) => fav.id !== action.payload);
    },
  },
});

export const { addFav, removeFav } = favSlice.actions;

export default favSlice.reducer;
