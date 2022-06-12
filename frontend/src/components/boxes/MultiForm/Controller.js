import * as React from "react";
import { GetSize } from "../../../Shared/WindowSize";
import { useSelector } from "react-redux";

import Template from "./Template";
const MultiFormController = (props) => {
  const panRef = React.useRef(null)
  const detailPage = useSelector((state) => state.manageStep.detailPage);
  
  React.useEffect(() => {
    if(panRef.current!==null)
    panRef.current.scrollTo(0, 0)
  }, [props.currentStep, detailPage]);
  return <Template currentStep={props.currentStep} GetSize={GetSize} panRef={panRef}/>;
};
export default MultiFormController;
