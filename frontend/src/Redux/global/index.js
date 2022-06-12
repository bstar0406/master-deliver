import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
};


const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setLoadingComplete: (state) => {
      state.isLoading = false;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const {
  setIsLoading,
  setLoadingComplete,
  setError,
} = globalSlice.actions;

export default globalSlice.reducer;