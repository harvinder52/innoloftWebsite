import { configureStore, combineReducers } from "@reduxjs/toolkit";
import editModeReducer from "./slices/editModeSlice";
import urlSlice from "./slices/urlSlice";
import detailSlice from "./slices/detailSlice";
import descriptionSlice from "./slices/descriptionSlice";
import configurationSlice from "./slices/configurationSlice";

const rootReducer = combineReducers({
  editMode: editModeReducer,
  urlLink: urlSlice,
  details: detailSlice,
  description: descriptionSlice,
  configuration: configurationSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
