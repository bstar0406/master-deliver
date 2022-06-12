import { configureStore } from '@reduxjs/toolkit';

import globalReducer from './global';
import budgetBoxReducer from './bugetBox';
import manageStepReducer from './manageStep';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    budgetBox: budgetBoxReducer,
    manageStep: manageStepReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
