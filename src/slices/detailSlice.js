import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  businessModels: [],
  investmentEffort: "",
  TRLvalue: "",
  categories: [],
  company: {},
  user: {},
};

const detailSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    addBusinessModel: (state, action) => {
      state.businessModels = action.payload;
    },
    setInvestmentEffort: (state, action) => {
      state.investmentEffort = action.payload;
    },
    setTRLValue: (state, action) => {
      state.TRLvalue = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  addBusinessModel,
  setInvestmentEffort,
  setTRLValue,
  setCategories,
  setCompany,
  setUser,
} = detailSlice.actions;
export default detailSlice.reducer;
