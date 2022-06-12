import * as React from "react";

import Template from "./Template";

const ProductListItemController = (props) => {
  return (
    <Template
      item={props.item}
      removeProduct={props.removeProduct}
      updateProductQuantity={props.updateProductQuantity}
    />
  );
};
export default ProductListItemController;
