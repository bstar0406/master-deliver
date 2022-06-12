import { combineReducers } from "redux";
import budgetBoxReducer from "./budget-box-reducer";
import recipientListReducer from "./recipient-list-reducer";
import datesIdReducer from "./dates-id-reducer";
import cartReducer from "./cart-reducer";
import {
  goodieDialogReducer,
  MiniImagePopUpReducer,
} from "./popup-and-dialog-reducer";
import newProductListingReducer from "./new-product-listing-reducer";
import boxInfoReducer from "./box-info-reducer";
// import all reducers from folder into here!

export default combineReducers({
  budgetBoxReducer,
  recipientListReducer,
  datesIdReducer,
  cartReducer,
  goodieDialogReducer,
  newProductListingReducer,
  boxInfoReducer,
  MiniImagePopUpReducer,
});
