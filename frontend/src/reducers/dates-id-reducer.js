// TODO: YB: refactor this - we don't want strings here for the shipping dates
const initialState = {
  shipDate: "",
  datePicker: false,
  dateAnchor: "",
};

export default function datesIdReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SHIP_DATE": {
      return {
        ...state,
        shipDate: action.payload,
      };
    }
    case "TOGGLE_DATE_PICKER": {
      return {
        ...state,
        datePicker: !state.datePicker,
        dateAnchor: action.payload,
      };
    }
    default:
      return state;
  }
}
