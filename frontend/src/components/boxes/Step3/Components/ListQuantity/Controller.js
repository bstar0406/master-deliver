import * as React from "react";

import Template from "./Template";

const ListQuantityController = (props) => {
  const quantity = props.item.quantity;
  const increase = () => {
    props.updateProductQuantity(props.item, quantity + 1);
  };
  const decrease = () => {
    if (quantity > 1) {
      props.updateProductQuantity(props.item, quantity - 1);
    }
  };
  return (
    <Template quantity={quantity} increase={increase} decrease={decrease} />
  );
};
export default ListQuantityController;
