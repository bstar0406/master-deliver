const initialState = {
  name: "",
  boxId: null,
  lastUpdatedTimestamp: null,
};

export default function boxInfoReducer(state = initialState, action) {
  switch (action.type) {
    case "BOX_INFO_SET_NAME": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "SET_BOX_ID": {
      return {
        ...state,
        boxId: action.payload,
      };
    }
    case "SET_LAST_UPDATED_TIMESTAMP": {
      return {
        ...state,
        lastUpdatedTimestamp: action.payload,
      };
    }
    default:
      return state;
  }
}
