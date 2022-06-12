import * as React from "react";

import Template from "./Template";
import { GetSize } from "../../../../Shared/WindowSize";
const ListDetailController = (props) => {
  return (
    <Template
      changePage={props.changePage}
      startNewBox={props.startNewBox}
      GetSize={GetSize}
      setPage={props.setPage}
      boxName={props.boxName}
    />
  );
};
export default ListDetailController;
