import * as React from "react";

import Template from "./Template";
const BoxListItemController = (props) => {
  return <Template item={props.item} removeGoodies={props.removeGoodies}/>;
};
export default BoxListItemController;
