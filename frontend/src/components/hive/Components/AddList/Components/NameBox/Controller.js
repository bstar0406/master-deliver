import * as React from "react";

import Template from "./Template";
const NameBoxController = (props) => {
  return (
    <Template
      boxName={props.boxName}
      changeBoxName={props.changeBoxName}
    />
  );
};
export default NameBoxController;
