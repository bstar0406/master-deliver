import * as React from "react";

import Template from "./Template";
import { GetSize } from "../../../../Shared/WindowSize";
const SaveBoxController = (props) => {
  return (
    <Template
      GetSize={GetSize}
      toggleSaveBox={props.toggleSaveBox}
      saveBox={props.saveBox} 
    />
  );
};
export default SaveBoxController;
