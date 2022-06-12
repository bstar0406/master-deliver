import * as React from "react";
import { useSelector } from 'react-redux';

import Template from "./Template";
import { GetSize } from "../../../../../Shared/WindowSize";
const EditBoxController = (props) => {
  const boxName = useSelector((state) => state.budgetBox.boxName)
  const boxCount = useSelector((state) => state.budgetBox.boxCount)
  const shippingDate = useSelector((state) => state.budgetBox.shippingDate)
  const [errorBorder, setErrorBorder] =React.useState([false,false,false])
  const changeError = () => {
    if(boxName === ""){
      setErrorBorder([true, false, false]);
    } else if(boxName !== "" && boxCount === 0 ){
      setErrorBorder([false, true, false]);
    }else if(boxName !== "" && boxCount !== 0 && shippingDate === 0){
      setErrorBorder([false, false, true]);
    }
  };
  return (
    <Template
      GetSize={GetSize}
      toggleEdit={props.toggleEdit}
      errorBorder={errorBorder} 
      changeError={changeError}
    />
  );
};
export default EditBoxController;
