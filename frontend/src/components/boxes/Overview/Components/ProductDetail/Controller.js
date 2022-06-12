import * as React from "react";

import Template from "./Template";

const ProductDetailController = (props) => {
  return (
    <Template
      nextStep={props.nextStep}
      item={props.item}
      items={props.items}
      changePage={props.changePage}
      addGoodies={props.addGoodies}
      removeGoodies={props.removeGoodies}
    />
  );
};
export default ProductDetailController;
