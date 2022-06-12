import * as React from "react";

import Template from "./Template";

const BoxCardController = (props) => {
  return (
    <Template
      items={props.items}
      boxState={props.boxData}
      removeGoodies={props.removeGoodies}
      addGoodies={props.addGoodies}
      nextStep={props.nextStep}
    />
  );
};
export default BoxCardController;
