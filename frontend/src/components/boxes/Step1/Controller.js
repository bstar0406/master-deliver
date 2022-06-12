import * as React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  nextStep,
} from '../../../Redux/manageStep';
import { GetSize } from "../../../Shared/WindowSize";

import Template from "./Template";
const Step1Controller = () => {
  const boxName = useSelector((state) => state.budgetBox.boxName)
  const boxCount = useSelector((state) => state.budgetBox.boxCount)
  const shippingDate = useSelector((state) => state.budgetBox.shippingDate)
  const saveBox = useSelector((state) => state.manageStep.saveBox)
  const [errorBorder, setErrorBorder] =React.useState([false,false,false])
  const dispatch = useDispatch()
  const changeStep = () => {
    changeError();
    if (boxName !== "" && boxCount !== 0 && shippingDate !== 0) dispatch(nextStep())
  };
  const changeError = () => {
    if(boxName === ""){
      setErrorBorder([true, false, false]);
    } else if(boxName !== "" && boxCount === 0 ){
      setErrorBorder([false, true, false]);
    }else if(boxName !== "" && boxCount !== 0 && shippingDate === 0){
      setErrorBorder([false, false, true]);
    }
  };
  return <Template nextStep={changeStep} errorBorder={errorBorder} changeError={changeError} GetSize={GetSize} saveBox={saveBox}/>;
};
export default Step1Controller;
