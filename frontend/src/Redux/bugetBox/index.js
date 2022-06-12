import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxName: "",
  boxCount: 0,
  shippingDate: 0
};


const budgetBoxSlice = createSlice({
  name: "budgetBox",
  initialState,
  reducers: {
    setBoxName: (state, { payload }) => {
      state.boxName = payload;
    },
    setBoxCount: (state, { payload }) => {
      state.boxCount = payload;
    },
    setShippingDate: (state, { payload }) => {
      state.shippingDate = payload;
    },
  },
});

export const {
  setBoxName,
  setBoxCount,
  setShippingDate,
} = budgetBoxSlice.actions;

export default budgetBoxSlice.reducer;