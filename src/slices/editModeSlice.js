import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editMode: false,
};

const editModeSlice = createSlice({
  name: "editMode",
  initialState,
  reducers: {
    toggleEditMode: (state) => {
      state.editMode = !state.editMode;
    },
  },
});

export const { toggleEditMode } = editModeSlice.actions;
export default editModeSlice.reducer;
