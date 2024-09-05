import axios from "axios";
// import store from "../Store/store";
// import { setLoading } from "../Store/slices/loader";
// import { moviesAction } from "../Store/slices/movies";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org",
  params: {
    api_key: "6c170dfb034254eb7eb526387bef7461",
  },
});

// request interceptor

// axiosInstance.interceptors.request.use(
//   (config) => {
//     store.dispatch(setLoading(true));
//     store.dispatch(moviesAction(2));

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// //response interceptor
// axiosInstance.interceptors.response.use(
//   (res) => {
//     store.dispatch(setLoading(false));
//     return res;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );
export default axiosInstance;
