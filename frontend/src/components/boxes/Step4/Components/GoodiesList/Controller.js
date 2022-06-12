import * as React from "react";

import Template from "./Template";
const GoodiesListController = (props) => {
  return <Template items={props.boxData.items} />;
};
export default GoodiesListController;
