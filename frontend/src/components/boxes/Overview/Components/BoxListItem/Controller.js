import * as React from "react";

import Template from "./Template";
const BoxListItemController = (props) => {
  return (
    <Template item={props.item} link={props.link} viewBox={props.viewBox} />
  );
};
export default BoxListItemController;
