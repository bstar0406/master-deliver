const initialState = {
  lists: [],
  selectedList: null,
};

export default function recipientListReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_RECIPIENT_LIST": {
      return {
        ...state,
        lists: action.payload,
      };
    }
    case "SELECTED_LIST": {
      return {
        ...state,
        selectedList: action.payload,
      };
    }

    default:
      return state;
  }
}
