import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "",
};

const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { setUrl, clearUrl } = urlSlice.actions;
export default urlSlice.reducer;
