import * as React from "react";
import Template from "./Template";
import { GetSize } from "../../../../../Shared/WindowSize";

const SubmittedCardController = (props) => {
  const allBoxes = props.boxesData;
  const submittedBoxes = allBoxes.filter((box) => box.status === "submitted");
  return (
    <Template
      items={props.items}
      boxesData={submittedBoxes}
      viewBox={props.viewBox}
      GetSize={GetSize}
    />
  );
};
export default SubmittedCardController;
