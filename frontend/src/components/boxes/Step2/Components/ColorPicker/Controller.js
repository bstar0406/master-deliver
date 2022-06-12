import * as React from "react";

import Template from "./Template";

const ColorPickerController = () => {
  const [currentCircle, setCurrentCircle]=React.useState(0);
  const changeCircle = (number) =>{
    setCurrentCircle(number);
  }
  return <Template currentCircle={currentCircle} changeCircle={changeCircle}/>;
};
export default ColorPickerController;
