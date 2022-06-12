import * as React from "react";

import Template from "./Template";
import { GetSize } from "../../../../../Shared/WindowSize";

const BoxListController = (props) => {
  return (
    <Template
      items={props.boxesData}
      link={props.link}
      viewBox={props.viewBox}
      GetSize={GetSize}
    />
  );
};
export default BoxListController;
