import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep:0,
  popupDetail:false,
  editBox:false,
  saveBox:false
};


const manageStepSlice = createSlice({
  name: "manageStep",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep+=1;
    },
    changeStep: (state, {payload}) => {
      state.currentStep = payload;
    },
    togglePopupDetail: (state) => {
      state.popupDetail =!state.popupDetail;
    },
    toggleEditBox: (state) => {
      state.editBox =!state.editBox;
    },
    toggleSaveBox: (state) => {
      state.saveBox =!state.saveBox;
    },
  },
});

export const {
  nextStep,
  changeStep,
  togglePopupDetail,
  toggleEditBox,
  toggleSaveBox
} = manageStepSlice.actions;

export default manageStepSlice.reducer;