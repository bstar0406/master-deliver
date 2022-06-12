import GoodieItem from "../model/Goodies";
import { addToCart } from "../actions";

export const addItemToCart = (dispatch, vendor, product) => {
  const { itemObj } = GoodieItem.addItemObjectCreator(vendor, product);
  dispatch(addToCart(itemObj));
};
