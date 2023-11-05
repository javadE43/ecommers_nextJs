import { configureStore } from "@reduxjs/toolkit";
// Import your reducers
import { apiSlice } from "./apiStore";
import reducerContent from "../features/contentSlice";
//create configureStore
const store = configureStore({
  reducer: {
    content: reducerContent,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery

export default store;
