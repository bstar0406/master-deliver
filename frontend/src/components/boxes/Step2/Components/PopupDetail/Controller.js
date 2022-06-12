import * as React from "react";

import Template from "./Template";
import { GetSize } from "../../../../../Shared/WindowSize";
const PopupDetailController = (props) => {
  return (
    <Template
      item={props.item}
      addGoodies={props.addGoodies}
      removeGoodies={props.removeGoodies}
      GetSize={GetSize}
      toggleDetail={props.toggleDetail}
    />
  );
};
export default PopupDetailController;
