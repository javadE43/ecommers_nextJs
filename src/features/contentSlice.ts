import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

// INITIALSTATE
interface InitalState {
  content: { fa: any; en: any };
}
const initialState: InitalState = {
  content: { fa: [], en: [] },
};

//Reducer
const contentAllSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContentAll: (state, action) => {
      state.content.fa = action.payload?.data?.fa;
    },
  },
});

//
export const { setContentAll } = contentAllSlice.actions;
export default contentAllSlice.reducer;

//selector
export const selectCurrentUser = (state: RootState) => state?.content;
