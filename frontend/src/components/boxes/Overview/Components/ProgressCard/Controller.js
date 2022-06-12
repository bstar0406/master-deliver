import * as React from "react";

import Template from "./Template";
import { GetSize } from "../../../../../Shared/WindowSize";

const ProgressCardController = (props) => {
  const allBoxes = props.boxesData;
  const inProgressBoxes = allBoxes.filter((box) => box.status === "draft");
  return <Template boxesData={inProgressBoxes} viewBox={props.viewBox} GetSize={GetSize}/>;
};
export default ProgressCardController;
