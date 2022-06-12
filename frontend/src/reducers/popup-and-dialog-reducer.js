const initialState = {
  open: false,
};

const miniImagePopUpInitialState = {
  open: false,
  image: null,
};

export function goodieDialogReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_GOODIE_POP_UP": {
      return {
        ...state,
        open: !state.open,
      };
    }
    default:
      return state;
  }
}

export function MiniImagePopUpReducer(
  state = miniImagePopUpInitialState,
  action
) {
  switch (action.type) {
    case "TOGGLE_MINI_POP_UP": {
      return {
        ...state,
        open: !state.open,
        image: action.payload,
      };
    }
    default:
      return state;
  }
}
