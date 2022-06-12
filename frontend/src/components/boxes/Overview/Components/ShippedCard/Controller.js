import * as React from "react";

import Template from "./Template";
import { GetSize } from "../../../../../Shared/WindowSize";

const ShippedCardController = (props) => {
  const allBoxes = props.boxesData;
  const shippedBoxes = allBoxes.filter((box) => box.status === "shipped");
  return <Template boxesData={shippedBoxes} viewBox={props.viewBox} GetSize={GetSize} />;
};
export default ShippedCardController;
