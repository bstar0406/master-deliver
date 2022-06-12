const initialState = {
  cartItems: [],
  cartTotal: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM_TO_CART": {
      const addedPrice = state.cartTotal + action.payload.productPrice;
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        cartTotal: addedPrice,
      };
    }
    case "REMOVE_ITEM_FROM_CART": {
      const index = state.cartItems.findIndex(
        (item) => item.vendorId === action.payload.vendorId
      );
      const cartItems = [...state.cartItems];
      cartItems.splice(index, 1);
      const reducedPrice = state.cartTotal - action.payload.totalPriceReduction;
      return {
        ...state,
        cartItems,
        cartTotal: reducedPrice,
      };
    }
    case "SET_CART_ITEMS": {
      return {
        ...state,
        cartItems: action.payload,
      };
    }
    case "SET_CART_TOTAL": {
      return {
        ...state,
        cartTotal: action.payload,
      };
    }
    default:
      return state;
  }
}
