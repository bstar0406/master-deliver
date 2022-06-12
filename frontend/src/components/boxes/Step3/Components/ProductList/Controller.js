import * as React from "react";
import Template from "./Template";
import {
  removeItemFromCart,
  updateQuantityForProduct,
} from "../../../../../controller/CartController";

const ProductListController = (props) => {
  const removeProduct = (item) => {
    removeItemFromCart(props.boxRef, item);
  };
  const updateProductQuantity = (item, quantity) => {
    updateQuantityForProduct(props.boxRef, item, quantity);
  };
  return (
    <Template
      items={props.boxData.items}
      removeProduct={removeProduct}
      updateProductQuantity={updateProductQuantity}
    />
  );
};
export default ProductListController;
