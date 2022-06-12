import * as React from "react";

import Template from "./Template";

const BoxListController = (props) => {
  
  return (
    <Template
      items={props.items}
      removeGoodies={props.removeGoodies}
      addGoodies={props.addGoodies}
    />
  );
};
export default BoxListController;
