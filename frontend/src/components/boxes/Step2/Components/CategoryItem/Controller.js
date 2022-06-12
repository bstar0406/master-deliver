import * as React from "react";

import Template from "./Template";

const CategoryItemController = (props) => {
  return (
    <Template
      item={props.item}
      me={props.me}
      currentItem={props.currentItem}
      chooseButton={props.chooseButton}
    />
  );
};
export default CategoryItemController;
