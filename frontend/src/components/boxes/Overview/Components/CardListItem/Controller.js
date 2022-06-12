import * as React from "react";

import Template from "./Template";

const CardListController = (props) => {
  return <Template item={props.item} order={props.order} chooseProduct={props.chooseProduct} />;
};
export default CardListController;
