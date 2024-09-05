import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./slices/favs";
import moviesReducer from "./slices/movies";
import isFavReducer from "./slices/isFav";
import loaderReducer from "./slices/loader";
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    movies: moviesReducer,
    favirots: favouriteReducer,
    loader: loaderReducer,
    isFav: isFavReducer,
  },
});

export default store;
