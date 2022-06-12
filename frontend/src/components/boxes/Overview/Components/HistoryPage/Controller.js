import * as React from "react";

import Template from "./Template";
import { GetSize } from "../../../../../Shared/WindowSize";
const HistoryController = (props) => {
  return (
    <Template
      changePage={props.changePage}
      startNewBox={props.startNewBox}
      GetSize={GetSize}
    />
  );
};
export default HistoryController;
