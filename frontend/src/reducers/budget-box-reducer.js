const initialState = {
  budgetPrice: null,
  totalPrice: null,
};

export default function budgetBoxReducer(state = initialState, action) {
  switch (action.type) {
    case "INPUT_BOX_CHANGE": {
      return {
        ...state,
        budgetPrice: action.payload,
      };
    }
    case "INPUT_TOTAL_CHANGE": {
      return {
        ...state,
        totalPrice: action.payload,
      };
    }
    case "UPDATE_BUDGET_ON_CART_CHANGE": {
      const newBudgetPrice = state.budgetPrice - action.payload;
      return {
        ...state,
        budgetPrice: newBudgetPrice,
      };
    }

    default:
      return state;
  }
}
