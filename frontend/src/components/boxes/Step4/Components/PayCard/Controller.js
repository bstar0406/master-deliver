import * as React from "react";

import Template from "./Template";

const PayCardController = (props) => {
  return (
    <Template
      item={props.item}
      me={props.me}
      currentCard={props.currentCard}
      chooseCard={props.chooseCard}
    />
  );
};
export default PayCardController;
