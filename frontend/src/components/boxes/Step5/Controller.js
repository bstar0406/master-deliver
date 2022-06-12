import * as React from "react";
import { useSelector } from 'react-redux';

import Template from "./Template";
import { GetSize } from "../../../Shared/WindowSize";
const boxState ={
  confirmNo:'123 – 456 – 789',
}
const Step5Controller = () => {
  const saveBox = useSelector((state) => state.manageStep.saveBox)

  return <Template  boxState={boxState} GetSize={GetSize} saveBox={saveBox}/>;
};
export default Step5Controller;
